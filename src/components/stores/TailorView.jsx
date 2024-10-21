import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { categoryService } from '../../services/CategoryService';
import ArticleList from '../articles/ArticleList';
import CategoryList from '../categories/CategoryList';
import OrderForm from '../orders/OrderForm';

const TailorView = ({ stores }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showCategories, setShowCategories] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantities, setQuantities] = useState({}); // Un objet pour stocker les quantités par article


    // Nouveaux états pour gérer le modal et l'article sélectionné
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [selectedStore, setSelectedStore] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesResponse = await categoryService.getAllCategories();
                setCategories(categoriesResponse.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Erreur lors du chargement des catégories.');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setShowCategories(false);
    };

    const toggleCategoryView = () => {
        setSelectedCategory(null);
        setShowCategories(!showCategories);
    };

    // Nouvelle fonction pour gérer le clic sur un article
    const handleArticleClick = (article, store) => {
        setSelectedArticle(article);
        setSelectedStore(store);
        setShowOrderModal(true);
    };

    // Fonction pour gérer la fermeture du modal
    const handleCloseModal = () => {
        setShowOrderModal(false);
        setSelectedArticle(null);
        setSelectedStore(null);
    };

    // Initialiser les quantités d'articles au chargement
    useEffect(() => {
        const initialQuantities = {};
        stores.forEach(store => {
            store.articles.forEach(article => {
                initialQuantities[article.id] = article.stockCount || 0; // Initialiser à 0 si aucune quantité n'est disponible
                console.log( article.stockCount)
            });
        });
        setQuantities(initialQuantities);
    }, [stores]);


// Mettre à jour les quantités après une commande
    const handleOrderComplete = (response) => {
        const orderedArticleId = response.articleId;
        const orderedQuantity = response.quantity;
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [orderedArticleId]: prevQuantities[orderedArticleId] - orderedQuantity,
        }));
        handleCloseModal();
    };


    return (
        <div>
            <Button
                variant="primary"
                onClick={toggleCategoryView}
                className="mb-4"
            >
                {showCategories ? 'Afficher tous les articles' : 'Afficher les catégories'}
            </Button>

            {showCategories ? (
                <CategoryList
                    categories={categories}
                    onCategorySelect={handleCategoryChange}
                    loading={loading}
                    error={error}
                />
            ) : selectedCategory ? (
                <ArticleList
                    stores={stores}
                    selectedCategory={selectedCategory.name}
                    onArticleClick={handleArticleClick}
                    quantities={quantities} // Ajout de la quantité à passer

                />
            ) : (
                <ArticleList
                    stores={stores}
                    onArticleClick={handleArticleClick}
                />
            )}

            {/* Modal pour le formulaire de commande */}
            <Modal
                show={showOrderModal}
                onHide={handleCloseModal}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Commander un article</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedArticle && selectedStore && (
                        <OrderForm
                            article={selectedArticle}
                            storeId={selectedStore.id}
                            vendorId={selectedStore.user?.id}
                            onOrderComplete={handleOrderComplete}
                        />
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default TailorView;