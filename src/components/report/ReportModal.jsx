import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ReportModal = ({ show, onClose, onSubmit, userName }) => {
    const [reason, setReason] = useState('');

    const validReasons = ['harcèlement', 'spam', 'contenu inapproprié'];

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(reason);
        setReason('');
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Signaler {userName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Raison du signalement</Form.Label>
                        {validReasons.map((validReason) => (
                            <Form.Check
                                key={validReason}
                                type="radio"
                                id={`reason-${validReason}`}
                                label={validReason.charAt(0).toUpperCase() + validReason.slice(1)}
                                name="reportReason"
                                value={validReason}
                                checked={reason === validReason}
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
        </Modal>
    );
};

export default ReportModal;