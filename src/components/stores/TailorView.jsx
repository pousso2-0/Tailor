import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { categoryService } from '../../services/CategoryService'; // Assurez-vous d'importer votre service
import ArticleList from '../articles/ArticleList'; // Assurez-vous d'importer votre nouveau composant
import CategoryList from '../categories/CategoryList'; // Importer le nouveau composant CategoryList

const TailorView = ({ stores }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showCategories, setShowCategories] = useState(false); // Gestion de l'affichage des catégories
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
    }, []); // Appel API au chargement du composant

    // Fonction pour gérer le changement de catégorie
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setShowCategories(false); // Masquer la liste des catégories après sélection
    };

    // Fonction pour gérer l'affichage des catégories
    const toggleCategoryView = () => {
        setSelectedCategory(null); // Désélectionner toute catégorie
        setShowCategories(!showCategories); // Basculer entre l'affichage des catégories et des articles
    };

    return (
        <div>
            {/* Bouton qui change de texte en fonction de l'état */}
            <Button
                variant="primary"
                onClick={toggleCategoryView}
                className="mb-4"
            >
                {showCategories ? 'Afficher tous les articles' : 'Afficher les catégories'}
            </Button>

            {showCategories ? (
                // Si "Afficher les catégories" est cliqué, afficher seulement les catégories
                <CategoryList
                    categories={categories}
                    onCategorySelect={handleCategoryChange}
                    loading={loading}
                    error={error}
                />
            ) : selectedCategory ? (
                // Si une catégorie est sélectionnée, afficher les articles filtrés par cette catégorie
                <ArticleList stores={stores} selectedCategory={selectedCategory.name} />
            ) : (
                // Par défaut, afficher tous les articles
                <ArticleList stores={stores} />
            )}
        </div>
    );
};

export default TailorView;
