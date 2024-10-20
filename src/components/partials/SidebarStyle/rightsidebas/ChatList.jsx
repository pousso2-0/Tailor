import React from "react";
import { Nav, Tab } from "react-bootstrap";

const ChatList = ({ conversations, handleConversationClick, getOtherUser }) => {
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  return (
      <Tab.Container defaultActiveKey="first">
        <Nav className="nav-tabs right-sidebar-tabs" role="tablist">
          <Nav.Link eventKey="first" className="text-center">
            <span className="h6 font-size-14">Conversations</span>
          </Nav.Link>
        </Nav>
        <div className="media-height" data-scrollbar="init">
          <Tab.Content className="right-sidebar-tabs-content">
            <Tab.Pane eventKey="first">
              {conversations.map((conversation) => {
                const otherUser = getOtherUser(conversation);
                return (
                    <div
                        key={conversation.id}
                        className="d-flex align-items-center justify-content-between chat-tabs-content border-bottom"
                        onClick={() => handleConversationClick(conversation)}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="iq-profile-avatar status-online">
                          <img
                              className="rounded-circle avatar-50"
                              src={otherUser?.profilePicture}
                              alt={otherUser?.name}
                          />
                        </div>
                        <div>
                          <h6 className="font-size-14 mb-0 fw-semibold">
                            {otherUser?.name}
                          </h6>
                          <p className="mb-0 font-size-12 fw-medium">
                            {conversation.lastMessage}
                          </p>
                        </div>
                      </div>
                      <span className="font-size-12 fw-medium">
                                        {formatTime(conversation.updatedAt)}
                                    </span>
                    </div>
                );
              })}
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
  );
};

export default ChatList;