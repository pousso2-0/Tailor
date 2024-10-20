import React, { useState } from "react";

const ChatPopupModal = ({ selectedConversation, messages, currentUser, getOtherUser, handleSendMessage, onClose }) => {
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const [newMessage, setNewMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(newMessage);
    setNewMessage("");
  };

  return (
      <div className="chat-popup-modal show" id="chat-popup-modal">
        <div className="bg-primary p-3 d-flex align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="image flex-shrink-0">
              <img
                  src={getOtherUser(selectedConversation)?.profilePicture}
                  alt={getOtherUser(selectedConversation)?.name}
                  className="img-fluid avatar-45 rounded-circle object-cover"
              />
            </div>
            <div className="content">
              <h6 className="mb-0 font-size-14 text-white">
                {getOtherUser(selectedConversation)?.name}
              </h6>
            </div>
          </div>
          <div className="chat-popup-modal-close lh-1" onClick={onClose}>
                    <span className="material-symbols-outlined font-size-18 text-white">
                        close
                    </span>
          </div>
        </div>
        <div className="chat-popup-body p-3 border-bottom">
          <ul className="list-inline p-0 mb-0 chat">
            {messages.map((message) => (
                <li
                    key={message.id}
                    className={`mt-3 ${
                        message.senderId === currentUser?.id ? "text-end" : "text-start"
                    }`}
                >
                  <div
                      className={`d-inline-block py-2 px-3 ${
                          message.senderId === currentUser?.id
                              ? "bg-primary-subtle message-right"
                              : "bg-gray-subtle  message-left"
                      } chat-popup-message font-size-12 fw-medium`}
                  >
                    {message.content}
                  </div>
                  <span className="mt-1 d-block time font-size-10 fst-italic">
                                {formatTime(message.createdAt)}
                            </span>
                </li>
            ))}
          </ul>
        </div>
        <div className="chat-popup-footer p-3">
          <div className="chat-popup-form">
            <form onSubmit={onSubmit}>
              <input
                  type="text"
                  className="form-control"
                  placeholder="Start Typing..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                  type="submit"
                  className="chat-popup-form-button btn btn-primary"
              >
                            <span className="material-symbols-outlined font-size-18 icon-rtl">
                                send
                            </span>
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default ChatPopupModal;