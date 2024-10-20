// DropdownMenu.js
import React from 'react';

export const DropdownMenu = ({ children }) => {
    return <div className="relative inline-block text-left">{children}</div>;
};

export const DropdownMenuTrigger = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            {children}
        </button>
    );
};

export const DropdownMenuContent = ({ children, show }) => {
    return (
        <div
            className={`absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${show ? 'block' : 'hidden'}`}
            role="menu"
        >
            <div className="py-1" role="none">
                {children}
            </div>
        </div>
    );
};

export const DropdownMenuItem = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            role="menuitem"
        >
            {children}
        </button>
    );
};
