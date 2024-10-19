import React from "react";

const ReplyComment = ({ userImg, userName, replyText, timeAgo }) => {
  return (
    <li className="reply-comment-item">
      <div className="d-flex align-items-center">
        <img src={userImg} alt="User" className="img-fluid avatar avatar-sm rounded-circle me-3" />
        <div className="reply-comment-content">
          <h6 className="mb-1">{userName}</h6>
          <p className="mb-0">{replyText}</p>
          <div className="text-muted small mt-1">{timeAgo}</div>
        </div>
      </div>
    </li>
  );
};

export default ReplyComment;
