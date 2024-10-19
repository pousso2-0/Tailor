import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const ChatHeader = ({ user }) => {
  return (
    <div className="chat-head">
      <header className="d-flex justify-content-between align-items-center pt-3">
        <div className="d-flex align-items-center gap-3">
          <div className="avatar chat-user-profile m-0">
            <img src={user.img} alt="avatar" className="avatar-50 rounded-pill" />
          </div>
          <div>
            <h5 className="mb-0">{user.name}</h5>
            <small className="text-capitalize fw-500">Online</small>
          </div>
        </div>
        <div className="chat-header-icons d-inline-flex ms-auto">
          {/* Icons for phone, video, delete */}
          <Dropdown as="span">
            <Dropdown.Toggle as="svg" className="icon-20 nav-hide-arrow cursor-pointer pe-0" />
            <Dropdown.Menu className="dropdown-menu-right">
              {/* Dropdown items */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
    </div>
  );
};

export default ChatHeader;