import React from 'react';
import { Link } from 'react-router-dom';

const UserMenuItem = ({ to, icon, text }) => {
  return (
    <div className="d-flex align-items-center iq-sub-card border-0">
      <span className="material-symbols-outlined">{icon}</span>
      <div className="ms-3">
        <Link to={to} className="mb-0 h6">
          {text}
        </Link>
      </div>
    </div>
  );
};

export default UserMenuItem;
