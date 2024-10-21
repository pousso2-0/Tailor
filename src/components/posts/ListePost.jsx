import React from 'react';
import { Carousel } from 'react-bootstrap'; // Assurez-vous que react-bootstrap est installé

function ListePost({ post, handleFollowToggle, loading ,children}) {
    return (
        <div className="w-100">
            <div className="d-flex align-items-center justify-content-between">
                <div className="user-post-data d-flex align-items-center">
                    <div className="me-3 flex-shrink-0">
                        <img
                            className="border border-2 rounded-circle user-post-profile"
                            src={post.user.profilePicture}
                            alt={`${post.user.name}'s profile`}
                            style={{ width: '50px', height: '50px' }}
                        />
                    </div>

                    <div className="w-100">

                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center">
                                <h6 className="mb-0 text-dark fw-bold me-2">{post.user.name}</h6>
                                <span className="text-primary">
                                    <svg
                                        className="align-text-bottom"
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
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
                                {new Date(post.createdAt).toLocaleDateString('fr-FR', {
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

                <div className="card-post-toolbar mt-2"> {children}</div>
            </div>

            <div className="mt-2">
                <p className="text-dark text-capitalize" style={{ lineHeight: '1.6' }}>
                    {post.content}
                </p>

            </div>

            {/* Media Carousel */}
            {post.media.length > 0 && (
                <div className="rounded position-relative">
                    <Carousel>
                        {post.media.map((mediaItem, index) => (
                            <Carousel.Item key={index}>
                                <div className="position-relative">
                                    <img
                                        src={mediaItem.url}
                                        alt={`post-media-${index}`}
                                        className="img-fluid rounded w-100"
                                        loading="lazy"
                                    />
                                    {post.media.length > 1 && index === 0 && (
                                        <div
                                            className="position-absolute top-0 end-0 bg-dark text-white px-2 py-1 rounded-circle"
                                            style={{
                                                fontSize: '14px',
                                                right: '10px',
                                                top: '10px',
                                                opacity: 0.7,
                                            }}
                                        >
                                            +{post.media.length - 1}
                                        </div>
                                    )}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            )}


            <div className="post-meta-likes mt-4">
                <div className="d-flex align-items-center gap-2 flex-wrap">
                    <ul className="list-inline m-0 p-0 post-user-liked-list">
                        {post.reactions.slice(0, 4).map((reaction, index) => (
                            <li key={index}>
                                <img
                                    src="https://i.pinimg.com/564x/55/de/1c/55de1cca8843d4e7f13d11b3abb70687.jpg"
                                    alt="userimg"
                                    className="rounded-circle img-fluid userimg"
                                    loading="lazy"
                                />
                            </li>
                        ))}
                    </ul>
                    <div className="d-inline-flex align-items-center gap-1">
                        <h6 className="m-0 font-size-14">{post.user.name}</h6>
                        <span className="text-capitalize font-size-14 fw-medium">
                            et {post.reactions.length} autres ont réagi
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ListePost;