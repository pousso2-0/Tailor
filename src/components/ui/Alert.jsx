// Alert.js
export const Alert = ({ children, className }) => (
    <div className={`p-4 rounded-lg shadow ${className}`}>{children}</div>
);

export const AlertDescription = ({ children }) => (
    <p className="text-sm">{children}</p>
);

// Nouveau composant AlertTitle
export const AlertTitle = ({ children }) => (
    <h4 className="font-bold text-lg">{children}</h4>
);
