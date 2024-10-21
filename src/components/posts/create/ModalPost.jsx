import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostInput from "./PostInput";

const ModalPost = ({ photo, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} id="custom-post-modal" size="lg" fullscreen="sm-down">
      <div className="modal-header d-flex justify-content-between">
        <h5 className="modal-title" id="post-modalLabel">Create Post</h5>
        <Link to="#" className="lh-1" onClick={handleClose}>
          <span className="material-symbols-outlined">close</span>
        </Link>
      </div>
      <Modal.Body>
        <PostInput photo={photo}/>
        <hr />
        {/* <UserStory />
        <hr /> */}
        <Button variant="primary" className="d-block w-100 mt-3">Post</Button>
      </Modal.Body>
    </Modal>
  );
};

export default ModalPost;
