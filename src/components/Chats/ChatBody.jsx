import React from "react";
import { Dropdown } from "react-bootstrap";
import user1 from "../../assets/images/user/05.jpg"
import user3 from "../../assets/images/user/01.jpg"
import { Link } from "react-router-dom";
const ChatBody = () => {

  const ChatSimulation = () => {
    return (
      <>
       <div className="iq-message-body iq-other-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user3}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:52</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-start gap-md-2"
                      >
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Looks clean and fresh UI.</p>
                        </div>
                        <Link
                          href="#"
                          className="material-symbols-outlined font-size-20 text-dark reply"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Reply"
                        >reply</Link>
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                            as="span"
                            bsPrefix=" "
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="iq-message-body iq-current-user">
                    <div className="chat-profile text-center">
                      <img
                        src={user1}
                        alt="chat-user"
                        className="avatar-40 rounded-pill"
                        loading="lazy"
                      />
                      <small className="iq-chating p-0 mb-0 d-block">6:53</small>
                    </div>
                    <div className="iq-chat-text">
                      <div
                        className="d-flex align-items-center justify-content-end gap-1 gap-md-2"
                      >
                        <Dropdown
                          className="dropdown cursor-pointer more"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="More"
                        >
                          <Dropdown.Toggle
                            className="lh-1"
                            id="post-option"
                            data-bs-toggle="dropdown"
                            as="span"
                            bsPrefix=" "
                          >
                            <span className="material-symbols-outlined text-dark">
                              more_vert
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="post-option"

                          >
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            ><span
                              className="material-symbols-outlined align-middle font-size-20 me-1"
                            >content_copy</span
                              >Copy message text</Dropdown.Item>
                            <Dropdown.Item
                              className=""
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#post-modal"
                            >
                              <span
                                className="material-symbols-outlined align-middle font-size-20 me-1"
                              >edit</span
                              >Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="iq-chating-content d-flex align-items-center">
                          <p className="mr-2 mb-0">Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                  </div>
      </>
    )
  }
  return (
    <div className="card-body chat-body bg-body">
      <ChatSimulation />
    </div>
  );
};

export default ChatBody;