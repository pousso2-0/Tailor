import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { postService } from "../../services/postService.js"; // Ajustez le chemin d'importation si nécessaire

const SharePostSection = ({ show, onHide, currentPostId }) => {
  const [shareLink, setShareLink] = useState(`https://yourwebsite.com/post/${currentPostId}`);
  const [isSharing, setIsSharing] = useState(false);

  const handleShareClick = async (platform) => {
    setIsSharing(true); // Démarrer l'animation ou l'état de chargement
    const shareData = {
      postId: currentPostId,
      platform,
    };

    try {
      await postService.sharePost(shareData);
      console.log(`Post ${currentPostId} partagé sur ${platform}`);
    } catch (error) {
      console.error('Erreur lors du partage du post:', error);
    } finally {
      setIsSharing(false); // Réinitialiser l'état après le partage
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="sharemodal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="modal-title">Partager</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mt-4">
        <Row className="gy-3">
          {/* Liens de partage sur les réseaux sociaux avec emojis */}
          {[
            { name: 'embed', emoji: '🔗', label: 'Embed' },
            { name: 'whatsapp', emoji: '📱', label: 'WhatsApp' },
            { name: 'facebook', emoji: '📘', label: 'Facebook' },
            { name: 'twitter', emoji: '🐦', label: 'Twitter' },
            { name: 'pinterest', emoji: '📌', label: 'Pinterest' },
            { name: 'linkedin', emoji: '💼', label: 'LinkedIn' },
          ].map((platform) => (
            <Col key={platform.name} lg={2} sm={4} className="col-6 text-center">
              <span role="button" onClick={() => handleShareClick(platform.name)} className="d-inline-block">
                <div style={{ fontSize: '30px' }}>{platform.emoji}</div>
                <h6 className="mt-2 mb-0 font-size-14 fw-semibold">{platform.label}</h6>
              </span>
            </Col>
          ))}
        </Row>
        <div className="mt-4">
          <div className="share-form">
            <input
              type="text"
              className="form-control"
              value={shareLink}
              readOnly
            />
            <button className="btn btn-link share-link-btn h6 m-0 fw-semibold" onClick={() => navigator.clipboard.writeText(shareLink)}>
              Copier
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SharePostSection;
