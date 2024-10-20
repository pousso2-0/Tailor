// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import PropTypes from 'prop-types';
// import statusService from '../../services/StatusService';

// const StoryViewer = ({ storyGroup, onClose }) => {
//     const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
//     const [message, setMessage] = useState('');
//     const [isPaused, setIsPaused] = useState(false);
//     const inputRef = useRef(null);
//     const timerRef = useRef(null);

//     const currentStory = storyGroup.stories[currentStoryIndex];

//     const displayMessage = (message) => {
//         if (typeof message === 'string' && message.includes('See the status here:')) {
//             return message.split('See the status here:')[0].trim();
//         }
//         return message;
//     };

//     const goToNextStory = useCallback(() => {
//         if (currentStoryIndex < storyGroup.stories.length - 1) {
//             setCurrentStoryIndex(prevIndex => prevIndex + 1);
//         } else {
//             onClose();
//         }
//     }, [currentStoryIndex, storyGroup.stories.length, onClose]);

//     useEffect(() => {
//         if (!isPaused) {
//             timerRef.current = setTimeout(goToNextStory, currentStory.duration);
//         }
//         return () => clearTimeout(timerRef.current);
//     }, [currentStoryIndex, isPaused, goToNextStory, currentStory.duration]);

//     const handleSendMessage = async () => {
//         if (message.trim() && currentStory.id) {
//             try {
//                 const statusId = parseInt(currentStory.id, 10);
//                 if (isNaN(statusId)) {
//                     throw new Error('ID du statut invalide');
//                 }

//                 const messageText = message.trim();
//                 console.log('Contenu du message à envoyer:', messageText);
//                 console.log('ID du statut:', statusId);

//                 const response = await statusService.sendMessageToStatus(statusId, messageText);

//                 console.log('Réponse du serveur:', response);
//                 console.log('Message envoyé avec succès!');

//                 setMessage('');

//                 // Si vous affichez les messages envoyés immédiatement, utilisez displayMessage ici
//                 // Par exemple :
//                 // addMessageToDisplay(displayMessage(response.data.message));
//             } catch (error) {
//                 console.error('Erreur lors de l\'envoi du message:', error);
//                 console.error('Détails de l\'erreur:', error.response ? error.response.data : 'Pas de données de réponse');
//             }
//         } else {
//             console.error('Message vide ou ID du statut non disponible');
//             console.log('Message:', message);
//             console.log('ID du statut:', currentStory.id);
//         }
//     };

//     const handleInputFocus = () => setIsPaused(true);
//     const handleInputBlur = () => setIsPaused(false);

//     const handleAction = (action) => {
//         if (action === 'pause') {
//             setIsPaused(true);
//         } else if (action === 'play') {
//             setIsPaused(false);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//             <div className="relative w-full h-full md:w-[400px] md:h-[700px] bg-black rounded-lg overflow-hidden">
//                 {/* Header */}
//                 <div className="absolute top-0 left-0 right-0 p-4 z-30 bg-gradient-to-b from-black/50 to-transparent">
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-3">
//                             <img
//                                 src={storyGroup.user.avatar}
//                                 alt="Profile"
//                                 className="w-8 h-8 rounded-full border border-white"
//                             />
//                             <span className="text-white font-semibold">
//                 {storyGroup.user.name}
//               </span>
//                         </div>
//                         <button
//                             onClick={onClose}
//                             className="text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70"
//                         >
//                             ×
//                         </button>
//                     </div>
//                 </div>

//                 {/* Story Content */}
//                 <div className="w-full h-full">
//                     {currentStory.content({ action: handleAction, isPaused })}
//                 </div>

//                 {/* Display cleaned message content */}
//                 <div className="story-content absolute bottom-16 left-0 right-0 bg-black/70 text-white p-4">
//                     {displayMessage(currentStory.content)}
//                 </div>

//                 {/* Message Input */}
//                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
//                     <div className="flex items-center space-x-2">
//                         <input
//                             ref={inputRef}
//                             type="text"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             onFocus={handleInputFocus}
//                             onBlur={handleInputBlur}
//                             placeholder="Envoyer un message..."
//                             className="flex-grow p-2 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
//                         />
//                         <button
//                             onClick={handleSendMessage}
//                             className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
//                         >
//                             Envoyer
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// StoryViewer.propTypes = {
//     storyGroup: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         user: PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             avatar: PropTypes.string.isRequired,
//         }).isRequired,
//         stories: PropTypes.arrayOf(PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             content: PropTypes.func.isRequired,
//             duration: PropTypes.number.isRequired,
//             seeMore: PropTypes.func,
//         })).isRequired,
//     }).isRequired,
//     onClose: PropTypes.func.isRequired,
// };

// export default StoryViewer;

import React from 'react';
import PropTypes from 'prop-types';
import Stories from 'react-insta-stories';
import '../../assets/scss/stories.scss';

const StoryViewer = ({ storyGroup, onClose }) => (
  <div className="story-viewer">
    <div className="viewer-container">
      <div className="viewer-header">
        <div className="header-content">
          <div className="user-info">
            <img
              src={storyGroup.user?.avatar}
              alt="Profile"
            />
            <span>{storyGroup.user?.name}</span>
          </div>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
      </div>

      <Stories
        stories={storyGroup.stories}
        defaultInterval={5000}
        width="100%"
        height="100%"
        keyboardNavigation
        isPaused={false}
        onAllStoriesEnd={onClose}
        storyStyles={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  </div>
);

StoryViewer.propTypes = {
  storyGroup: PropTypes.shape({
    stories: PropTypes.array.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default StoryViewer;