import React from 'react';

const ChatStatusItem = ({ status, color }) => {
  return (
    <div className="d-flex align-items-center iq-sub-card border-0">
      <i className={`material-symbols-outlined ${color} md-14`}>circle</i>
      <div className="ms-3">{status}</div>
    </div>
  );
};

export default ChatStatusItem;
