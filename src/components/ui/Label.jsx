// Label.js
export const Label = ({ children, className }) => (
    <label className={`block text-sm font-medium ${className}`}>{children}</label>
);
