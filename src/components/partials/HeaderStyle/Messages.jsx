import React from "react";
import { Dropdown, Card } from "react-bootstrap";

const Messages = () => {
  return (
    <Dropdown as="li" className="nav-item">
      <Dropdown.Toggle as="a" className="d-flex align-items-center" id="mail-drop">
        <i className="material-symbols-outlined">mail</i>
        <span className="mobile-text d-none ms-3">Message</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="sub-drop header-notification" data-bs-popper="static">
        <Card className="shadow m-0">

        </Card>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Messages;