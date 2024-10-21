import React, { useState } from "react"; 
import { Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap"; 
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns"; 
import { fr } from "date-fns/locale";
import CommentList from "../../comments/CommentList";
import Media from "../../medias/Media";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ShareOffcanvasNew from "../../ShareOffcanvasNew";



export default function Post({ post }) {
    const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true, locale: fr });
    const [open, setOpen] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    return (
        <Col sm={12} className="special-post">
            <Card className="card-block card-stretch card-height">
                <Card.Body>
                    <div className="user-post-data">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="me-3 flex-shrink-0">
                                <img
                                    className="border border-2 rounded-circle user-post-profile"
                                    src={post.user.profilePicture}
                                    alt=""
                                />
                            </div>
                            <div className="w-100">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h6 className="mb-0 d-inline-block">{post.user.name}</h6>{" "}
                                        <span className="d-inline-block text-primary">
                                            <svg className="align-text-bottom" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M11.8457 0H4.34822C1.73547 0 0.0974121 1.84995 0.0974121 4.46789V11.5321C0.0974121 14.1501 1.72768 16 4.34822 16H11.8449C14.4663 16 16.0974 14.1501 16.0974 11.5321V4.46789C16.0974 1.84995 14.4663 0 11.8457 0Z"
                                                    fill="currentColor"
                                                />
                                                <path  d="M5.09741 7.99978L7.09797 9.9995L11.0974 6.00006" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </span>{" "}
                                        <span className="mb-0 d-inline-block text-capitalize fw-medium">posted an update</span>
                                        <p className="mb-0">{timeAgo}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="m-0">{post.content}</p>
                    </div>
                    
                    <Media medias={post?.media} />

                    <div className="comment-area mt-4 pt-4 border-top">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div className="like-block position-relative d-flex align-items-center flex-shrink-0">
                                <div className="like-data">
                                    <div className="dropdown">
                                        <span
                                            className="dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            role="button"
                                        >
                                            <span className="material-symbols-outlined align-text-top font-size-20">thumb_up</span>{" "}
                                            <span className="fw-medium">{post.reactionCount} Likes</span>
                                        </span>
                                        <div className="dropdown-menu py-2 shadow">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2">
                                                <ThumbUpIcon className="me-2" style={{ color: 'blue' }} />
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2">
                                                <FavoriteIcon className="me-2" style={{ color: 'red' }} />
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2">
                                                <SentimentSatisfiedIcon className="me-2" style={{ color: 'yellow' }} />
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2">
                                                <SentimentVerySatisfiedIcon className="me-2" style={{ color: 'orange' }} />
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2">
                                                <SentimentDissatisfiedIcon className="me-2" style={{ color: 'purple' }} />
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Sad</Tooltip>} className="me-2">
                                                <SentimentVeryDissatisfiedIcon className="me-2" style={{ color: 'gray' }} />
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 flex-shrink-0">
                                <div className="total-comment-block" type="button" aria-controls="commentcollapes"  aria-expanded={open} onClick={() => setOpen(!open)}>
                                    <span className="material-symbols-outlined align-text-top font-size-20">comment</span>{" "}
                                    <span className="fw-medium">{post.commentsCount} Comment</span>
                                </div>

                                <div className="share-block d-flex align-items-center feather-icon">
                                    <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#share-btn"
                                        onClick={() => setModalShow(true)}
                                        aria-controls="share-btn"
                                        className="d-flex align-items-center"
                                    >
                                        <span className="material-symbols-outlined align-text-top font-size-20">share</span>
                                        <span className="ms-1 fw-medium">{post.sharesCount} Share</span>
                                    </Link>
                                </div>
                                <ShareOffcanvasNew show={modalShow} onHide={() => setModalShow(false)} />
                            </div>
                        </div>

                        <CommentList user={post?.user} comments={post?.comments} openList={[open, setOpen]} postId={post.id} />
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}