import React from 'react';
import { Collapse } from 'react-bootstrap';

const CommentCollapse = ({ open, toggleOpen, comments }) => {
    return (
        <Collapse in={open}>
            <div id="commentcollapes" className="border-top mt-4 pt-4">
                <ul className="list-inline m-o p-0 comment-list">
                    {comments.map((comment, index) => (
                        <li key={index} className="mb-3">
                            <div className="comment-list-block">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="comment-list-user-img flex-shrink-0">
                                        <img src={comment.userImg} alt="userimg" className="avatar-48 rounded-circle img-fluid" loading="lazy" />
                                    </div>
                                    <div className="comment-list-user-data">
                                        <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                            <h6 className="m-0">{comment.userName}</h6>
                                            <span className="d-inline-block text-primary">{comment.verifiedIcon}</span>
                                            <span className="fw-medium small text-capitalize">{comment.timeAgo}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list-user-comment">
                                    <div className="comment-list-comment">{comment.text}</div>
                                    <div className="comment-list-action mt-2">
                                        <ul className="list-inline m-0 p-0 d-flex align-items-center gap-2">
                                            <li>
                                                <span className="material-symbols-outlined align-text-top font-size-18">thumb_up</span>
                                                <span className="fw-medium small">Likes</span>
                                            </li>
                                            <li>
                                                <span className="fw-medium small" data-bs-toggle="collapse" role="button" aria-expanded="false">
                                                    Reply
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Collapse>
    );
};

export default CommentCollapse;
