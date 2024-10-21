// Input.js
export const Input = ({ type = "text", className, ...props }) => (
    <input
        type={type}
        className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${className}`}
        {...props}
    />
);
