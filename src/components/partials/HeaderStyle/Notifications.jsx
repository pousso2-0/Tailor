import React from "react";
import { Dropdown, Card } from "react-bootstrap";

const Notifications = () => {
  return (
    <Dropdown as="li" className="nav-item">
      <Dropdown.Toggle as="a" className="search-toggle d-flex align-items-center" id="notification-drop">
        <span className="material-symbols-outlined position-relative">
          notifications
          <span className="bg-primary text-white notification-badge"></span>
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="sub-drop header-notification" aria-labelledby="notification-drop" data-bs-popper="static">
        <Card className="m-0 shadow">
        </Card>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Notifications;