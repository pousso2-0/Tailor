import React from "react";
import { Form, Nav, Dropdown } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import user1 from "../../assets/images/user/01.jpg"
import PersonOnline from "./PersonOnline";

const ChatSidebar = ({ person_online, active, setActive, minisidebar }) => {
  return (
    <aside className="sidebar sidebar-chat sidebar-base border-end shadow-none" data-sidebar="responsive">
      <div className="chat-search pt-4 px-4">
        <h5 className="fw-500">Chats</h5>
        <div className="sidebar-toggle d-block d-xl-none" onClick={minisidebar}>
          <i className="icon"> {/* SVG icon */} </i>
        </div>
        <div className="chat-searchbar mt-3 pt-1 mb-4">
          <Form.Group className="form-group chat-search-data m-0">
            <input type="text" className="form-control round" placeholder="Search for messages or users..." />
          </Form.Group>
        </div>
        <Swiper slidesPerView={7.1} pagination={{ clickable: true }} className="swiper-general messenger-swiper overflow-hidden mb-4">
          {person_online.map((ele, index) => (
            <SwiperSlide key={index}>
              <PersonOnline img={ele.img} name={ele.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="sidebar-body pt-0 data-scrollbar mb-5 pb-5 px-4">
        <ul className="nav navbar-nav iq-main-menu mb-5 pb-5" id="sidebar-menu" role="tablist">
          <h6 className="mb-3 pb-1">Recent Chats</h6>
          <Nav.Item as="li"
                  className="iq-chat-list mb-3 ps-0"
                  role="presentation">
                  <Nav.Link
                    className={`d-flex gap-3 rounded-2 zoom-in ${active === "first" ? 'active' : ''}`}
                    eventKey="first"
                    onClick={() => setActive("first")}
                  >
                    <div className="position-relative">
                      <img
                        src={user1}
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
                            Paul Molive
                          </h6>
                          <span className="mb-0 font-size-12">
                            03:20 PM
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <p className="text-ellipsis short-1 flex-grow-1 font-size-14 mb-0">
                            Lorem ipsum
                          </p>
                          <Dropdown className="btn-group dropdown-user">
                            <Dropdown.Toggle
                              as="span"
                              className="bg-transparent dropdown-toggle border-0 text-white"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            ></Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-end p-0">
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    share
                                  </span>
                                  Share Contact
                                </Dropdown.Item>
                              </li>
                              <li>
                                <Dropdown.Item
                                  className=" font-size-14 text-dark px-2"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined mx-1 font-size-20 align-middle text-body">
                                    content_copy
                                  </span>
                                  Copy Contact
                                </Dropdown.Item>
                              </li>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
        </ul>
      </div>
    </aside>
  );
};

export default ChatSidebar;