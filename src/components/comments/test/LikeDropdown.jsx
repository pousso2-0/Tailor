import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const LikeDropdown = ({ likes, icons }) => {
    return (
        <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
            <div className="like-data">
                <div className="dropdown">
                    <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                        <span className="material-symbols-outlined align-text-top font-size-20">thumb_up</span>
                        <span className="fw-medium">{likes} Likes</span>
                    </span>
                    <div className="dropdown-menu py-2 shadow">
                        {icons.map((icon, index) => (
                            <OverlayTrigger key={index} placement="top" overlay={<Tooltip>{icon.tooltip}</Tooltip>}>
                                <img src={icon.src} className="img-fluid me-2" alt={icon.alt} />
                            </OverlayTrigger>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LikeDropdown;
