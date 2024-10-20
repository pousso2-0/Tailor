import 'swiper/css';
import 'swiper/css/navigation';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import { reactionService } from '../../services/ReactionService.js';
import { commentService } from "../../services/CommentService.js";
import { userService } from "../../services/userService.js";
import CommentSection from "../../components/posts/CommentSection.jsx";
import ReactionSection from "../../components/posts/ReactionSection.jsx";
import ListePost from "../../components/posts/ListePost.jsx";
import FollowSection from '../../components/posts/FollowSection.jsx';
import SharePostSection from "../../components/posts/SharePostSection.jsx";
import { postService } from '../../services/postService.js';
import { Share2 } from 'lucide-react';

async function loadAllPosts() {
    try {
        return (await postService.getAllPosts()).data;
    } catch (error) {
        return null;
    }
}

const Index = () => {
    const [loadContent, setLoadContent] = useState(true);
    const [allPosts, setAllPosts] = useState([]);
    const [mainComment, setMainComment] = useState('');
    const [isSubmittingMain, setIsSubmittingMain] = useState(false);
    const [posts, setPosts] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadPage, setLoadPage] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const currentPostData = (await loadAllPosts());
            if (Array.isArray(currentPostData)) {
                setLoadPage(false);
                setAllPosts(currentPostData);
            } else {
                console.log(currentPostData);
                console.error('Les données des posts ne sont pas un tableau.');
                setAllPosts([]);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setTimeout(() => {
                    setLoadContent(false);
                }, 2000);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMainCommentChange = (value) => {
        setMainComment(value);
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
            const newComment = await commentService.createComment(postId, commentData);

            setMainComment('');
            setAllPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === postId
                        ? { ...post, comments: [...post.comments, newComment] }
                        : post
                )
            );
        } catch (error) {
            console.error('Erreur lors de la soumission du commentaire principal :', error);
        } finally {
            setIsSubmittingMain(false);
        }
    };

    const handleReaction = async (currentPostId, reactionType) => {
        try {
            const response = await reactionService.toggleReaction({
                postId: currentPostId,
                reactionType,
            });

            setPosts(prevPosts =>
                prevPosts.map(post =>
                    post.id === currentPostId
                        ? { ...post, userReaction: reactionType }
                        : post
                )
            );

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

    const handleFollowToggle = async (post) => {
        const userId = post.user.id;

        setLoading(true);
        try {
            const followingList = await userService.getFollowing();
            const isFollowing = followingList.some(follow => follow.id === userId);

            if (isFollowing) {
                await userService.unfollowUser(userId);
                setPosts(prevPosts =>
                    prevPosts.map(u =>
                        u.id === userId
                            ? { ...u, followersCount: u.followersCount - 1, isFollowing: false }
                            : u
                    )
                );
                toast.success(`Vous vous êtes désabonné de ${post.user.name} avec succès!`, { position: 'top-center', autoClose: 3000 });
            } else {
                await userService.followUser(userId);
                setPosts(prevPosts =>
                    prevPosts.map(u =>
                        u.id === userId
                            ? { ...u, followersCount: u.followersCount + 1, isFollowing: true }
                            : u
                    )
                );
                toast.success(`Vous suivez maintenant ${post.user.name}!`, { position: 'top-center', autoClose: 3000 });
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Une erreur s\'est produite lors du suivi/désabonnement.';
            console.error('Erreur lors du suivi/désabonnement:', error);
            toast.error(errorMessage, { position: 'top-center', autoClose: 3000 });
        } finally {
            setLoading(false);
        }
    };

    const reactions = [
        { id: 1, label: 'Aimer', type: 'like', icon: '👍' },
        { id: 2, label: 'Amour', type: 'love', icon: '❤️' },
        { id: 3, label: 'Heureux', type: 'happy', icon: '😊' },
        { id: 4, label: 'HaHa', type: 'haha', icon: '😂' },
        { id: 5, label: 'Triste', type: 'sad', icon: '😢' },
        { id: 6, label: 'Adorable', type: 'lovely', icon: '😍' }
    ];


    if (loadPage) {
        return(
            <div id="loading">
                <div id="loading-center">
                </div>
            </div>
        );
    }

    return (
        <div id="content-page" className="content-inner">
            <Container>
                <Row className="gx-4">
                    <Col lg={8}>
                        <div id="content">
                            <Row className="special-post-container">
                                <Col sm={12} className="special-post">
                                    <div className="card card-block card-stretch card-height">
                                        <div className="card-body">
                                            <div>
                                                {allPosts.map((post) => (
                                                    <div key={post.id} className="user-post mt-4">
                                                        <ListePost post={post}>
                                                            <FollowSection
                                                                isFollowing={post.isFollowing}
                                                                handleFollowToggle={() => handleFollowToggle(post)}
                                                                loading={loading}
                                                            />
                                                        </ListePost>
                                                        <ReactionSection
                                                            reactions={reactions}
                                                            handleReaction={handleReaction}
                                                            currentPostId={post.id}
                                                        />
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => setModalShow(true)}
                                                            className="text-gray-600 hover:text-gray-800 transition-colors"
                                                        >
                                                            <Share2 className="h-5 w-5" />
                                                        </Button>
                                                        <SharePostSection show={modalShow} onHide={() => setModalShow(false)} currentPostId={post.id} />
                                                        <CommentSection
                                                            post={post}
                                                            isSubmittingMain={isSubmittingMain}
                                                            handleMainCommentSubmit={handleMainCommentSubmit}
                                                            mainComment={mainComment}
                                                            handleMainCommentChange={handleMainCommentChange}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Index;
