import React from "react";
import user1 from "../../assets/images/user/01.jpg";
import user10 from "../../assets/images/user/10.jpg";

const MessageList = ({ messages, currentUserId, receiver, deleteMessage, conversationId, isDeleting }) => {
  return (
    <>
      {messages.map((message) => {
        const isSender = message.senderId === currentUserId;
        return (
          <div
            key={message.id}
            className={`message-container ${
              isSender ? "justify-content-end" : "justify-content-start"
            } ${isDeleting ? "deleting" : ""}`}
          >
            {!isSender && (
              <img
                src={receiver.profilePicture || user1}
                alt="chat-user"
                className="avatar-40 rounded-pill me-2"
                loading="lazy"
              />
            )}
            <div className="message-content">
              <div className={isSender ? "message-sent" : "message-received"}>
                {message.content}
                {isSender && (
                  <button
                    onClick={() => deleteMessage(message.id, conversationId)}
                    className="delete-message-btn"
                    disabled={isDeleting}
                  >
                    <i className="material-symbols-outlined">delete</i>
                  </button>
                )}
              </div>
              <span className="message-time">
                {new Date(message.createdAt).toLocaleTimeString()}
              </span>
            </div>
            {isSender && (
              <img
                src={user10}
                alt="chat-user"
                className="avatar-40 rounded-pill ms-2"
                loading="lazy"
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default MessageList;