import React, { useState } from 'react';

const MessageInput = ({ sendMessage }) => {
    const [newMessage, setNewMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(newMessage);
        setNewMessage("");
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="card-footer px-3 py-3 border-top rounded-0">
            <form className="d-flex align-items-center" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control me-3"
                    placeholder="Type your message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button type="submit" className="btn btn-primary d-flex align-items-center">
                    <svg
                        className="icon-20"
                        width="18"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.8325 6.67463L8.10904 12.4592L1.59944 8.38767C0.66675 7.80414 0.860765 6.38744 1.91572 6.07893L17.3712 1.55277C18.3373 1.26963 19.2326 2.17283 18.9456 3.142L14.3731 18.5868C14.0598 19.6432 12.6512 19.832 12.0732 18.8953L8.10601 12.4602"
                            stroke="currentcolor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="d-none d-lg-block ms-1">Send</span>
                </button>
            </form>
        </div>
    );
};

export default MessageInput;