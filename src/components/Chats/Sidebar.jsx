import React from "react";
import { Form, Nav } from "react-bootstrap";
import user1 from "../../assets/images/user/01.jpg";

const Sidebar = ({ conversations, active, setActive, loadMessages, currentUserId }) => {
  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
  };

  return (
    <aside className="sidebar sidebar-chat sidebar-base border-end shadow-none" data-sidebar="responsive">
      <div className="chat-search pt-4 px-4">
        <div className="d-flex align-items-center">
          <h5 className="fw-500">Chats</h5>
        </div>
        <div
          className="sidebar-toggle d-block d-xl-none"
          data-toggle="sidebar"
          data-active="true"
          onClick={minisidebar}
        >
          <i className="icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25 12.2744L19.25 12.2744"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </i>
        </div>
        <div className="chat-searchbar mt-3 pt-1 mb-4">
          <Form.Group className="form-group chat-search-data m-0">
            <input
              type="text"
              className="form-control round"
              id="chat-search"
              placeholder="Search for messages or users..."
            />
            <i className="material-symbols-outlined">search</i>
          </Form.Group>
        </div>
      </div>
      <div className="sidebar-body pt-0 data-scrollbar mb-5 pb-5 px-4" tabIndex="-1"
           style={{ overflow: "hidden", outline: "none" }}>
        <div className="scroll-content" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
          <ul className="nav navbar-nav iq-main-menu mb-5 pb-5" id="sidebar-menu" role="tablist">
            <h6 className="mb-3 pb-1">Recent Chats</h6>
            {conversations.map((conversation) => {
              const receiver = conversation.receiver.id === currentUserId ? conversation.sender : conversation.receiver;

              return (
                <Nav.Item
                  key={conversation.id}
                  as="li"
                  className="iq-chat-list mb-3 ps-0"
                  role="presentation"
                >
                  <Nav.Link
                    className={`d-flex gap-3 rounded-2 zoom-in ${
                      active === conversation.id ? "active" : ""
                    }`}
                    eventKey={conversation.id}
                    onClick={() => {
                      setActive(conversation.id);
                      loadMessages(conversation.id);
                    }}
                  >
                    <div className="position-relative">
                      <img
                        src={receiver.profilePicture || user1}
                        alt="status-101"
                        className="avatar-48 object-cover rounded-circle"
                        loading="lazy"
                      />
                      <div className="iq-profile-badge bg-success"></div>
                    </div>
                    <div className="d-flex align-items-top w-100 iq-userlist-data">
                      <div className="d-flex flex-grow-1 flex-column">
                        <div className="d-flex align-items-center gap-1">
                          <h6 className="mb-0 iq-userlist-name font-size-14 fw-semibold mb-0 text-ellipsis short-1 flex-grow-1">
                            {receiver.name} {receiver.firstName}
                          </h6>
                          <span className="mb-0 font-size-12">
                            {conversation.lastMessageTime}
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-ellipsis short-1 flex-grow-1 font-size-14 mb-0">
                            {conversation.lastMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;