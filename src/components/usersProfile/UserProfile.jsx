import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const UserProfile = ({ userProfile }) => {
    if (!userProfile) return <div>Chargement...</div>;

    return (
        <Card.Body className="text-center d-flex flex-column align-items-center">
            <div className="position-relative mb-4">
                <img
                    src={userProfile.profilePicture || 'https://via.placeholder.com/150'}
                    alt={userProfile.name}
                    className="rounded-circle img-thumbnail"
                    style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                />
                <Badge bg={userProfile.isOnline ? "success" : "secondary"} className="position-absolute bottom-0 start-100 translate-middle px-2 py-1 rounded-pill">
                    {userProfile.isOnline ? 'En ligne' : 'Hors ligne'}
                </Badge>
            </div>
            <h2 className="fw-bold mb-1">{userProfile.name}</h2>
            <p className="text-muted mb-4">{userProfile.type}</p>
        </Card.Body>
    );
};

export default UserProfile;
