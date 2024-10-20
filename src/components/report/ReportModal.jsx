import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ReportModal = ({ show, onClose, onSubmit, userName }) => {
    const [reason, setReason] = useState('');

    const validReasons = ['harassment', 'spam', 'inappropriate_content'];

    const reasonsMap = {
        'harcèlement': 'harassment',
        'spam': 'spam',
        'contenu inapproprié': 'inappropriate_content'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedReason = reasonsMap[reason] || reason;
        onSubmit(formattedReason);
        setReason('');
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton style={headerStyle}>
                <Modal.Title style={titleStyle}>Signaler {userName}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={bodyStyle}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Raison du signalement</Form.Label>
                        {Object.keys(reasonsMap).map((displayReason) => (
                            <Form.Check
                                key={displayReason}
                                type="radio"
                                id={`reason-${displayReason}`}
                                label={displayReason.charAt(0).toUpperCase() + displayReason.slice(1)}
                                name="reportReason"
                                value={displayReason}
                                checked={reason === displayReason}
                                onChange={(e) => setReason(e.target.value)}
                                required
                            />
                        ))}
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!reason}>
                        Envoyer le signalement
                    </Button>
                </Form>
            </Modal.Body>
            <style jsx>{`
                .modal-content {
                    border-radius: 10px; /* Coins arrondis */
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Ombre douce */
                }
                .modal-header {
                    background-color: #f8f9fa; /* Couleur d'arrière-plan personnalisée */
                }
                .modal-title {
                    font-weight: bold; /* Titre en gras */
                }
                .modal-body {
                    padding: 20px; /* Espacement intérieur */
                }
            `}</style>
        </Modal>
    );
};

const headerStyle = {
    backgroundColor: '#f8f9fa',
};

const titleStyle = {
    fontWeight: 'bold',
};

const bodyStyle = {
    padding: '20px',
};

export default ReportModal;
