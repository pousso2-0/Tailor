import React, { useEffect, useState } from "react";
import { Button, Card, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchBar from "./rightsidebas/SearchBar";
// import ChatTabs from "./rightsidebas/ChatTabs";
import ChatList from "./rightsidebas/ChatList";
import ChatPopupModal from "./rightsidebas/ChatPopupModal";
import { userService } from "../../../services/userService";
import { messageService } from "../../../services/MessageService";

const Rightsidebar = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
      loadConversations();
      loadCurrentUser();
  }, []);

  const loadConversations = async () => {
      try {
          const response = await messageService.getUserConversations();
          setConversations(response.data);
      } catch (error) {
          console.error("Error loading conversations:", error);
      }
  };

  const loadCurrentUser = async () => {
      try {
          const response = await userService.getCurrentUser();
          setCurrentUser(response.data);
      } catch (error) {
          console.error("Error loading current user:", error);
      }
  };

  const loadMessages = async (conversationId) => {
      try {
          const response = await messageService.getConversationMessages(conversationId);
          setMessages(prevMessages => ({
              ...prevMessages,
              [conversationId]: response.data
          }));
      } catch (error) {
          console.error("Error loading messages:", error);
      }
  };

  const handleConversationClick = (conversation) => {
      setSelectedConversation(conversation);
      loadMessages(conversation.id);
  };

  const handleSendMessage = async (newMessage) => {
      if (!newMessage.trim() || !selectedConversation) return;

      const otherUser = getOtherUser(selectedConversation);

      try {
          const response = await messageService.sendMessage({
              senderId: currentUser.id,
              receiverId: otherUser.id,
              content: newMessage,
              conversationId: selectedConversation.id
          });

          setMessages(prevMessages => ({
              ...prevMessages,
              [selectedConversation.id]: [
                  ...(prevMessages[selectedConversation.id] || []),
                  {
                      id: response.data.id,
                      content: newMessage,
                      senderId: currentUser.id,
                      createdAt: new Date().toISOString(),
                  },
              ],
          }));

          // Scroll to bottom of chat
          const chatBody = document.querySelector('.chat-popup-body');
          if (chatBody) {
              chatBody.scrollTop = chatBody.scrollHeight;
          }
      } catch (error) {
          console.error("Error sending message:", error);
      }
  };

  const minirightsidebar = () => {
      document.getElementById("rightSidebar").classList.toggle("right-sidebar");
      document.body.classList.toggle("right-sidebar-close");
  };

  const getOtherUser = (conversation) => {
      if (!currentUser) return null;
      return currentUser.id === conversation.sender.id ? conversation.receiver : conversation.sender;
  };

  const filteredConversations = conversations.filter(conversation => {
      const otherUser = getOtherUser(conversation);
      return otherUser && otherUser.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
      <div className="right-sidebar-mini" id="rightSidebar">
          <div className="right-sidebar-panel p-0">
              <Card className="shadow-none m-0 h-100">
                  <Card.Body className="px-0 pt-0">
                      <div className="p-4">
                          <h6 className="fw-semibold m-0">Chats</h6>
                          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                      </div>
                      <ChatList
                          conversations={filteredConversations}
                          handleConversationClick={handleConversationClick}
                          getOtherUser={getOtherUser}
                      />
                      {selectedConversation && (
                          <ChatPopupModal
                              selectedConversation={selectedConversation}
                              messages={messages[selectedConversation.id] || []}
                              currentUser={currentUser}
                              getOtherUser={getOtherUser}
                              handleSendMessage={handleSendMessage}
                              onClose={() => setSelectedConversation(null)}
                          />
                      )}
                      <div className="conversion-button">
                          <Button
                              onClick={() => navigate('/chat/index')}
                              className="btn btn-primary w-100 py-3 d-block rounded-0"
                          >
                              View All Conversations
                          </Button>
                      </div>
                      <div
                          className="right-sidebar-toggle bg-primary text-white mt-3 d-flex"
                          onClick={minirightsidebar}
                      >
                          <span className="material-symbols-outlined">chat</span>
                      </div>
                  </Card.Body>
              </Card>
          </div>
      </div>
  );
};

export default Rightsidebar;
