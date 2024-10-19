import React, { useEffect, useState, useCallback } from "react";
import { Tab } from "react-bootstrap";
import Scrollbar from "smooth-scrollbar";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import { messageService } from "../../services/MessageService";
import { userService } from '../../services/userService';

const ChatLayout = () => {
  const [error, setError] = useState(null);
  const [active, setActive] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [messages, setMessages] = useState({});
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    Scrollbar.init(document.querySelector(".data-scrollbar"));
    loadConversations();
    loadCurrentUser();
  }, []);

  const loadCurrentUser = async () => {
    try {
      const response = await userService.getCurrentUser();
      setCurrentUserId(response.data.id);
    } catch (error) {
      console.error("Error loading current user:", error);
    }
  };

  const loadConversations = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await messageService.getUserConversations({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setConversations(response.data);
    } catch (error) {
      console.error("Error loading conversations:", error);
    }
  };

  const loadMessages = async (conversationId) => {
    try {
      const response = await messageService.getConversationMessages(conversationId);
      setMessages(prevMessages => ({
        ...prevMessages,
        [conversationId]: response.data
      }));
      setCurrentConversation(conversationId);
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  };

  const deleteMessage = useCallback(async (messageId, conversationId) => {
    setMessages(prevMessages => ({
      ...prevMessages,
      [conversationId]: prevMessages[conversationId].filter(msg => msg.id !== messageId)
    }));

    try {
      setIsDeleting(true);
      await messageService.deleteMessage(messageId);
    } catch (error) {
      console.error("Erreur lors de la suppression du message:", error);
      setError("Erreur lors de la suppression du message. Veuillez réessayer.");
      loadMessages(conversationId);
    } finally {
      setIsDeleting(false);
    }
  }, []);

  const sendMessage = async (newMessage) => {
    if (newMessage.trim() && currentConversation) {
      const currentMessages = messages[currentConversation] || [];
      const receiverId = currentMessages.find(msg => msg.senderId !== currentUserId)?.senderId;

      if (receiverId && receiverId !== currentUserId) {
        try {
          const response = await messageService.sendMessage({
            senderId: currentUserId,
            receiverId: receiverId,
            content: newMessage,
            conversationId: currentConversation
          });

          setMessages(prevMessages => ({
            ...prevMessages,
            [currentConversation]: [
              ...(prevMessages[currentConversation] || []),
              {
                id: response.data.id,
                content: newMessage,
                senderId: currentUserId,
                createdAt: new Date().toISOString(),
              },
            ],
          }));

          const chatBody = document.querySelector('.chat-body');
          chatBody.scrollTop = chatBody.scrollHeight;
        } catch (error) {
          console.error("Error sending message:", error);
        }
      } else {
        console.warn("L'utilisateur connecté ne peut pas être l'interlocuteur.");
      }
    }
  };

  return (
    <Tab.Container id="left-tabs-example" activeKey={active}>
      <Sidebar
        conversations={conversations}
        active={active}
        setActive={setActive}
        loadMessages={loadMessages}
        currentUserId={currentUserId}
      />
      <main className="main-content">
        <div className="container-fluid content-inner p-0" id="page_layout">
          <Tab.Content id="myTabContent">
            {conversations.map((conversation) => (
              <ChatWindow
                key={conversation.id}
                conversation={conversation}
                messages={messages[conversation.id] || []}
                currentUserId={currentUserId}
                deleteMessage={deleteMessage}
                sendMessage={sendMessage}
                isDeleting={isDeleting}
              />
            ))}
          </Tab.Content>
        </div>
      </main>
    </Tab.Container>
  );
};

export default ChatLayout;