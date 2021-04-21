import React, { useState } from "react";
import "./styles.scss";

import { MessagesProvider } from "../context/MessagesContext";
import MessagesList from "./MessageList";
import MessageInput from "./MessageInput";

function App() {
  return (
    <MessagesProvider>
      <div className="container">
        <h1 className="hyrule-title">Hyrule Chat</h1>
        <MessagesList />
        <div className="message-inputs">
          <MessageInput username="Zelda" />
          <MessageInput username="Link" />
        </div>
      </div>
    </MessagesProvider>
  );
}

export default App;
