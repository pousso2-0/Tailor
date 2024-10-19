import React from "react";
import PostOptionItem from "./PostOptionItem";
import { Dropdown } from "react-bootstrap";
import small07 from "../../../assets/images/small/07.png";
import small08 from "../../../assets/images/small/08.png";
import small09 from "../../../assets/images/small/09.png";

const PostOptions = ({ handleShow }) => {
  const options = [
    { icon: small07, text: "Photo/Video" },
    { icon: small08, text: "Tag Friend" },
    { icon: small09, text: "Feeling/Activity" },
  ];

  return (
    <ul className="post-opt-block d-flex list-inline m-0 p-0 flex-wrap gap-3">
      {options.map((option, index) => (
        <PostOptionItem key={index} icon={option.icon} text={option.text} />
      ))}
      <li className="bg-primary-subtle rounded p-2 pointer text-center">
        <div className="card-header-toolbar d-flex align-items-center">
          <Dropdown>
            <Dropdown.Toggle as="div" id="post-option" className="lh-1">
              <span className="material-symbols-outlined">more_horiz</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right" aria-labelledby="post-option">
              <Dropdown.Item onClick={handleShow} href="#">Check in</Dropdown.Item>
              <Dropdown.Item onClick={handleShow} href="#">Live Video</Dropdown.Item>
              <Dropdown.Item onClick={handleShow} href="#">Gif</Dropdown.Item>
              <Dropdown.Item onClick={handleShow} href="#">Watch Party</Dropdown.Item>
              <Dropdown.Item onClick={handleShow} href="#">Play with Friend</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </li>
    </ul>
  );
};

export default PostOptions;
