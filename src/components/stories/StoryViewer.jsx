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