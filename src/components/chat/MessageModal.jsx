import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MessageModal = ({ show, onClose, onSend, messageContent, setMessageContent, userName, theme }) => {
    // Définir les classes de couleur en fonction du thème
    const modalHeaderClass = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black';
    const buttonClass = theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-500 text-white hover:bg-blue-400';

    return (
        <Modal show={show} onHide={onClose} centered className="rounded-lg shadow-lg">
            <Modal.Header closeButton className={`${modalHeaderClass} border-b-2 border-gray-300`}>
                <Modal.Title className="text-lg font-semibold">Envoyer un message à {userName}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
                <textarea
                    className="w-full h-32 resize-none border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Écrire votre message ici..."
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer className="flex justify-between">
                <Button variant="secondary" onClick={onClose} className="mr-2">
                    Fermer
                </Button>
                <Button onClick={onSend} className={`px-4 py-2 rounded-md transition duration-200 ${buttonClass}`}>
                    Envoyer
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MessageModal;
