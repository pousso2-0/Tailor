// Dialog.js
import React from 'react';

export const Dialog = ({ children, open, onClose }) => {
    return (
        <>
            {open && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export const DialogTrigger = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            {children}
        </button>
    );
};

export const DialogContent = ({ children }) => {
    return <div className="p-6">{children}</div>;
};
