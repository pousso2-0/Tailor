const PostMetrics = ({ likes, comments, shares, onCommentClick, onShareClick }) => (
    <div className="d-flex justify-content-between align-items-center flex-wrap">
        <LikeButton count={likes} />
        <div className="d-flex align-items-center gap-3 flex-shrink-0">
            <CommentButton count={comments} onClick={onCommentClick} />
            <ShareButton count={shares} onClick={onShareClick} />
        </div>
    </div>
);

export default PostMetrics;