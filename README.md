<div align="center">
  <h1>🤖 Llama AI Chatbot</h1>
  <p>A full-stack AI chatbot built with React, TypeScript, Node.js, Express, MongoDB, and Ollama.</p>
</div>

<div align="center">

[![Features](https://img.shields.io/badge/Features-blue?style=for-the-badge)](#features)
[![Installation](https://img.shields.io/badge/Installation-green?style=for-the-badge)](#installation)
[![Usage](https://img.shields.io/badge/Usage-yellow?style=for-the-badge)](#usage)
[![Technologies Used](https://img.shields.io/badge/Technologies%20Used-gray?style=for-the-badge)](#technologies-used)
[![Project Structure](https://img.shields.io/badge/Project%20Structure-purple?style=for-the-badge)](#project-structure)
[![Security](https://img.shields.io/badge/Security-pink?style=for-the-badge)](#security)

</div>

---

## 📌 About the Project

Llama AI Chatbot is a full-stack AI chatbot that I built using React, TypeScript, Node.js, Express.js, MongoDB, and Ollama.

The main goal of this project was to build a complete chatbot application from the ground up with user authentication, persistent conversation history, and AI-powered responses.

Instead of using a paid OpenAI API, I integrated **Ollama with the Llama 3.2 model**, which allowed me to run the language model locally during development.

The project helped me work with frontend development, backend API development, authentication, database management, and AI/LLM integration in a single application.

---

## ✨ Features

- 🤖 **AI-Powered Conversations**
  - Uses Ollama with the Llama 3.2 model to generate AI responses.

- 🔐 **User Authentication**
  - User registration and login.
  - JWT-based authentication.
  - Password hashing using bcrypt.

- 💬 **Interactive Chat**
  - Clean React-based chat interface.
  - Users can send messages and receive responses from the AI assistant.

- 📝 **Chat History**
  - Previous conversations are stored in MongoDB.
  - Chat context is sent along with new messages so the AI can maintain the conversation.

- 🗑️ **Chat Management**
  - Users can delete their stored conversation history.

- 🛡️ **Protected API Routes**
  - User-specific endpoints are protected using authentication middleware.

- 📱 **Responsive Interface**
  - Frontend designed to provide a simple and accessible chat experience.

---

## 🧠 AI Integration

I integrated **Ollama** into the backend to communicate with the **Llama 3.2** language model.

When a user sends a message, the request follows this flow:

```text
User
  ↓
React Frontend
  ↓
Express / Node.js Backend
  ↓
Ollama API
  ↓
Llama 3.2
  ↓
AI Response
  ↓
MongoDB