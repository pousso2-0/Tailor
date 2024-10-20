// import React, { useState, useCallback, useEffect } from "react";
// import PropTypes from 'prop-types';
// import statusService from '../../services/StatusService';
// import StoryThumbnail from './StoryThumbnail';
// import StoryViewer from './StoryViewer';
// import CreateStoryModal from './CreateStoryModal';

// const CreateStoryButton = ({ onClick }) => (
//     <div
//         className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity min-w-[80px]"
//         onClick={onClick}
//     >
//         <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center border-2 border-gray-300">
//             <span className="text-2xl text-white">+</span>
//         </div>
//         <span className="mt-2 text-sm text-gray-700">
//       Créer une story
//     </span>
//     </div>
// );

// const InteractiveStories = ({ initialStories = [] }) => {
//     const [stories, setStories] = useState(initialStories);
//     const [isViewerOpen, setIsViewerOpen] = useState(false);
//     const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const loadStories = useCallback(async () => {
//         try {
//             const response = await statusService.getFollowedUserStatuses();
//             if (response?.data) {
//                 const processedStories = processStories(response.data);
//                 setStories(processedStories);
//             }
//         } catch (error) {
//             console.error('Erreur lors du chargement des stories:', error);
//         }
//     }, []);

//     const processStories = (rawStories) => {
//         const storyGroups = rawStories.reduce((acc, item) => {
//             const userId = item.userId.toString();
//             if (!acc[userId]) {
//                 acc[userId] = {
//                     id: userId,
//                     user: {
//                         name: item.user.name,
//                         avatar: item.user.profilePicture,
//                     },
//                     stories: [],
//                 };
//             }

//             const storyContent = ({ action, isPaused }) => {
//                 const handleLike = async () => {
//                     try {
//                         await statusService.likeStatus(parseInt(item.id, 10));
//                     } catch (error) {
//                         console.error('Erreur lors du like:', error);
//                     }
//                 };

//                 return (
//                     <div className="story-wrapper relative h-full">
//                         {item.mediaType.includes('video') ? (
//                             <video
//                                 src={item.mediaUrl}
//                                 autoPlay
//                                 playsInline
//                                 className="story-media"
//                                 onClick={() => action(isPaused ? 'play' : 'pause')}
//                             />
//                         ) : (
//                             <img
//                                 src={item.mediaUrl}
//                                 className="story-media h-full w-full object-cover"
//                                 alt=""
//                             />
//                         )}

//                         {item.content && (
//                             <div className="story-content absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
//                                 {item.content}
//                             </div>
//                         )}

//                         <div className="story-actions">
//                             {/* Additional actions like like, share buttons */}
//                         </div>
//                     </div>
//                 );
//             };

//             acc[userId].stories.push({
//                 id: item.id.toString(), // Assurez-vous que l'ID est stocké comme une chaîne
//                 content: storyContent,
//                 duration: 5000,
//                 seeMore: ({ close }) => (
//                     <div className="see-more-container">
//                         <button onClick={close}>Voir plus</button>
//                     </div>
//                 ),
//             });

//             return acc;
//         }, {});

//         return Object.values(storyGroups);
//     };

//     useEffect(() => {
//         loadStories();
//     }, [loadStories]);

//     const handleCreateStatus = async (content, files, duration) => {
//         try {
//             for (const file of files) {
//                 const response = await statusService.createStatus(content, file, duration);
//                 const statusId = response.data.id; // Assuming the response contains the status ID
//                 const userId = response.data.userId;

//                 // Maintenant vous pouvez utiliser l'ID du statut pour d'autres actions si nécessaire
//                 console.log("Statut créé avec l'ID :", statusId);
//                 console.log('Créé par l\'utilisateur avec l\'ID:', userId);
//             }
//             await loadStories();
//             setIsModalOpen(false);
//         } catch (error) {
//             console.error('Erreur lors de la création du statut :', error);
//         }
//     };


//     return (
//         <div className="w-full max-w-6xl mx-auto">
//             <div className="flex items-center space-x-4 overflow-x-auto pb-4 scrollbar-hide">
//                 <CreateStoryButton onClick={() => setIsModalOpen(true)} />

//                 {stories.map((storyGroup, index) => (
//                     <StoryThumbnail
//                         key={storyGroup.id}
//                         user={storyGroup.user}
//                         onClick={() => {
//                             setCurrentStoryIndex(index);
//                             setIsViewerOpen(true);
//                         }}
//                     />
//                 ))}
//             </div>

