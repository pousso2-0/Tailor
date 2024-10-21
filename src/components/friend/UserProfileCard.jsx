import React from 'react';
import { Card, Col } from 'react-bootstrap';
import CoverImage from './CoverImage';
import UserProfileDetails from './UserProfileDetails';
import FollowButton from './FollowButton';

const UserProfileCard = ({ user, coverImg, isFollowing, handleFollow }) => {
  return (
    <Col md={6}>
      <Card className="card-block card-stretch card-height">
        <Card.Body className="profile-page p-0">
          <div className="profile-header-image">
            <CoverImage coverSrc={coverImg} />
            <div className="profile-info p-4">
              <div className="user-detail">
                <div className="d-flex flex-wrap justify-content-between align-items-start">
                  <UserProfileDetails
                    userImg={user.profilePicture}
                    userName={user.name}
                    userHandle={user.handle}
                    userBio={user.bio}
                  />
                  <FollowButton isFollowing={isFollowing} onClick={handleFollow} />
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserProfileCard;
