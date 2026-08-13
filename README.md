<div align="center">
  <h1>🤖 Llama AI Chatbot</h1>
  <p>A full-stack AI chatbot powered by Ollama and built with the MERN stack.</p>
</div>

<div align="center">

[![Features](https://img.shields.io/badge/Features-blue?style=for-the-badge)](#features)
[![Installation](https://img.shields.io/badge/Installation-green?style=for-the-badge)](#installation)
[![Usage](https://img.shields.io/badge/Usage-yellow?style=for-the-badge)](#usage)
[![Environment Variables](https://img.shields.io/badge/Environment%20Variables-red?style=for-the-badge)](#environment-variables)
[![Technologies Used](https://img.shields.io/badge/Technologies%20Used-gray?style=for-the-badge)](#technologies-used)
[![Project Structure](https://img.shields.io/badge/Project%20Structure-purple?style=for-the-badge)](#project-structure)
[![Security](https://img.shields.io/badge/Security-pink?style=for-the-badge)](#security)

</div>

---

## 📌 About the Project

**Llama AI Chatbot** is a full-stack AI chatbot application built using the MERN stack and integrated with **Ollama** for running AI language models locally.

The application provides an interactive chat experience where users can register, log in, and communicate with an AI assistant. User authentication and chat history are managed through a Node.js and Express backend with MongoDB.

The project uses **Ollama with the Llama model** for AI-powered natural language conversations.

---

## ✨ Features

- 🤖 **AI-Powered Conversations**
  - Uses Ollama and Llama models to generate intelligent responses.

- 🔐 **User Authentication**
  - Secure user registration and login.
  - JWT-based authentication.
  - Password hashing for secure storage.

- 💬 **Interactive Chat Interface**
  - Clean and responsive React-based chat UI.
  - Real-time interaction with the AI assistant.

- 📝 **Message History**
  - Stores conversations in MongoDB.
  - Allows users to access their previous chats.

- 🗑️ **Chat Management**
  - Users can manage and delete their chat messages.

- 🛡️ **Protected Routes**
  - Authentication middleware protects private API endpoints.

- 📱 **Responsive UI**
  - Designed to work across desktop and mobile screen sizes.

---

## 🛠️ Technologies Used

### Frontend

- React
- TypeScript
- Vite
- CSS
- Axios

### Backend

- Node.js
- Express.js
- TypeScript
- JWT
- bcrypt

### Database

- MongoDB
- Mongoose

### AI

- Ollama
- Llama Large Language Model

---

## 📂 Project Structure

```text
Llama-AI-Chatbot/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── helpers/
│   │   ├── pages/
│   │   └── App.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
