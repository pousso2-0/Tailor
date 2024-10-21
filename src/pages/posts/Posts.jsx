import React, { useEffect, useState } from "react";

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { reactionService } from '../../services/ReactionService';
import { postService } from '../../services/postService';
import { commentService } from "../../services/CommentService.js";
import Post from "../../components/posts/show/Post.jsx";
import { toast, ToastContainer } from "react-toastify";
import { Col, Container, Row } from "react-bootstrap";





export default function Index() {
    const [modalShow1, setModalShow1] = useState(false);
    const [loadContent, setLoadContent] = useState(true);
    const [allPosts, setAllPosts] = useState([]);
    const [mainComment, setMainComment] = useState('');
    const [replyContents, setReplyContents] = useState({});
    const [isSubmittingMain, setIsSubmittingMain] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [openComments, setOpenComments] = useState({})
    const [replyingTo, setReplyingTo] = useState(null);


    const loadAllPosts = async function () {
        try {
            return (await postService.getAllPosts()).data;
        } catch (error) {
            return null;
        }
    }

    const toggleCommentSection = (postId) => {
        setOpenComments(prev => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    const [imageController, setImageController] = useState({
        toggler: false,
        slide: 1,
    });

    function imageOnSlide(number) {
        setImageController({
            toggler: !imageController.toggler,
            slide: number,
        });
    }

    useEffect(() => {
        function handleScroll() {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

                setTimeout(() => {
                    setLoadContent(false);
                }, 2000);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const currentPostData = await loadAllPosts();
            if (currentPostData) {
                setAllPosts([currentPostData]);
            } else {
                console.log('Impossible de récupérer les données utilisateur.');
            }
        };
        fetchData();
    }, []);

    const DataPost = (Array.isArray(allPosts) ? allPosts : []).reduce((acc, user) => {
        acc.push({
            allPostData: user.data || {} // Ensure allPostData is an object
        });
        return acc;
    }, []);

    const Datas = (Array.isArray(DataPost) ? DataPost : []).reduce((acc, user) => {
        acc.push({ ...user });
        return acc;
    }, []);

    const formatage = (Array.isArray(Datas) ? Datas : []).reduce((acc, data) => {
        return {
            ...data.allPostData,
            comments: data.allPostData.comments || [],
            media: data.allPostData.media || []
        };
    }, {});

    const listes = (Array.isArray(formatage) ? formatage : []).reduce((acc, post) => {
        return [...acc, ...post.comments, ...post.media];
    }, []);

    const retrievedData = localStorage.getItem('userData');

    const DataFromStorage = retrievedData ? JSON.parse(retrievedData) : [];

    const Profile = (Array.isArray(DataFromStorage) ? DataFromStorage : []).reduce((acc, data) => {
        return {
            ...data.ProfileData
        };
    }, {});

    const handleMainCommentSubmit = async (e, postId) => {
        e.preventDefault();
        setIsSubmittingMain(true);
        try {
            if (!postId) {
                console.error('Le post ID est manquant, impossible de soumettre le commentaire.');
                setIsSubmittingMain(false);
                return;
            }

            const commentData = { content: mainComment };
            await commentService.createComment(postId, commentData);
            setMainComment('');
            const currentPostData = await loadAllPosts();
            if (currentPostData) {
                setAllPosts([currentPostData]);
            }
        } catch (error) {
            console.error('Erreur lors de la soumission du commentaire principal :', error);
        } finally {
            setIsSubmittingMain(false);
        }
    };

    const handleReplySubmit = async (commentId) => {
        setIsSubmitting(true);
        const replyContent = replyContents[commentId]?.trim() || ''; // Récupérer le contenu de la réponse

        console.log('Contenu de la réponse :', replyContent); // Log du contenu de la réponse

        if (!replyContent) {
            console.warn('Le contenu de la réponse est vide.'); // Log d'avertissement si le contenu est vide
            setIsSubmitting(false);
            return; // Si le contenu est vide, on ne fait rien
        }

        try {
            console.log('Soumission de la réponse pour le commentaire ID :', commentId); // Log avant la soumission
            await commentService.createReply(commentId, { content: replyContent });
            console.log('Réponse soumise avec succès pour le commentaire ID :', commentId); // Log de succès
            setReplyContents((prev) => ({ ...prev, [commentId]: '' }));
        } catch (error) {
            console.error('Erreur lors de la soumission de la réponse :', error); // Log de l'erreur
        } finally {
            setIsSubmitting(false);
            console.log('État de soumission réinitialisé.'); // Log après réinitialisation
            setReplyingTo(null); // Réinitialiser le commentaire en cours de réponse
        }
    };

    const handleReaction = async (currentPostId, reactionType) => {
        try {
            await reactionService.toggleReaction({
                postId: currentPostId, // ID du post concerné
                reactionType, // Type de la réaction : "like", "love", "happy", etc.
            });

            toast.success(`Réaction "${reactionType}" envoyée avec succès !`, {
                position: 'top-center', // Position centrée en haut
                autoClose: 3000, // Ferme automatiquement après 3 secondes
            });

        } catch (error) {
            toast.error('Erreur lors de la gestion de la réaction.', {
                position: 'top-right', // Utilisez la chaîne directement
                autoClose: 3000,
            });
            console.error('Erreur lors de la gestion de la réaction :', error);
        }
    };

    

    return (
        <>
            <ToastContainer />
            <div id="content-page" className="content-inner">
                <Container>
                    <Row className="gx-4">
                        <Col lg={8}>
                            <div id="content">
                                <Row>
                                    <Col sm={12}>
                                        <div className="mb-5">
                                            {/* <Stories stories={stories} /> */}
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        {/* <CreatePost className="card-block card-stretch card-height" /> */}
                                    </Col>
                                </Row>

                                <Row className="special-post-container">
                                    {allPosts.map((post) => (
                                        <Col sm={12} className="special-post">
                                            <Post
                                                key={post.id}
                                                post={{
                                                    ...post,
                                                    user: {
                                                        ...post.user,
                                                        profilePicture: post.user?.profilePicture || 'defaultProfilePic.png'
                                                    },
                                                    comments: post.comments || [],
                                                    media: post.media || [],
                                                    reactions: post.reactions || []
                                                }}
                                                toggleCommentSection={toggleCommentSection}
                                                imageOnSlide={imageOnSlide}
                                                setModalShow1={setModalShow1}
                                            />
                                        </Col>

                                    ))}
                                </Row>


                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
