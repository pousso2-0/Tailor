import React from 'react';
import { Button, ListGroup, Card } from 'react-bootstrap'; // Ajoutez Card ici
import { UserPlus, MessageCircle, Flag } from 'lucide-react';

const UserActions = ({ userProfile, setShowModal, setShowReportModal, isFollowing, setIsFollowing, isLoading, setIsLoading }) => {
    const handleFollowToggle = async () => {
        setIsLoading(true);
        // Logique de suivi...
        setIsLoading(false);
    };

    return (
        <Card.Body> {/* Assurez-vous que Card est utilisé ici */}
            <h4 className="fw-bold mb-4">Informations de profil</h4>
            <ListGroup variant="flush">
                {/* Informations de profil ici */}
            </ListGroup>
            <div className="d-flex justify-content-center gap-2 mb-4">
                <Button variant="primary" onClick={handleFollowToggle} disabled={isLoading}>
                    <UserPlus size={18} className="me-2" />
                    {isLoading ? 'Chargement...' : (isFollowing ? 'Unfollow' : 'Follow')}
                </Button>
                <Button variant="outline-primary" onClick={() => setShowModal(true)}>
                    <MessageCircle size={18} className="me-2" />
                    Message
                </Button>
            </div>
            <Button variant="outline-danger" onClick={() => setShowReportModal(true)}>
                <Flag size={18} className="me-2" />
                Signaler
            </Button>
        </Card.Body>
    );
};

export default UserActions;
