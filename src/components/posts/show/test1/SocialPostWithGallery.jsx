const SocialPostWithGallery = ({
    userData,
    postContent,
    images,
    likedBy,
    metrics,
    comments,
    onImageClick,
    onCommentSubmit,
    onShare,
    currentUserImage
}) => {
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);

    return (
        <Col sm={12} className="special-post">
            <div className="card card-block card-stretch card-height">
                <div className="card-body">
                    <PostHeader userData={userData} />
                    <PostContent content={postContent} />
                    <ImageGallery images={images} onImageClick={onImageClick} />
                    <PostLikes likedBy={likedBy} />
                    <PostActions
                        metrics={metrics}
                        isCommentsOpen={isCommentsOpen}
                        setIsCommentsOpen={setIsCommentsOpen}
                        onShare={onShare}
                    />
                    <CommentSection
                        isOpen={isCommentsOpen}
                        comments={comments}
                        currentUserImage={currentUserImage}
                        onCommentSubmit={onCommentSubmit}
                    />
                </div>
            </div>
        </Col>
    );
};

export default SocialPostWithGallery;