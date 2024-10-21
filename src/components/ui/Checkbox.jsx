import React from 'react';

export const Checkbox = ({ id, checked, onCheckedChange, className }) => {
    return (
        <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheckedChange(e.target.checked)}
            className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ${className}`}
        />
    );
};
