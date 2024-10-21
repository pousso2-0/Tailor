import React from 'react';

const CoverImage = ({ coverSrc }) => {
  return (
    <div className="cover-container">
      <img
        loading="lazy"
        src={coverSrc}
        alt="profile-bg"
        className="rounded img-fluid w-100"
      />
    </div>
  );
};

export default CoverImage;
