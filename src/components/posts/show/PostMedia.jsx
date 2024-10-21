import React from 'react';
import { Link } from 'react-router-dom';

const PostMedia = ({ media, imageOnSlide, postId }) => {
    return (
        <Link onClick={() => imageOnSlide(postId)} to="#" className="rounded position-relative">
            {media.length > 0 && (
                <img
                    src={media[0].url}
                    alt="post-images"
                    className="img-fluid rounded w-100"
                    loading="lazy"
                />
            )}
            {media.length > 1 && (
                <span className="position-absolute top-0 end-0 bg-primary text-white rounded-full p-2" style={{ margin: '0.5rem', fontSize: '0.8rem' }}>
                    <i className="fas fa-plus" aria-hidden="true"></i> {media.length - 1}
                </span>
            )}
        </Link>
    );
};

export default PostMedia;
