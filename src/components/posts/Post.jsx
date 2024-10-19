import React, { useEffect, useState } from "react";
import { Link, Collapse } from "react-bootstrap"; // Assurez-vous d'importer les composants nécessaires
import { toast } from 'react-toastify';
import { commentService } from "../../services/CommentService.js";
import { reactionService } from "../../services/ReactionService.js";
import { loadAllPosts } from '../../data/posts.js';

const Post = ({ post }) => {
    const [openComments, setOpenComments] = useState({}); // Un objet pour stocker l'état de chaque post
    const [mainComment, setMainComment] = useState('');
    const [isSubmittingMain, setIsSubmittingMain] = useState(false);
    const [replyContents, setReplyContents] = useState({}); // Pour stocker les réponses à chaque commentaire
    const [replyingTo, setReplyingTo] = useState(null); // État pour suivre le commentaire en cours de réponse

    const toggleCommentSection = (postId) => {
        setOpenComments(prev => ({
            ...prev,
            [postId]: !prev[postId], // Inverse l'état d'ouverture du commentaire spécifique au post
        }));
    };

    const handleMainCommentSubmit = async (e, postId) => {
        e.preventDefault();
        setIsSubmittingMain(true);

        try {
            if (!postId) {
                console.error('Le post ID est manquant, impossible de soumettre le commentaire.');
                return;
            }

            const commentData = { content: mainComment };
            await commentService.createComment(postId, commentData);
            setMainComment('');

            // Recharger les publications après soumission
            const currentPostData = await loadAllPosts();
            if (currentPostData) {
                // Assurez-vous de mettre à jour l'état des posts ici
            }
        } catch (error) {
            console.error('Erreur lors de la soumission du commentaire principal :', error);
        } finally {
            setIsSubmittingMain(false);
        }
    };

    const handleReplySubmit = async (commentId) => {
        const replyContent = replyContents[commentId]?.trim() || ''; 
        if (!replyContent) {
            console.warn('Le contenu de la réponse est vide.');
            return; // Si le contenu est vide, on ne fait rien
        }

        try {
            await commentService.createReply(commentId, { content: replyContent });
            setReplyContents((prev) => ({ ...prev, [commentId]: '' }));
        } catch (error) {
            console.error('Erreur lors de la soumission de la réponse :', error);
        } finally {
            setReplyingTo(null); // Réinitialiser le commentaire en cours de réponse
        }
    };

    const handleReaction = async (currentPostId, reactionType) => {
        try {
            await reactionService.toggleReaction({
                postId: currentPostId,
                reactionType,
            });

            toast.success(`Réaction "${reactionType}" envoyée avec succès !`, {
                position: 'top-center',
                autoClose: 3000,
            });
        } catch (error) {
            toast.error('Erreur lors de la gestion de la réaction.', {
                position: 'top-right',
                autoClose: 3000,
            });
            console.error('Erreur lors de la gestion de la réaction :', error);
        }
    };

    return (
        <div className="user-post mt-4">
            <div className="post-meta">
                <Link to="#" className="rounded position-relative">
                    {post.media.length > 0 && (
                        <img
                            src={post.media[0].url}
                            alt="post-images"
                            className="img-fluid rounded w-100"
                            loading="lazy"
                        />
                    )}
                    {post.media.length > 1 && (
                        <span className="position-absolute top-0 end-0 bg-primary text-white rounded-full p-2" style={{ margin: '0.5rem', fontSize: '0.8rem' }}>
                            <i className="fas fa-plus" aria-hidden="true"></i> {post.media.length - 1}
                        </span>
                    )}
                </Link>
            </div>

            <div className="post-actions d-flex justify-content-between align-items-center mb-3">
                <div
                    className="total-comment-block"
                    type="button"
                    aria-controls={`commentcollapes-${post.id}`}
                    aria-expanded={openComments[post.id] || false}
                    onClick={() => toggleCommentSection(post.id)}
                >
                    <span className="material-symbols-outlined align-text-top font-size-20">comment</span>
                    <span className="fw-medium">{post.commentsCount} Comment</span>
                </div>

                <div className="share-block d-flex align-items-center feather-icon">
                    <Link to="#" onClick={() => setModalShow1(true)} aria-controls="share-btn" className="d-flex align-items-center">
                        <span className="material-symbols-outlined align-text-top font-size-20">share</span>
                        <span className="ms-1 fw-medium">{post.sharesCount} Share</span>
                    </Link>
                </div>
            </div>

            <Collapse in={openComments[post.id]}>
                <div id={`commentcollapes-${post.id}`} className="border-top mt-4 pt-4">
                    <form onSubmit={(e) => handleMainCommentSubmit(e, post.id)} className="w-100">
                        <input
                            type="text"
                            placeholder="Écrire un commentaire..."
                            className="form-control border-0 rounded bg-white shadow-sm w-100"
                            value={mainComment}
                            onChange={(e) => setMainComment(e.target.value)}
                            disabled={isSubmittingMain}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary font-size-12 text-capitalize mt-2 w-100"
                            disabled={!mainComment.trim() || isSubmittingMain}
                        >
                            {isSubmittingMain ? 'Envoi...' : 'Envoyer'}
                        </button>
                    </form>

                    <div className="comment-list mt-3" style={{ maxHeight: '300px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
                        <ul className="list-unstyled m-0 p-0">
                            {post.comments && post.comments.map((comment) => (
                                <li key={comment.id} className="mb-4">
                                    <div className="comment-block bg-white p-3 rounded shadow-sm">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <img
                                                    src={comment.user.profilePicture}
                                                    alt="userimg"
                                                    className="avatar-40 rounded-circle"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="d-flex justify-content-between align-items-center mb-1">
                                                    <h6 className="mb-0 fw-bold">{comment.user.name}</h6>
                                                    <small className="text-muted">
                                                        {new Date(comment.createdAt).toLocaleDateString('fr-FR', {
                                                            day: '2-digit',
                                                            month: 'long',
                                                            year: 'numeric',
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                        })}
                                                    </small>
                                                </div>
                                                <p className="mb-2">{comment.content}</p>
                                                <button
                                                    className="btn btn-link text-muted p-0"
                                                    onClick={() => setReplyingTo(comment.id)}
                                                >
                                                    Répondre
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Collapse>
        </div>
    );
};

export default Post;
