import React from 'react';
import { Link } from 'react-router-dom';

const ShareButton = ({ onShareClick, shares }) => {
    return (
        <div className="share-block d-flex align-items-center feather-icon">
            <Link to="#" data-bs-toggle="modal" data-bs-target="#share-btn" onClick={onShareClick} aria-controls="share-btn" className="d-flex align-items-center">
                <span className="material-symbols-outlined align-text-top font-size-20">share</span>
                <span className="ms-1 fw-medium">{shares} Share</span>
            </Link>
        </div>
    );
};

export default ShareButton;
