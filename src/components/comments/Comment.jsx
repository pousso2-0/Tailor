import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Collapse } from "react-bootstrap";
import Validator from '../../utilities/Validator';
import { commentService } from "../../services/CommentService";


export default function Comment({ key, user, comment, isReply = false }) {

    const [openReply, setOpenReply] = useState(false);
    const [showReplies, setShowReplies] = useState(false);
    const [replies, setReplies] = useState([]);
    const [loadingReplies, setLoadingReplies] = useState(false);
    const [replyContent, setReplyContent] = useState('');
    const validation = new Validator();
    const timeAgo = formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true, locale: fr });

    useEffect(() => {
        if (showReplies && replies.length === 0 && !isReply) {
            setLoadingReplies(true);
            commentService.getReplies(comment.id)
                .then((res) => {
                    setReplies(res.data);
                })
                .catch((err) => {
                    console.error(err);
                })
                .finally(() => {
                    setLoadingReplies(false);
                });
        }
    }, [showReplies, comment.id, replies.length, isReply]);



    const handleSubmitReply = (e) => {
        e.preventDefault();
        validation.reset();
        validation.required(replyContent, "content", "Le contenu est requis");
        const errors = validation.getErrors();
        if (errors) {
            console.log(errors);
        } else {
            commentService.createReply(comment.id, { content: replyContent })
                .then((res) => {
                    setReplies([...replies, res.data]);
                    setReplyContent('');
                    setShowReplies(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleReplyChange = (e) => {
        setReplyContent(e.target.value);
    };

    const commentClass = isReply ? "ms-4" : "";

    if (!user) return;


    return (
        <li className={`mb-3 comment-item ${commentClass}`} key={key}>
            <div className="comment-list-block">
                <div className="d-flex">
                    <div className="comment-list-user-img flex-shrink-0 me-2">
                        <img
                            src={comment.user.profilePicture}
                            alt="userimg"
                            className="avatar-40 rounded-circle"
                            loading="lazy"
                        />
                    </div>
                    <div className="comment-content bg-light rounded-3 p-3 flex-grow-1">
                        <div className="d-flex align-items-center mb-1">
                            <h6 className="m-0 me-2">{comment.user.name}</h6>
                            <span className="text-muted small">{timeAgo}</span>
                        </div>
                        <p className="mb-1">{comment.content}</p>
                        <div className="comment-actions">
                            <button className="btn btn-link btn-sm p-0 me-2">J'aime</button>
                            {!isReply && (
                                <>
                                    <button
                                        className="btn btn-link btn-sm p-0 me-2"
                                        onClick={() => setOpenReply(!openReply)}
                                    >
                                        Répondre
                                    </button>
                                    <button
                                        className="btn btn-link btn-sm p-0"
                                        onClick={() => setShowReplies(!showReplies)}
                                    >
                                        {showReplies ? "Masquer les réponses" : "Afficher les réponses"}
                                    </button>
                                </>
                            )}
                        </div>

                        {!isReply && (
                            <Collapse in={openReply}>
                                <div className="mt-2">
                                    <form onSubmit={handleSubmitReply} className="d-flex align-items-center">
                                        <img
                                            src={user.profilePicture}
                                            alt="userimg"
                                            className="avatar-32 rounded-circle me-2"
                                            loading="lazy"
                                        />
                                        <input
                                            type="text"
                                            className="form-control form-control-sm rounded-pill"
                                            placeholder="Écrivez une réponse..."
                                            value={replyContent}
                                            onChange={handleReplyChange}
                                        />
                                        <button
                                            type="submit"
                                            className="btn btn-link btn-sm"
                                            disabled={!replyContent.trim()}
                                        >
                                            Publier
                                        </button>
                                    </form>
                                </div>
                            </Collapse>
                        )}

                        {!isReply && showReplies && (
                            <>
                                {loadingReplies ? (
                                    <p className="mt-2 mb-0">Chargement des réponses...</p>
                                ) : (
                                    <ul className="list-unstyled mt-2 mb-0">
                                        {replies.map((reply) => (
                                            <Comment key={reply.id} user={user} comment={reply} isReply={true} />
                                        ))}
                                    </ul>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
}