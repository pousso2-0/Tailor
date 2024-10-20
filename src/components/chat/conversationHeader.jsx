import React from "react";
import user1 from "../../assets/images/user/01.jpg";

const ConversationHeader = ({ receiver }) => {
  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
  };

  return (
      <div className="chat-head">
        <header className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3">
          <div className="d-flex align-items-center gap-3">
            <div className="d-block d-xl-none">
              <button
                  className="btn btn-sm btn-primary rounded btn-icon"
                  data-toggle="sidebar"
                  data-active="true"
                  onClick={minisidebar}
              >
              <span className="btn-inner">
                <svg
                    className="icon-rtl"
                    width="20px"
                    viewBox="0 0 24 24"
                >
                  <path
                      fill="currentColor"
                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                  ></path>
                </svg>
              </span>
              </button>
            </div>
            <div className="avatar chat-user-profile m-0">
              <img
                  src={receiver.profilePicture || user1}
                  alt="avatar"
                  className="avatar-50 rounded-pill"
                  loading="lazy"
              />
              <div className="iq-profile-badge bg-success"></div>
            </div>
            <div>
              <h5 className="mb-0">{receiver.name} {receiver.firstName}</h5>
              <small className="text-capitalize fw-500">Online</small>
            </div>
          </div>
        </header>
      </div>
  );
};

export default ConversationHeader;