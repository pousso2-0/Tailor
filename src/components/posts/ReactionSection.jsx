import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const ReactionSection = ({ reactions, handleReaction, currentPostId }) => {
  const [activeReaction, setActiveReaction] = useState(null); // Garder la réaction active

  const handleClick = (reactionType) => {
    setActiveReaction(reactionType); // Déclencher l'animation pour la réaction cliquée
    handleReaction(currentPostId, reactionType); // Gérer la réaction
    setTimeout(() => setActiveReaction(null), 600); // Réinitialiser après l'animation
  };

  return (
    <div className="reaction-section">
      {/* Inline style to define the bounce animation */}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: scale(1);
          }
          30% {
            transform: scale(1.4); /* Plus grand effet lors du rebond */
          }
          70% {
            transform: scale(0.9); /* Effet de rebond qui descend légèrement */
          }
        }
        .bounce {
          animation: bounce 0.6s ease-in-out; /* Durée de l'animation */
        }
      `}</style>

      <h5>Réagissez au post</h5>
      <div className="like-data">
        <div className="dropdown">
          <span
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            role="button"
          >
            <span className="material-symbols-outlined align-text-top font-size-20">
              thumb_up
            </span>
            <span className="fw-medium"></span>
          </span>
          <div className="dropdown-menu py-2 shadow">
            {reactions.map((reaction) => (
              <OverlayTrigger
                key={reaction.id}
                placement="top"
                overlay={<Tooltip>{reaction.label}</Tooltip>}
                className="me-2"
              >
                <span
                  role="button"
                  onClick={() => handleClick(reaction.type)}
                  style={{ cursor: 'pointer', fontSize: '20px' }}
                  aria-label={reaction.label}
                  className={activeReaction === reaction.type ? 'bounce' : ''} // Appliquer la classe "bounce" uniquement si cette réaction est cliquée
                >
                  {reaction.icon} {/* Utiliser l'emoji pour chaque réaction */}
                </span>
              </OverlayTrigger>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactionSection;
