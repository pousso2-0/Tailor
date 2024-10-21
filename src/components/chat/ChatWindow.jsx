import React from "react";
import { Tab } from "react-bootstrap";
import ConversationHeader from "./conversationHeader";
import MessageList from "./messageList";
import MessageInput from "./messageInput";
import { useUser } from "../../context/UserContext";

const ChatWindow = ({
                        conversation,
                        messages,
                        currentUserId,
                        deleteMessage,
                        sendMessage,
                        isDeleting
                    }) => {

    const {currentUser} = useUser()
    const receiver = conversation.receiver.id === currentUserId ? conversation.sender : conversation.receiver;

    return (
        <Tab.Pane
            eventKey={conversation.id}
            className="card mb-0 fade"
            id={`user-content-${conversation.id}`}
            role="tabpanel"
        >
            <ConversationHeader receiver={receiver} />
            <div className="card-body chat-body bg-body">
                <MessageList
                    messages={messages}
                    currentUserId={currentUserId}
                    receiver={receiver}
                    deleteMessage={deleteMessage}
                    conversationId={conversation.id}
                    isDeleting={isDeleting}
                    currentUser={currentUser}
                />
            </div>
            <MessageInput sendMessage={sendMessage} />
        </Tab.Pane>
    );
};

export default ChatWindow;