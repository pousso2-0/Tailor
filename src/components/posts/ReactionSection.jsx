import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

const ReactionSection = ({ reactions, handleReaction, currentPostId }) => {
  const [activeReaction, setActiveReaction] = useState(null);
  const [selectedReaction, setSelectedReaction] = useState(null); // Pour stocker la réaction sélectionnée

  const handleClick = (reactionType) => {
    setActiveReaction(reactionType);
    setSelectedReaction(reactionType); // Mettre à jour la réaction sélectionnée
    handleReaction(currentPostId, reactionType);
    setTimeout(() => setActiveReaction(null), 600);
  };

  const bounceVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.4, 0.9, 1],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const getReactionLabel = () => {
    const reaction = reactions.find((r) => r.type === selectedReaction);
    return reaction ? reaction.icon : '👍'; // Afficher par défaut le "like"
  };

  return (
      <div className="reaction-section">
        <div className="like-data">
          <div className="dropdown">
                    <span
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        role="button"
                    >
                        {/* Affiche la réaction sélectionnée */}
                      <span className="material-symbols-outlined align-text-top font-size-20">
                            {getReactionLabel()}
                        </span>
                        <span className="fw-medium ml-1">
                            {selectedReaction ? reactions.find(r => r.type === selectedReaction).label : "J'aime"}
                        </span>
                    </span>
            <div className="dropdown-menu py-2 shadow">
              <AnimatePresence>
                {reactions.map((reaction) => (
                    <OverlayTrigger
                        key={reaction.id}
                        placement="top"
                        overlay={<Tooltip>{reaction.label}</Tooltip>}
                        className="me-2"
                    >
                      <motion.span
                          role="button"
                          onClick={() => handleClick(reaction.type)}
                          style={{ cursor: 'pointer', fontSize: '20px', display: 'inline-block' }}
                          aria-label={reaction.label}
                          variants={bounceVariants}
                          initial="initial"
                          animate={activeReaction === reaction.type ? "animate" : "initial"}
                      >
                        {reaction.icon}
                      </motion.span>
                    </OverlayTrigger>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ReactionSection;