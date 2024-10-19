import React from "react";
import { Dropdown } from "react-bootstrap";

const FriendRequests = () => {
  return (
    <Dropdown className="nav-item" as="li">
      <Dropdown.Toggle as="a" className="dropdown-toggle d-flex align-items-center" id="group-drop">
        <span className="material-symbols-outlined">group</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="sub-drop sub-drop-large" aria-labelledby="group-drop" data-bs-popper="static">
        <div className="card shadow m-0">
    
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FriendRequests;