import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/stories.scss';

const StoryThumbnail = ({ user, onClick }) => (
    <div className="story-thumbnail" onClick={onClick}>
        <div className="thumbnail-container">
            <img
                src={user.avatar}
                alt={user.name}
            />
        </div>
        <span className="thumbnail-name">
      {user.name}
    </span>
    </div>
);

StoryThumbnail.propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default StoryThumbnail;