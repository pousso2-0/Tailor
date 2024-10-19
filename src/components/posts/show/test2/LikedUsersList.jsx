export default LikedUsersList = ({ likedUsers }) => (
    <div className="d-flex align-items-center gap-2 flex-wrap">
        <ul className="list-inline m-0 p-0 post-user-liked-list">
            {likedUsers.map((user, index) => (
                <li key={index}>
                    <img
                        src={user.image}
                        alt={user.name}
                        className="rounded-circle img-fluid userimg"
                        loading="lazy"
                    />
                </li>
            ))}
        </ul>
        <div className="d-inline-flex align-items-center gap-1">
            <h6 className="m-0 font-size-14">{likedUsers[0]?.name}</h6>
            <span
                className="text-capitalize font-size-14 fw-medium"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#likemodal"
            >
                and {likedUsers.length - 1} others liked this
            </span>
        </div>
    </div>
);
