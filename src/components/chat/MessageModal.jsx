// MessageModal.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MessageModal = ({ show, onClose, onSend, messageContent, setMessageContent, userName }) => {
    return (
        <Modal show={show} onHide={onClose} centered className="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title>Envoyer un message à {userName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea
                    className="form-control custom-textarea"
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

            <style jsx>{`
                .custom-modal .modal-content {
                    border-radius: 10px; /* Coins arrondis */
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Ombre */
                }

                .custom-textarea {
                    resize: none; /* Désactiver le redimensionnement */
                    border: 1px solid #ced4da; /* Bordure personnalisée */
                    border-radius: 5px; /* Coins arrondis */
                    padding: 10px; /* Espacement intérieur */
                    font-size: 16px; /* Taille de police */
                }
            `}</style>
        </Modal>
    );
};

export default MessageModal;
