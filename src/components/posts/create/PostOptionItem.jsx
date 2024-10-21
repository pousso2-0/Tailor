import React from "react";

const PostOptionItem = ({ icon, text }) => {
  return (
    <li className="bg-primary-subtle rounded p-2 pointer d-flex align-items-center">
      <img loading="lazy" src={icon} alt="icon" className="img-fluid me-2" /> {text}
    </li>
  );
};

export default PostOptionItem;
