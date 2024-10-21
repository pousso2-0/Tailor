import React from 'react';

const CommentInput = ({ userImg }) => {
    return (
        <div className="add-comment-form-block">
            <div className="d-flex align-items-center gap-3">
                <div className="flex-shrink-0">
                    <img src={userImg} alt="userimg" className="avatar-48 rounded-circle img-fluid" loading="lazy" />
                </div>
                <div className="add-comment-form">
                    <form>
                        <input type="text" className="form-control" placeholder="Write a Comment..." />
                        <button type="submit" className="btn btn-primary font-size-12 text-capitalize px-5">post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CommentInput;
