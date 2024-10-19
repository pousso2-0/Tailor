import React from 'react';
import { Alert } from 'react-bootstrap';
import { Lock } from 'lucide-react';

const UnauthorizedError = () => (
    <Alert variant="warning" className="m-3">
        <Alert.Heading className="d-flex align-items-center">
            <Lock className="me-2" size={20} /> Accès Non Autorisé
        </Alert.Heading>
        <p>
            Désolé, vous n'avez pas les permissions nécessaires pour accéder à cette section.
        </p>
    </Alert>
);

export default UnauthorizedError;