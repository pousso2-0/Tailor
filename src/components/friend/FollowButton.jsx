import React from 'react';

const FollowButton = ({ isFollowing, onClick }) => {
  return (
    <button type="submit" className="btn btn-primary" onClick={onClick}>
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  );
};

export default FollowButton;
