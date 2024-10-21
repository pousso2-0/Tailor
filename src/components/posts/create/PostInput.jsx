import React from "react";

const PostInput = ({ photo, handleShow }) => {
  return (
    <div className="d-flex align-items-center">
      <div className="user-img">
        <img loading="lazy" src={photo} alt="userimg" className="avatar-60 rounded-circle" />
      </div>
      <form className="post-text ms-3 w-100" onClick={handleShow}>
        <input type="text" className="form-control rounded" placeholder="Write something here..." style={{ border: "none" }} />
      </form>
    </div>
  );
};

export default PostInput;
