import React from 'react';
import { Button } from './Button'; // Assurez-vous d'importer votre composant Button

const Modal = ({ title, onClose, onConfirm, children }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg w-1/3">
                <h2 className="text-lg font-bold">{title}</h2>
                <div className="mt-4">{children}</div>
                <div className="mt-4 flex justify-end">
                    <Button variant="outline" onClick={onClose}>Annuler</Button>
                    <Button className="ml-2" onClick={onConfirm}>Confirmer</Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
