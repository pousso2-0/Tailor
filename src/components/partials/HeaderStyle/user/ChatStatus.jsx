import React from 'react';
import ChatStatusItem from './ChatStatusItem'; // Importer le composant ChatStatusItem

const ChatStatus = () => {
  return (
    <>
      <ChatStatusItem status="Online" color="text-success" />
      <ChatStatusItem status="Away" color="text-warning" />
      <ChatStatusItem status="Disconnected" color="text-danger" />
      <ChatStatusItem status="Invisible" color="text-gray" />
    </>
  );
};

export default ChatStatus;
