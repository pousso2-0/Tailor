import React, { useState } from "react";
import PostHeader from "./PostHeader";
import PostInput from "./PostInput";
import PostOptions from "./PostOptions";
import ModalPost from "./ModalPost";

const CreatePostNew = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div id="post-modal-data" className={`card ${props.class}`}>
        <PostHeader />
        <div className="card-body">
          <PostInput handleShow={handleShow} />
          <hr />
          <PostOptions handleShow={handleShow} />
        </div>
      </div>
      <ModalPost show={show} handleClose={handleClose} photo={props.user.profilePicture}/>
      <div className={`modal-backdrop fade ${show ? "show" : "d-none"}`} onClick={handleClose}></div>
    </>
  );
};

export default CreatePostNew;
