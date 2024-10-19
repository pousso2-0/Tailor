const Comment = ({ comment, onReply, currentUserImage }) => {
    const [showReplyForm, setShowReplyForm] = useState(false);

    return (
        <li className="mb-3">
            <div className="comment-list-block">
                <div className="d-flex align-items-center gap-3">
                    <div className="comment-list-user-img flex-shrink-0">
                        <img
                            src={comment.userImage}
                            alt="user"
                            className="avatar-48 rounded-circle img-fluid"
                        />
                    </div>
                    <div className="comment-list-user-data">
                        <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                            <h6 className="m-0">{comment.userName}</h6>
                            {comment.isVerified && <VerifiedBadge />}
                            <span className="fw-medium small text-capitalize">
                                {comment.timestamp}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="comment-list-user-comment">
                    <div className="comment-list-comment">{comment.text}</div>
                    <CommentActions
                        onReply={() => setShowReplyForm(!showReplyForm)}
                        showReplyForm={showReplyForm}
                        currentUserImage={currentUserImage}
                        onSubmitReply={onReply}
                    />
                </div>
            </div>
        </li>
    );
};

export default Comment;