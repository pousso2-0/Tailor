import React from "react";

const ChatItem = ({ avatar, name, message, time }) => (
  <div
    className="d-flex align-items-center justify-content-between chat-tabs-content border-bottom"
    data-target="chat-popup-modal"
  >
    <div className="d-flex align-items-center gap-3">
      <div className="iq-profile-avatar status-online">
        <img
          className="rounded-circle avatar-50"
          src={avatar}
          alt="user-img"
          loading="lazy"
        />
      </div>
      <div>
        <h6 className="font-size-14 mb-0 fw-semibold">{name}</h6>
        <p className="mb-0 font-size-12 fw-medium">{message}</p>
      </div>
    </div>
    <span className="font-size-12 fw-medium">{time}</span>
  </div>
);

export default ChatItem;