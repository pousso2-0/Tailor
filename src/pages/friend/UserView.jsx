import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, ListGroup } from 'react-bootstrap';

const UserView = () => {
    const location = useLocation();
    const user = location.state;

    // Fonction pour formater la date de dernière connexion
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

    return (
        <Container className="py-5">
            <Row>
                <Col md={4}>
                    <Card className="text-center shadow">
                        <Card.Header className="bg-primary text-white">
                            <h3>{user.name}</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-3">
                                <img
                                    src={user.profilePicture || 'https://via.placeholder.com/150'}
                                    alt={user.name}
                                    className="rounded-circle img-thumbnail"
                                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                />
                            </div>
                            <Badge bg={user.isOnline ? "success" : "secondary"} className="px-3 py-2">
                                {user.isOnline ? 'En ligne' : 'Hors ligne'}
                            </Badge>
                            {!user.isOnline && (
                                <p className="text-muted mt-2">
                                    ⏰ Dernière connexion : {formatLastSeen(user.lastSeenAt)}
                                </p>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card className="shadow">
                        <Card.Header className="bg-primary text-white">
                            <h4>Informations de profil</h4>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <strong>📧 Email:</strong> {user.email || 'Non renseigné'}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>📞 Téléphone:</strong> {user.phone || 'Non renseigné'}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>💼 Profession:</strong> {user.profession || 'Non renseignée'}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>📍 Localisation:</strong> {user.location || 'Non renseignée'}
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card className="mt-4 shadow">
                        <Card.Header className="bg-primary text-white">
                            <h4>Bio</h4>
                        </Card.Header>
                        <Card.Body>
                            <p>{user.bio || "Aucune biographie disponible."}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UserView;