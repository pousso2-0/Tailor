import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Message = ({ message }) => {
  return (
    <div className="iq-message-body">
      <div className="chat-profile text-center">
        <img src={message.user.img} alt="chat-user" className="avatar-40 rounded-pill" />
        <small className="iq-chating p-0 mb-0 d-block">{message.time}</small>
      </div>
      <div className="iq-chat-text">
        <div className="d-flex align-items-center justify-content-start gap-md-2">
          <div className="iq-chating-content d-flex align-items-center">
            <p className="mr-2 mb-0">{message.text}</p>
          </div>
          <Link href="#" className="material-symbols-outlined font-size-20 text-dark reply">reply</Link>
          <Dropdown as="span">
            <Dropdown.Toggle as="span" className="lh-1" />
            <Dropdown.Menu className="dropdown-menu-right">
              {/* Dropdown items */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Message;