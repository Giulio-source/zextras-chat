import React, { useContext } from "react";

import { MessagesContext } from "../context/MessagesContext";

function MessageList() {
  const [messages, setMessages] = useContext(MessagesContext);

  const handleOnDelete = (e) => {
    e.preventDefault();
    const idToDelete = e.target.message_id.value;
    const updatedMessages = messages.filter(
      (message) => message.id !== idToDelete
    );
    setMessages(updatedMessages);
  };

  const renderedMessages = messages.map((message) => {
    return (
      <div
        key={message.id}
        className={message.user === "Zelda" ? "message left" : "message right"}
      >
        <p className="author">
          {message.user} <span className="time">{message.time}</span>
        </p>
        <p>{message.message}</p>
        <form action="/" onSubmit={handleOnDelete}>
          <input
            type="hidden"
            id="message_id"
            name="message-id"
            value={message.id}
          />
          <button type="submit" className="delete">
            x
          </button>
        </form>
      </div>
    );
  });

  return (
    <div className="message-list">
      {renderedMessages ? renderedMessages : null}
    </div>
  );
}

export default MessageList;
