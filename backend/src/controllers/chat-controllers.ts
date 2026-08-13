import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import axios from "axios";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;

  try {
    const user = await User.findById(res.locals.jwtData.id);

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not registered OR Token malfunctioned" });
    }

    // Get previous chats
    const chats = user.chats.map(({ role, content }) => ({
      role,
      content,
    }));

    // Add the new user message
    chats.push({
      role: "user",
      content: message,
    });

    user.chats.push({
      role: "user",
      content: message,
    });

    // Send conversation to Ollama
    const ollamaUrl =
  process.env.OLLAMA_BASE_URL || "http://localhost:11434";

const response = await axios.post(
  `${ollamaUrl}/api/chat`,
  {
    model: "llama3.2",
    messages: chats,
    stream: false,
  },
  {
    headers: process.env.OLLAMA_API_KEY
      ? {
          Authorization: `Bearer ${process.env.OLLAMA_API_KEY}`,
          "Content-Type": "application/json",
        }
      : {
          "Content-Type": "application/json",
        },
  }
);

    // Get AI response
    const aiMessage = response.data.message;

    // Save AI response to MongoDB
    user.chats.push({
      role: "assistant",
      content: aiMessage.content,
    });

    await user.save();

    return res.status(200).json({
      chats: user.chats,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const sendChatsToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(res.locals.jwtData.id);

    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }

    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }

    return res.status(200).json({
      message: "OK",
      chats: user.chats,
    });
  } catch (error) {
    console.log(error);

    return res.status(200).json({
      message: "ERROR",
      cause: error.message,
    });
  }
};

export const deleteChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(res.locals.jwtData.id);

    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }

    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }

    // @ts-ignore
    user.chats = [];

    await user.save();

    return res.status(200).json({
      message: "OK",
    });
  } catch (error) {
    console.log(error);

    return res.status(200).json({
      message: "ERROR",
      cause: error.message,
    });
  }
};