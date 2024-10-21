import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const UnauthenticatedError = () => (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <Card className="text-center shadow-sm" style={{ maxWidth: '400px' }}>
            <Card.Body>
                <Lock className="text-danger mb-3" size={40} />
                <Card.Title className="text-danger">Accès Refusé</Card.Title>
                <Link to="/auth/sign-in">
                    <Card.Text>
                        Veuillez vous connecter pour accéder à cette ressource.
                        ici
                    </Card.Text>
                </Link>
            </Card.Body>
        </Card>
    </Container>
);

export default UnauthenticatedError;