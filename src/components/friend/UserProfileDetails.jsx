import React from 'react';
import { Link } from 'react-router-dom';

const UserProfileDetails = ({ photo, name, handle, bio }) => {
  return (
    <div className="profile-detail d-flex">
      <div className="profile-img pe-lg-4">
        <img
          loading="lazy"
          src={photo}
          alt="profile-img"
          className="avatar-130 img-fluid"
        />
      </div>
      <div className="user-data-block mt-md-0 mt-2">
        <h4>
          <Link to="/dashboard/app/friend-profile">{name}</Link>
        </h4>
        <h6>@{handle}</h6>
        <p className="mb-2 mb-lg-0">{bio}</p>
      </div>
    </div>
  );
};

export default UserProfileDetails;
