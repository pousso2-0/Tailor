import React from "react";
import { Modal, Form, Button, Image } from "react-bootstrap";

export default function PostModalForm(props) {    
    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Créer un post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={props.handlePostSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Que voulez-vous partager ?"
                            value={props.postContent}
                            onChange={(e) => props.setPostContent(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Ajouter une photo ou une vidéo (optionnel)</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={props.handleMediaChange}
                            accept="image/*,video/*"
                        />
                    </Form.Group>
                    {props.previewUrl && (
                        <Image src={props.previewUrl} alt="Preview" fluid className="mb-3" />
                    )}
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            label="Verrouiller ce post"
                            checked={props.isLocked}
                            onChange={(e) => props.setIsLocked(e.target.checked)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Publier
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}