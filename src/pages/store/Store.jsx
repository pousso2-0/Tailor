// src/pages/Store.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { articleService } from '../../services/articleService';
import {VendorView} from '../../components/stores/VendorView'; // Importez le nouveau composant
import TailorView from '../../components/stores/TailorView';


const Store = () => {
    const { currentUser, loading } = useUser();
    const [stores, setStores] = useState([]);
    const [selectedStore, setSelectedStore] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!loading && currentUser) {
            fetchStores();
        }
    }, [loading, currentUser]);

    const fetchStores = async () => {
        try {
            setIsLoading(true);
            setError(null);

            if (currentUser.type === 'VENDEUR') {
                const userStores = await articleService.getStoresByUser();
                console.log('Store data:', userStores);
                setStores(userStores.data);
                setSelectedStore(userStores.data[0]);
            } else {
                const storesData = await articleService.getAllStores();
                console.log('All stores:', storesData);
                setStores(storesData.data);
            }
        } catch (error) {
            console.error('Error fetching stores:', error);
            setError('Failed to load store data');
        } finally {
            setIsLoading(false);
        }
    };

    const handleStoreSelect = (store) => {
        setSelectedStore(store);
    };


    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div id='content-page' className='content-inner'>
            <Container>
                <Row>
                    <Col lg="12">
                        {currentUser?.type === 'VENDEUR' ? (
                            <VendorView
                                stores={stores}
                            />
                        ) : (
                            <TailorView stores={stores} />
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

// Enchaîner les deux HOCs : `withAuth` vérifie d'abord l'authentification, puis `withRole` vérifie le rôle
export default Store;
