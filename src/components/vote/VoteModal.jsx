import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Star } from 'lucide-react'; // Assurez-vous d'avoir installé lucide-react

const VoteModal = ({ show, onClose, onVote }) => {
    const [rating, setRating] = useState(0);

    const handleVote = () => {
        onVote(rating);
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="text-center">Votez pour ce produit</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <div className="d-flex justify-content-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            size={50}
                            color={star <= rating ? 'gold' : 'lightgray'}
                            onClick={() => setRating(star)}
                            style={{ cursor: 'pointer', margin: '0 5px' }}
                        />
                    ))}
                </div>
                <p>Sélectionnez une note : <strong>{rating}</strong></p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <Button variant="secondary" onClick={onClose}>
                    Annuler
                </Button>
                <Button variant="primary" onClick={handleVote} disabled={rating === 0}>
                    Voter
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default VoteModal;
