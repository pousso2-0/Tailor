import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, ListGroup, Button } from 'react-bootstrap';
import { UserPlus, MessageCircle, Flag, Mail, Phone, Briefcase, MapPin } from 'lucide-react';
import { messageService } from '../../services/MessageService';
import { userService } from '../../services/userService';
import MessageModal from '../../components/chat/MessageModal';
import ReportModal from '../../components/report/ReportModal';

const UserView = () => {
    const location = useLocation();
    const user = location.state;

    const [showModal, setShowModal] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);
    const [messageContent, setMessageContent] = useState('');
    const [isFollowing, setIsFollowing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await userService.getUserProfileById(user.id);
                setUserProfile(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération du profil utilisateur:', error);
            }
        };

        fetchUserProfile();

        const checkFollowingStatus = async () => {
            setIsLoading(true);
            try {
                const response = await userService.isFollowing(user.id);
                setIsFollowing(response.data.isFollowing);
            } catch (error) {
                console.error('Erreur lors de la vérification du statut de suivi:', error);
                setIsFollowing(false);
            } finally {
                setIsLoading(false);
            }
        };

        checkFollowingStatus();
    }, [user]);

    const handleShowReportModal = () => setShowReportModal(true);
    const handleCloseReportModal = () => setShowReportModal(false);

    const handleSubmitReport = async (reason) => {
        if (!reason) {
            alert("Veuillez sélectionner une raison pour le signalement.");
            return;
        }

        try {
            await userService.reportUser(user.id, reason);
            alert("Signalement envoyé avec succès.");
            handleCloseReportModal();
        } catch (error) {
            console.error('Erreur lors du signalement de l\'utilisateur:', error);
            alert("Erreur lors du signalement. Veuillez réessayer.");
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setMessageContent('');
    };

    const handleShowModal = () => setShowModal(true);

    const handleFollowToggle = async () => {
        setIsLoading(true);
        try {
            if (isFollowing) {
                await userService.unfollowUser(user.id);
                setIsFollowing(false);
            } else {
                await userService.followUser(user.id);
                setIsFollowing(true);
            }
        } catch (error) {
            console.error('Erreur lors du suivi/désabonnement de l\'utilisateur:', error);
            alert("Une erreur s'est produite. Veuillez réessayer.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendMessage = async () => {
        if (!messageContent) {
            alert("Veuillez écrire un message.");
            return;
        }

        try {
            const messageData = {
                receiverId: user.id,
                content: messageContent,
            };

            await messageService.sendMessage(messageData);
            handleCloseModal();
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
        }
    };

    if (!userProfile) {
        return <div>Chargement...</div>;
    }

    return (
        <Container className="py-5" style={{ height: '86vh' }}>
            <Card className="border-0 shadow-lg rounded">
                <Row className="g-0">
                    <Col md={4} className="border-end">
                        <Card.Body className="text-center d-flex flex-column align-items-center">
                            <div className="position-relative mb-4">
                                <img
                                    src={userProfile.profilePicture || 'https://via.placeholder.com/150'}
                                    alt={userProfile.name}
                                    className="rounded-circle img-thumbnail"
                                    style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                                />
                                <Badge
                                    bg={userProfile.isOnline ? "success" : "secondary"}
                                    className="position-absolute bottom-0 start-100 translate-middle px-2 py-1 rounded-pill"
                                >
                                    {userProfile.isOnline ? 'En ligne' : 'Hors ligne'}
                                </Badge>
                            </div>
                            <h2 className="fw-bold mb-1">{userProfile.name}</h2>
                            <p className="text-muted mb-4">{userProfile.type}</p>
                            <div className="d-flex justify-content-center gap-2 mb-4">
                                <Button
                                    variant="primary"
                                    className="rounded-pill px-4 py-2"
                                    onClick={handleFollowToggle}
                                    disabled={isLoading}
                                >
                                    <UserPlus size={18} className="me-2" />
                                    {isLoading ? 'Chargement...' : (isFollowing ? 'Unfollow' : 'Follow')}
                                </Button>
                                <Button variant="outline-primary" className="rounded-pill px-4 py-2" onClick={handleShowModal}>
                                    <MessageCircle size={18} className="me-2" />
                                    Message
                                </Button>
                            </div>
                            <Button variant="outline-danger" className="rounded-pill px-4 py-2" onClick={handleShowReportModal}>
                                <Flag size={18} className="me-2" />
                                Signaler
                            </Button>
                        </Card.Body>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <h4 className="fw-bold mb-4">Informations de profil</h4>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex align-items-center border-0 px-0 py-2">
                                    <Mail size={20} className="me-3 text-primary" />
                                    <div>
                                        <strong className="d-block">Email</strong>
                                        {userProfile.email || 'Non renseigné'}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center border-0 px-0 py-2">
                                    <Phone size={20} className="me-3 text-primary" />
                                    <div>
                                        <strong className="d-block">Téléphone</strong>
                                        {userProfile.phone || 'Non renseigné'}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center border-0 px-0 py-2">
                                    <Briefcase size={20} className="me-3 text-primary" />
                                    <div>
                                        <strong className="d-block">Type</strong>
                                        {userProfile.type}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center border-0 px-0 py-2">
                                    <MapPin size={20} className="me-3 text-primary" />
                                    <div>
                                        <strong className="d-block">Localisation</strong>
                                        {userProfile.location || 'Non renseignée'}
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                            <h4 className="fw-bold mt-5 mb-3">Bio</h4>
                            <p className="text-muted">{userProfile.bio || "Aucune biographie disponible."}</p>
                            <h4 className="fw-bold mt-3 mb-3">Statistiques</h4>
                            <Row>
                                <Col>
                                    <p className="text-muted">Abonnés : {userProfile.followersCount}</p>
                                </Col>
                                <Col>
                                    <p className="text-muted">Abonnements : {userProfile.followingCount}</p>
                                </Col>
                                <Col>
                                    <p className="text-muted">Publications : {userProfile.postsCount}</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            <MessageModal
                show={showModal}
                onClose={handleCloseModal}
                onSend={handleSendMessage}
                messageContent={messageContent}
                setMessageContent={setMessageContent}
                userName={userProfile.name}
            />

            <ReportModal
                show={showReportModal}
                onClose={handleCloseReportModal}
                onSubmit={handleSubmitReport}
                userName={userProfile.name}
            />
        </Container>
    );
};

export default UserView;
