export default UserPost = ({ user, post, likedUsers }) => (
    <div className="user-post-data">
        <div className="d-flex align-items-center justify-content-between">
            <UserAvatar src={user.avatar} alt={user.name} />
            <div className="w-100">
                <UserPostHeader
                    name={user.name}
                    timePosted={post.timePosted}
                    postText={post.text}
                />
            </div>
        </div>
        <div className="user-post mt-4">
            <PostImage src={post.image} alt={post.imageAlt} />
        </div>
        <div className="post-meta-likes mt-4">
            <LikedUsersList likedUsers={likedUsers} />
        </div>
    </div>
);
