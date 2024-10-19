import React from 'react';
import { Link } from 'react-router-dom';

const PostContent = ({ postText, hashtags }) => {
    return (
        <div className="mt-4">
            <p className="m-0">{postText}</p>
            <ul className="list-inline m-0 p-0 d-flex flex-wrap gap-1">
                {hashtags.map((hashtag, index) => (
                    <li key={index}>
                        <Link to="#">{hashtag}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostContent;
