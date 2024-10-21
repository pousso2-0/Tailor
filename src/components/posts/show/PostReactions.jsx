import React from 'react';



const PostReactions = ({ reactions, user }) => {

    return (
        <div className="post-meta-likes mt-4">
            <div className="d-flex align-items-center gap-2 flex-wrap">
                <ul className="list-inline m-0 p-0 post-user-liked-list">
                    {reactions.slice(0, 4).map((reaction, index) => (
                        <li key={index}>
                            <img
                                src={reaction.user.profilePicture}
                                alt="userimg"
                                className="rounded-circle img-fluid userimg"
                                loading="lazy"
                            />
                        </li>
                    ))}
                </ul>
                <div className="d-inline-flex align-items-center gap-1">
                    <h6 className="m-0 font-size-14">{user.name}</h6>
                    <span className="text-capitalize font-size-14 fw-medium">
                        et {reactions.length} autres ont réagi
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PostReactions;