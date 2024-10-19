const SocialPost = ({
    userData,
    postContent,
    metrics,
    comments,
    onCommentSubmit
}) => {
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);

    return (
        <Card className="card-block card-stretch card-height">
            <Card.Body>
                <PostHeader
                    userImage={userData.image}
                    userName={userData.name}
                    timestamp={userData.timestamp}
                />
                <PostContent
                    text={postContent.text}
                    tags={postContent.tags}
                    image={postContent.image}
                    onImageClick={postContent.onImageClick}
                />
                <PostMetrics
                    likes={metrics.likes}
                    comments={metrics.comments}
                    shares={metrics.shares}
                    onCommentClick={() => setIsCommentsOpen(!isCommentsOpen)}
                    onShareClick={metrics.onShareClick}
                />
                <Collapse in={isCommentsOpen}>
                    <div className="border-top mt-4 pt-4">
                        <CommentsList comments={comments} />
                        <CommentForm onSubmit={onCommentSubmit} userImage={userData.image} />
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    );
};

export default SocialPost;