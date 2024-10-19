import React from 'react';

const PostHeader = ({ user, createdAt }) => {
    return (
        <div className="d-flex justify-content-start align-items-center">
            <div className="me-3 flex-shrink-0">
                <img
                    className="border border-2 rounded-circle user-post-profile"
                    src={user.profilePicture}
                    alt=""
                    style={{ width: '50px', height: '50px' }}
                />
            </div>
            <div className="w-100">
                <div className="d-flex flex-column">
                    <div className="d-flex align-items-center">
                        <h6 className="mb-0 text-dark fw-bold me-2">{user.name}</h6>
                        <span className="text-primary">
                            <svg className="align-text-bottom" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.8457 0H4.34822C1.73547 0 0.0974121 1.84995 0.0974121 4.46789V11.5321C0.0974121 14.1501 1.72768 16 4.34822 16H11.8449C14.4663 16 16.0974 14.1501 16.0974 11.5321V4.46789C16.0974 1.84995 14.4663 0 11.8457 0Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M5.09741 7.99978L7.09797 9.9995L11.0974 6.00006"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="text-muted small">
                        {new Date(createdAt).toLocaleDateString('fr-FR', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default PostHeader;