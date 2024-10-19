import React from "react";
import { Link } from "react-router-dom";

const ChatFooter = () => {
  return (
    <div className="card-footer px-3 py-3 border-top rounded-0">
      <form className="d-flex align-items-center" action="#">
        <div className="chat-attagement d-flex">
          {/* Icons for attachment */}
        </div>
        <input type="text" className="form-control me-3" placeholder="Type your message" />
        <button type="submit" className="btn btn-primary d-flex align-items-center">
          {/* Send icon */}
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;