//             {isViewerOpen && stories[currentStoryIndex] && (
//                 <StoryViewer
//                     storyGroup={stories[currentStoryIndex]}
//                     onClose={() => setIsViewerOpen(false)}
//                 />
//             )}

//             <CreateStoryModal
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 onCreateStatus={handleCreateStatus}
//             />
//         </div>
//     );
// };

// InteractiveStories.propTypes = {
//     initialStories: PropTypes.array,
// };

// export default InteractiveStories;

import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import statusService from '../../services/StatusService';
import StoryThumbnail from './StoryThumbnail';
import StoryViewer from './StoryViewer';
import CreateStoryModal from './CreateStoryModal';
import '../../assets/scss/stories.scss';

const CreateStoryButton = ({ onClick }) => (
  <div className="create-story-button" onClick={onClick}>
    <div className="button-circle">
      <span>+</span>
    </div>
    <span className="button-text">
      Créer une story
    </span>
  </div>
);

CreateStoryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const InteractiveStories = ({ initialStories = [] }) => {
  const [stories, setStories] = useState(initialStories);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadStories = useCallback(async () => {
    try {
      const response = await statusService.getFollowedUserStatuses();
      if (response?.data) {
        const processedStories = processStories(response.data);
        setStories(processedStories);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des stories:', error);
    }
  }, []);

  const processStories = (rawStories) => {
    const storyGroups = rawStories.reduce((acc, item) => {
      const userId = item.userId.toString();
      if (!acc[userId]) {
        acc[userId] = {
          id: userId,
          user: {
            name: item.user.name,
            avatar: item.user.profilePicture,
          },
          stories: [],
        };
      }

      const storyContent = ({ action, isPaused }) => {
        const handleLike = async () => {
          try {
            await statusService.likeStatus(item.id);
          } catch (error) {
            console.error('Erreur lors du like:', error);
          }
        };

        const handleReply = async (message) => {
          try {
            await statusService.replyToStatus(item.id, message);
          } catch (error) {
            console.error('Erreur lors de la réponse:', error);
          }
        };

        return (
          <div className="story-wrapper">
            {item.mediaType.includes('video') ? (
              <video
                src={item.mediaUrl}
                autoPlay
                playsInline
                onClick={() => action(isPaused ? 'play' : 'pause')}
              />
            ) : (
              <img
                src={item.mediaUrl}
                alt=""
              />
            )}

            {item.content && (
              <div className="story-content">
                {item.content}
              </div>
            )}

            {/* <div className="story-actions">
              <button onClick={handleLike}>❤️</button>
              <div className="story-reply">
                <input
                  type="text"
                  placeholder="Répondre..."
                  onClick={() => action('pause')}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleReply(e.target.value);
                      e.target.value = '';
                      action('play');
                    }
                  }}
                />
              </div>
              <div className="story-additional-actions">
                <button onClick={() => action('pause')}>📤</button>
                <button onClick={() => action('pause')}>⋮</button>
              </div>
            </div> */}
          </div>
        );
      };

      acc[userId].stories.push({
        content: storyContent,
        duration: 5000,
        seeMore: ({ close }) => (
          <div className="see-more-container">
            <button onClick={close}>Voir plus</button>
          </div>
        ),
      });

      return acc;
    }, {});

    return Object.values(storyGroups);
  };

  useEffect(() => {
    loadStories();
  }, [loadStories]);

  const handleCreateStatus = async (content, files, duration) => {
    try {
      for (const file of files) {
        await statusService.createStatus(content, file, duration);
      }
      await loadStories();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Erreur lors de la création du statut :', error);
    }
  };

  return (
    <div className="stories-container">
      <div className="stories-scroll">
        <CreateStoryButton onClick={() => setIsModalOpen(true)} />
        
        {stories.map((storyGroup, index) => (
          <StoryThumbnail
            key={storyGroup.id}
            user={storyGroup.user}
            onClick={() => {
              setCurrentStoryIndex(index);
              setIsViewerOpen(true);
            }}
          />
        ))}
      </div>

      {isViewerOpen && stories[currentStoryIndex] && (
        <StoryViewer
          storyGroup={stories[currentStoryIndex]}
          onClose={() => setIsViewerOpen(false)}
        />
      )}

      <CreateStoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateStatus={handleCreateStatus}
      />
    </div>
  );
};

InteractiveStories.propTypes = {
  initialStories: PropTypes.array,
};

export default InteractiveStories;