export const Button = ({ children, variant = "default", className, ...props }) => {
    const variants = {
        default: "bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50",
        ghost: "text-gray-700 hover:bg-gray-100 shadow-none",
        success: "bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-green-500 focus:ring-opacity-50",
        cancel: "bg-gray-500 hover:bg-gray-600 text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
    };

    return (
        <button
            className={`px-4 py-2 rounded-lg transition-all duration-200 ease-in-out ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
