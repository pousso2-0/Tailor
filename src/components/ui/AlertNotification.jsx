import { Alert, AlertDescription, AlertTitle } from "./Alert";
import { Button } from "./Button"; // Ensure to import your Button component
import { X } from "lucide-react"; // Import the X icon from your icon library

const AlertNotification = ({ message, type, onClose }) => {
    const alertStyles = {
        success: "bg-green-50 text-green-700 border-green-200",
        error: "bg-red-50 text-red-700 border-red-200"
    };

    return (
        <Alert className={`${alertStyles[type]} fixed top-4 right-4 w-96 shadow-lg border`}>
            <AlertTitle className="font-semibold">
                {type === 'success' ? 'Succès!' : 'Erreur!'}
            </AlertTitle>
            <AlertDescription className="mt-1">
                {message}
            </AlertDescription>
            <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2"
                onClick={onClose}
            >
                <X className="h-4 w-4" />
            </Button>
        </Alert>
    );
};

export default AlertNotification;
