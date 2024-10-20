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

    useEffect(() => {
        const checkFollowingStatus = async () => {
            try {
                const response = await userService.isFollowing(user.id);
                setIsFollowing(response.data.isFollowing);
            } catch (error) {
                console.error('Erreur lors de la vérification du statut de suivi:', error);
                setIsFollowing(false);
            }
        };

        checkFollowingStatus();
    }, [user.id]);

    const handleShowReportModal = () => setShowReportModal(true);
    const handleCloseReportModal = () => setShowReportModal(false);

    const validReasons = ['harcèlement', 'spam', 'contenu inapproprié']; // Liste des raisons valides

    const handleSubmitReport = async (reason) => {
        if (!reason) {
            alert("Veuillez sélectionner une raison pour le signalement.");
            return;
        }

        try {
            console.log('Reporting user:', user.id, 'Reason:', reason);
            await userService.reportUser(user.id, reason);
            alert("Signalement envoyé avec succès.");
            handleCloseReportModal();
        } catch (error) {
            console.error('Erreur lors du signalement de l\'utilisateur:', error);
            if (error.response) {
                console.error('Détails de l\'erreur:', error.response.data);
            }
            alert("Erreur lors du signalement. Veuillez réessayer.");
        }
    };



    const handleCloseModal = () => {
        setShowModal(false);
        setMessageContent('');
    };

    const handleShowModal = () => setShowModal(true);

    const formatLastSeen = (date) => {
        const now = new Date();
        const lastSeen = new Date(date);
        const diffTime = Math.abs(now - lastSeen);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return "Aujourd'hui";
        if (diffDays === 1) return "Hier";
        if (diffDays < 7) return `Il y a ${diffDays} jours`;
        return lastSeen.toLocaleDateString();
    };

    const handleFollowToggle = async () => {
        try {
            if (isFollowing) {
                await userService.unfollowUser(user.id);
                setIsFollowing(false);
            } else {
                await userService.followUser(user.id);
                setIsFollowing(true);
            }
        } catch (error) {
            console.error('Erreur lors du suivi de l\'utilisateur:', error);
            alert("Erreur lors du suivi de l'utilisateur. Veuillez réessayer.");
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
            console.log("Message envoyé avec succès !");
            handleCloseModal();
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
        }
    };

    return (
        <Container className="py-5">
            <Card className="border-0 shadow-lg">
                <Row className="g-0">
                    <Col md={4} className="border-end">
                        <Card.Body className="text-center d-flex flex-column align-items-center">
                            <div className="position-relative mb-4">
                                <img
                                    src={user.profilePicture || 'https://via.placeholder.com/150'}
                                    alt={user.name}
                                    className="rounded-circle img-thumbnail"
                                    style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                                />
                                <Badge
                                    bg={user.isOnline ? "success" : "secondary"}
                                    className="position-absolute bottom-0 start-100 translate-middle px-2 py-1 rounded-pill"
                                >
                                    {user.isOnline ? 'En ligne' : 'Hors ligne'}
                                </Badge>
                            </div>
                            <h2 className="fw-bold mb-1">{user.name}</h2>
                            <p className="text-muted mb-4">{user.profession || 'Profession non renseignée'}</p>
                            {!user.isOnline && (
                                <p className="text-muted small mb-4">
                                    Dernière connexion : {formatLastSeen(user.lastSeenAt)}
                                </p>
                            )}
                            <div className="d-flex justify-content-center gap-2 mb-4">
                                <Button variant="primary" className="rounded-pill px-4 py-2" onClick={handleFollowToggle}>
                                    <UserPlus size={18} className="me-2" />
                                    {isFollowing ? 'Unfollow' : 'Follow'}
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
                                        {user.email || 'Non renseigné'}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center border-0 px-0 py-2">
                                    <Phone size={20} className="me-3 text-primary" />
                                    <div>
                                        <strong className="d-block">Téléphone</strong>
                                        {user.phone || 'Non renseigné'}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center border-0 px-0 py-2">
                                    <Briefcase size={20} className="me-3 text-primary" />
                                    <div>
                                        <strong className="d-block">Profession</strong>
                                        {user.profession || 'Non renseignée'}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center border-0 px-0 py-2">
                                    <MapPin size={20} className="me-3 text-primary" />
                                    <div>
                                        <strong className="d-block">Localisation</strong>
                                        {user.location || 'Non renseignée'}
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                            <h4 className="fw-bold mt-5 mb-3">Bio</h4>
                            <p className="text-muted">{user.bio || "Aucune biographie disponible."}</p>
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
                userName={user.name}
            />


            <ReportModal
                show={showReportModal}
                onClose={handleCloseReportModal}
                onSubmit={handleSubmitReport}
                userName={user.name}
            />
        </Container>
    );
};

export default UserView;