import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";

import { MessagesContext } from "../context/MessagesContext";

function MessageInput({ username }) {
  const [messageValue, setMessageValue] = useState("");
  const [lastMessage, setLastMessage] = useState({});
  const [messages, setMessages] = useContext(MessagesContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    var today = new Date();
    if (!lastMessage.id) {
      const timeStamp = today.getHours() + "." + today.getMinutes();
      const newMessage = {
        message: messageValue,
        user: username,
        id: nanoid(),
        time: timeStamp,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessageValue("");
    } else {
      lastMessage.message = messageValue;
      const updatedMessages = messages.map((message) => {
        if (message.id === lastMessage.id) {
          return lastMessage;
        } else {
          return message;
        }
      });
      setMessages(updatedMessages);
      setLastMessage({});
      setMessageValue("");
    }
  };

  const handleArrowUp = (e) => {
    if (e.keyCode === 38) {
      const userMessages = messages.filter(
        (message) => message.user == username
      );
      if (userMessages.length > 0) {
        setLastMessage(userMessages[userMessages.length - 1]);
        setMessageValue(lastMessage.message);
      }
    }
  };

  return (
    <form action="/" onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={messageValue}
        onChange={(e) => setMessageValue(e.target.value)}
        name=""
        id=""
        placeholder={username}
        required
        onKeyDown={handleArrowUp}
      />
    </form>
  );
}

export default MessageInput;
