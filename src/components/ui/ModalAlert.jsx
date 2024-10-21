import React from 'react';

const ModalAlert = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div
                className="bg-white rounded-lg shadow-xl w-full max-w-md relative animate-in fade-in duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export const ConfirmationModal = ({
                                      isOpen,
                                      onClose,
                                      title,
                                      message,
                                      onConfirm,
                                      type = 'info'
                                  }) => (
    <ModalAlert isOpen={isOpen} onClose={onClose}>
        <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
                {type === 'destructive' ? (
                    <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                        <path strokeWidth="2" d="M12 8v4m0 4h.01"/>
                    </svg>
                ) : (
                    <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                        <path strokeWidth="2" d="M12 8v4m0 4h.01"/>
                    </svg>
                )}
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            <p className="text-gray-600 mb-6">{message}</p>
            <div className="flex justify-end gap-2">
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    Annuler
                </button>
                <button
                    onClick={() => {
                        onConfirm();
                        onClose();
                    }}
                    className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        type === 'destructive'
                            ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
                            : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                    }`}
                >
                    Confirmer
                </button>
            </div>
        </div>
    </ModalAlert>
);

export const NotificationModal = ({
                                      isOpen,
                                      onClose,
                                      title,
                                      message,
                                      type = 'success'
                                  }) => (
    <ModalAlert isOpen={isOpen} onClose={onClose}>
        <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
                {type === 'error' ? (
                    <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                        <path strokeWidth="2" d="M12 8v4m0 4h.01"/>
                    </svg>
                ) : (
                    <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                        <path strokeWidth="2" d="M12 8l4 4m0 0l-4 4m4-4H8"/>
                    </svg>
                )}
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            <p className="text-gray-600 mb-6">{message}</p>
            <div className="flex justify-end">
                <button
                    onClick={onClose}
                    className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        type === 'error'
                            ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
                            : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                    }`}
                >
                    OK
                </button>
            </div>
        </div>
    </ModalAlert>
);