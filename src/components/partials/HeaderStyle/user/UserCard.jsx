import React from 'react';
import { Card } from 'react-bootstrap';
import UserMenuItem from './UserMenuItem'; // Importer le composant UserMenuItem
import ChatSettings from './ChatSettings'; // Importer le composant ChatSettings
import ChatStatus from './ChatStatus'; // Importer le composant ChatStatus

const UserCard = ({ name }) => {
  return (
    <Card className="shadow-none m-0">
      <Card.Header>
        <div className="header-title">
          <h5 className="mb-0">Hello {name}</h5>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        <UserMenuItem to="/dashboard/app/profile" icon="line_style" text="My Profile" />

        <UserMenuItem to="/dashboard/app/user-profile-edit" icon="edit_note" text="Edit Profile" />
          <UserMenuItem to="/dashboard/app/user-account-setting" icon="manage_accounts" text="Account Settings" />
        <UserMenuItem to="/dashboard/app/user-privacy-setting" icon="lock" text="Privacy Settings" />
        <UserMenuItem to="/auth/sign-in" icon="login" text="Sign out" />
        {/* <ChatSettings />
        <ChatStatus /> */}
      </Card.Body>
    </Card>
  );
};

export default UserCard;
