// MessageModal.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MessageModal = ({ show, onClose, onSend, messageContent, setMessageContent, userName }) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Envoyer un message à {userName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Écrire votre message ici..."
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)} // Gérer le contenu du message
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Fermer
                </Button>
                <Button variant="primary" onClick={onSend}>
                    Envoyer
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MessageModal;
