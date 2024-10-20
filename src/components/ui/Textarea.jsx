import React from 'react';

const Textarea = React.forwardRef(({ value, onChange, placeholder, className, rows = 4, ...props }, ref) => {
    return (
        <textarea
            ref={ref}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`border rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            rows={rows}
            {...props}
        />
    );
});

Textarea.displayName = 'Textarea'; // Pour l'affichage dans les outils de développement
export default Textarea;
