import React from "react";
import user1  from "../../../../assets/images/user/user-1.jpg";

const ChatPopupModal = () => (
  <div className="chat-popup-modal" id="chat-popup-modal">
    <div className="bg-primary p-3 d-flex align-items-center justify-content-between gap-3">
      <div className="d-flex align-items-center gap-3">
        <div className="image flex-shrink-0">
          <img
            src={user1}
            alt="img"
            className="img-fluid avatar-45 rounded-circle object-cover"
          />
        </div>
        <div className="content">
          <h6 className="mb-0 font-size-14 text-white">Bob Frapples</h6>
          <span className="d-inline-block lh-1 font-size-12 text-white">
            <span className="d-inline-block rounded-circle bg-success border-5 p-1 align-baseline me-1"></span>
            Available
          </span>
        </div>
      </div>
      <div className="chat-popup-modal-close lh-1" type="button">
        <span className="material-symbols-outlined font-size-18 text-white">
          close
        </span>
      </div>
    </div>
    <div className="chat-popup-body p-3 border-bottom">
      <ul className="list-inline p-0 mb-0 chat">
        <li>
          <div className="text-center">
            <span className="time font-size-12 text-primary">Today</span>
          </div>
        </li>
        <li className="mt-2">
          <div className="text-start">
            <div className="d-inline-block py-2 px-3 bg-gray-subtle chat-popup-message font-size-12 fw-medium">
              Hello, How Are you Doing Today?
            </div>
            <span className="mt-1 d-block time font-size-10 fst-italic">
              03:41 PM
            </span>
          </div>
        </li>
        <li className="mt-3">
          <div className="text-end">
            <div className="d-inline-block py-2 px-3 bg-primary-subtle chat-popup-message message-right font-size-12 fw-medium">
              Hello, I'm Doing Well.
            </div>
            <span className="mt-1 d-block time font-size-10 fst-italic">
              03:42 PM
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div className="chat-popup-footer p-3">
      <div className="chat-popup-form">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Start Typing..."
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

export default ChatPopupModal;