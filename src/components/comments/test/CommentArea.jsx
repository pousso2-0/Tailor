import React, { useState } from 'react';
import LikeDropdown from './LikeDropdown';
import CommentCollapse from './CommentCollapse';
import ShareButton from './ShareButton';
import CommentInput from './CommentInput';

const CommentArea = ({ likes, comments, shares, userImg, icons }) => {
    const [open, setOpen] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="comment-area mt-4 pt-4 border-top">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
                <LikeDropdown likes={likes} icons={icons} />
                <div className="d-flex align-items-center gap-3 flex-shrink-0">
                    <div
                        className="total-comment-block"
                        type="button"
                        aria-controls="commentcollapes"
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                    >
                        <span className="material-symbols-outlined align-text-top font-size-20">comment</span>
                        <span className="fw-medium">{comments.length} Comment</span>
                    </div>
                    <ShareButton onShareClick={() => setModalShow(true)} shares={shares} />
                </div>
            </div>

            <CommentCollapse open={open} comments={comments} />
            <CommentInput userImg={userImg} />
        </div>
    );
};

export default CommentArea;
