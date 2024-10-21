import React, { useState } from "react";
import ReplyComment from "./ReplyComment";
import CommentForm from "./CommentForm";

const Comment = ({ userImg, userName, commentText, timeAgo, replies }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <li className="comment-item mb-3">
      <div className="d-flex align-items-start">
        <img src={userImg} alt="User" className="img-fluid avatar avatar-md rounded-circle me-3" />
        <div className="comment-content">
          <h6 className="mb-1">{userName}</h6>
          <p className="mb-0">{commentText}</p>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="text-muted small">{timeAgo}</div>
            <button
              className="btn btn-link p-0 text-primary"
              onClick={() => setShowReplyForm(!showReplyForm)}
            >
              Reply
            </button>
          </div>

          {showReplyForm && <CommentForm userImg="user2.jpg" />}

          <ul className="list-inline m-0 p-0 mt-3 reply-list">
            {replies &&
              replies.map((reply, index) => (
                <ReplyComment
                  key={index}
                  userImg={reply.userImg}
                  userName={reply.userName}
                  replyText={reply.replyText}
                  timeAgo={reply.timeAgo}
                />
              ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Comment;
