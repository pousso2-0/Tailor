import React from 'react';

const followStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '0.25rem', 
};

const FollowSection = ({ isFollowing, handleFollowToggle, loading, post }) => {
  return (
    <div style={followStyle}>
      <button
        className={`btn ${isFollowing ? 'btn-secondary' : 'btn-primary'}`}
        onClick={() => handleFollowToggle(post)} 
        disabled={loading} 
      >
        {loading ? 'Chargement...' : isFollowing ? 'Désabonner' : 'Suivre'} 
      </button>
    </div>
  );
};

export default FollowSection;
