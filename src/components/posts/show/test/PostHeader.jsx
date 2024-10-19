
const PostHeader = ({ userImage, userName, timestamp }) => (
    <div className="user-post-data">
        <div className="d-flex align-items-center justify-content-between">
            <div className="me-3 flex-shrink-0">
                <UserAvatar src={userImage} className="border border-2 rounded-circle user-post-profile" />
            </div>
            <div className="w-100">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h6 className="mb-0 d-inline-block">{userName}</h6>
                        <VerifiedBadge />
                        <span className="mb-0 d-inline-block text-capitalize fw-medium">
                            posted an update
                        </span>
                        <p className="mb-0">{timestamp}</p>
                    </div>
                    <PostOptions />
                </div>
            </div>
        </div>
    </div>
);

export default PostHeader;