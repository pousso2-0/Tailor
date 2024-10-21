import React from 'react'; // Ajout de l'importation React
import { Link } from 'react-router-dom';

const PostActions = ({ commentsCount, sharesCount, toggleCommentSection, postId, setModalShow1 }) => {
    return (
        <div className="post-actions d-flex justify-content-between align-items-center mb-3">
            <div
                className="total-comment-block"
                type="button"
                aria-controls={`commentcollapes-${postId}`}
                onClick={() => toggleCommentSection(postId)}
            >
                <span className="material-symbols-outlined align-text-top font-size-20">
                    comment
                </span>{" "}
                <span className="fw-medium">{commentsCount} Comment</span>
            </div>
            <div className="share-block d-flex align-items-center feather-icon">
                <Link to="#" onClick={() => setModalShow1(true)} aria-controls="share-btn">
                    <span className="material-symbols-outlined align-text-top font-size-20">
                        share
                    </span>{" "}
                    <span className="ms-1 fw-medium">{sharesCount} Share</span>
                </Link>
            </div>
        </div>
    );
};

export default PostActions;