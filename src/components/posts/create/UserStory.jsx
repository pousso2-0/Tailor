import React from "react";
import { Dropdown } from "react-bootstrap";
import user1 from "../assets/images/user/1.jpg";

const UserStory = () => {
  return (
    <div className="other-option">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div className="user-img me-3">
            <img loading="lazy" src={user1} alt="userimg" className="avatar-60 rounded-circle img-fluid" />
          </div>
          <h6>Your Story</h6>
        </div>
        <div className="card-post-toolbar">
          <Dropdown>
            <Dropdown.Toggle className="btn btn-primary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
              Friend
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu m-0 p-0">
              <Dropdown.Item className="dropdown-item p-3" href="#">
                <div className="d-flex align-items-top">
                  <span className="material-symbols-outlined">save</span>
                  <div className="data ms-2">
                    <h6>Public</h6>
                    <p className="mb-0">Anyone on or off Facebook</p>
                  </div>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default UserStory;
