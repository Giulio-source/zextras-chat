import React, { useState, createContext, useEffect } from "react";

export const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messages.length === 0) return;
    localStorage.setItem("messages-storage", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    const messagesFromStorage = JSON.parse(
      localStorage.getItem("messages-storage")
    );
    if (messagesFromStorage.length !== 0) {
      setMessages(messagesFromStorage);
    }
  }, []);

  return (
    <MessagesContext.Provider value={[messages, setMessages]}>
      {children}
    </MessagesContext.Provider>
  );
};
