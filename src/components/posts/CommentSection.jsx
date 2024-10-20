import React, { useState, useRef, useEffect } from 'react';
import { Collapse } from 'react-bootstrap';
import { commentService } from "../../services/CommentService.js";

const CommentSection = ({ post, isSubmittingMain, handleMainCommentSubmit, mainComment, handleMainCommentChange }) => {
  const [openComments, setOpenComments] = useState(false);
  const [replyContents, setReplyContents] = useState({});
  const [replyingTo, setReplyingTo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const commentSectionRef = useRef(null);

  const toggleCommentSection = () => {
    setOpenComments(prev => !prev);
  };

  const handleReplyChange = (commentId, value) => {
    setReplyContents(prev => ({ ...prev, [commentId]: value }));
  };

  const handleReplySubmit = async (commentId) => {
    setIsSubmitting(true);
    setError(null);
    const replyContent = replyContents[commentId]?.trim() || '';

    if (!replyContent) {
      setError("Le contenu de la réponse est vide.");
      setIsSubmitting(false);
      return;
    }

    try {
      await commentService.createReply(commentId, { content: replyContent });
      setReplyContents(prev => ({ ...prev, [commentId]: '' }));
    } catch (error) {
      setError("Erreur lors de la soumission de la réponse.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setReplyingTo(null);
    }
  };

  // Close the comment section when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (commentSectionRef.current && !commentSectionRef.current.contains(event.target)) {
        setOpenComments(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
      <div className="comment-area mt-4 pt-1 border-top" ref={commentSectionRef}>
        <div className="post-actions-and-comments w-100">
          <div className="post-actions d-flex justify-content-between align-items-center mb-3">
            <div className="total-comment-block" onClick={toggleCommentSection}>
              <span className="fw-medium">{post.commentsCount} Commentaires</span>
            </div>
          </div>

          <Collapse in={openComments}>
            <div className="border-top mt-4 pt-4 w-100">
              <form onSubmit={(e) => handleMainCommentSubmit(e, post.id)} className="w-100 ">
                <input
                    type="text"
                    placeholder="Écrire un commentaire..."
                    className="form-control border-0 rounded bg-white shadow-sm w-100"
                    value={mainComment}
                    onChange={(e) => handleMainCommentChange(e.target.value)}
                    disabled={isSubmittingMain}
                    aria-label="Nouveau commentaire"
                />
                <button
                    type="submit"
                    className="btn btn-primary font-size-12 text-capitalize mt-2 w-100"
                    disabled={!mainComment.trim() || isSubmittingMain}
                    aria-disabled={!mainComment.trim() || isSubmittingMain}
                >
                  {isSubmittingMain ? 'Envoi...' : 'Envoyer'}
                </button>
              </form>

              {error && <div className="alert alert-danger mt-2">{error}</div>}

              <div
                  style={{
                    maxHeight: '300px',
                    overflowY: 'auto',
                    backgroundColor: '#f8f9fa',
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '20px',
                  }}
                  className="comment-list mt-3 w-100"
              >
                <ul className="list-unstyled m-0 p-0">
                  {post.comments.map((comment) => (
                      <li key={comment.id} className="mb-4">
                        <div className="comment-block bg-white p-3 rounded shadow-sm">
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <div className="d-flex align-items-center">
                                  <img
                                      src={comment.user.profilePicture || "https://i.pinimg.com/236x/f6/9c/9f/f69c9f30726887a24049f7abefb8c385.jpg"}
                                      alt="userimg"
                                      className="avatar-40 rounded-circle me-2"
                                      loading="lazy"
                                  />
                                  <h6 className="mb-0 fw-bold">{comment.user.name}</h6>
                                </div>
                                <small className="text-muted">
                                  {new Date(comment.createdAt).toLocaleString('fr-FR')}
                                </small>
                              </div>
                              <p className="mb-2">{comment.content}</p>
                              <button
                                  className="btn btn-link text-muted p-0"
                                  onClick={() => setReplyingTo(comment.id)}
                                  aria-label="Répondre à ce commentaire"
                              >
                                Répondre
                              </button>

                              {replyingTo === comment.id && (
                                  <div className="mt-3">
                                    <form
                                        onSubmit={(e) => {
                                          e.preventDefault();
                                          handleReplySubmit(comment.id);
                                        }}
                                    >
                                      <div className="d-flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Écrire une réponse..."
                                            className="form-control flex-grow-1"
                                            value={replyContents[comment.id] || ''}
                                            onChange={(e) => handleReplyChange(comment.id, e.target.value)}
                                            disabled={isSubmitting}
                                            aria-label="Réponse"
                                        />
                                        <button
                                            type="submit"
                                            className={`btn btn-primary d-flex align-items-center ${isSubmitting ? 'disabled' : ''}`}
                                            disabled={isSubmitting}
                                        >
                                          {isSubmitting ? (
                                              <>
                                        <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                                Envoi...
                                              </>
                                          ) : (
                                              'Envoyer'
                                          )}
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                              )}

                              {post.comments
                                  .filter((reply) => reply.parentId === comment.id)
                                  .map((reply) => (
                                      <div key={reply.id} className="mt-3 ms-5 bg-light p-2 rounded shadow-sm">
                                        <div className="d-flex">
                                          <div className="flex-grow-1">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                              <div className="d-flex align-items-center">
                                                <img
                                                    src={reply.user.profilePicture}
                                                    alt="userimg"
                                                    className="avatar-30 rounded-circle me-2"
                                                    loading="lazy"
                                                />
                                                <h6 className="mb-0 fw-bold">{reply.user.name}</h6>
                                              </div>
                                              <small className="text-muted">
                                                {new Date(reply.createdAt).toLocaleString('fr-FR')}
                                              </small>
                                            </div>
                                            <p className="mb-2">{reply.content}</p>
                                          </div>
                                        </div>
                                      </div>
                                  ))}
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
      </div>
  );
};

export default CommentSection;
