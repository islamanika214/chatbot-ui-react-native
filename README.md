# Chatbot – A Smart React Native Chat App

This is a React Native chatbot app with typing indicators, streaming responses, and auto-scroll behavior. Built with Expo for easy cross-platform usage on iOS and Android.

---

## Table of Contents

- [Introduction](#introduction)  
- [Features](#features)  
- [System Architecture](#system-architecture)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Contributors](#contributors)  


---

## Introduction

This chatbot app simulates a friendly AI assistant. Users can send messages, and the bot responds with pre-defined replies, including a typing animation effect.  

It demonstrates key frontend engineering concepts like:

- Component-based design  
- State management for messages  
- Typing indicators and streaming responses  
- Safe area and responsive UI  

---

## Features

- **Chat Interface:** Smooth scrolling and clean message bubbles  
- **Typing Indicator:** Animated dots when the bot is typing  
- **Streaming Response:** Bot replies appear letter by letter  
- **Auto-Scroll:** Always scrolls to the latest message  
- **User / Bot Differentiation:** Different styles for user and bot messages  
- **Safe Area Handling:** Works on devices with notches/status bars  
- **Responsive UI:** Works on multiple device sizes  

---

## System Architecture

- **Frontend:** React Native  
- **Components:**  
  - `ChatHeader` – Displays the top app header  
  - `MessageBubble` – Shows individual messages  
  - `TypingIndicator` – Animates bot typing  
  - `InputBar` – User message input field  
- **Data:** Predefined replies stored in `replies.json`  
- **State Flow:**  
  - Messages managed using `useState`  
  - Bot typing simulated with `useState` + `setInterval`  
  - Auto-scroll handled with `useRef` + `FlatList`  
- **Streaming:** Bot replies appear one character at a time  

---

## Tech Stack

- **React Native** – UI and frontend logic  
- **Expo** – Cross-platform development and testing  
- **JavaScript** – App logic  
- **React Hooks** – State and lifecycle management  

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chatbot-ui-react-native.git
   cd chatbot-ui-react-native
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo project:
   ```bash
   npx expo start
   ```
   <a href="https://github.com/islamanika214/chatbot-ui-react-native/blob/main/QR.PNG"><img src="https://img.shields.io/badge/Scan%20QR%20Code-purple?style=for-the-badge" alt=" View QR Code"/></a> 


	 
## Usage

- Open the app on your mobile device.
- Send a message using the input bar.
- Observe the bot typing indicator.
- Watch the streaming response appear letter by letter.
- Scroll automatically stays at the latest message.

	

## Author

**Anika Islam** – Independent University, Bangladesh



