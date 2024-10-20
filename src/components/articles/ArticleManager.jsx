import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "../ui/Card";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Label } from "../ui/Label";
import { PlusCircle, Package, DollarSign, BarChart3 } from "lucide-react";
import AlertNotification from "../ui/AlertNotification";
import ImageUploader from "../ImageUploader";
import { articleService } from "../../services/articleService";
import { categoryService } from "../../services/CategoryService"; // Import du service de catégories
import CategorySelector from '../categories/CategorySelector';

const ArticleManager = ({ selectedStore, onClose, onAddArticle }) => {
    const [articleData, setArticleData] = useState({
        name: '',
        description: '',
        price: 0,
        stockCount: 0,
        categoryId: null, // Modifié pour une seule catégorie
        image: null, // Ajoutez cet attribut pour l'image
    });
    const [categories, setCategories] = useState([]);
    const [articleErrors, setArticleErrors] = useState({});
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await categoryService.getAllCategories();
                setCategories(fetchedCategories.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des catégories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArticleData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCategorySelected = (categoryId) => {
        setArticleData(prevData => ({
            ...prevData,
            categoryId, // Stocke l'ID de la catégorie sélectionnée
        }));
    };

    const handleImageChange = (imageData, file) => {
        setArticleData(prevData => ({
            ...prevData,
            image: file, // Stockez le fichier d'image
        }));
    };

    const handleImageRemove = () => {
        setArticleData(prevData => ({
            ...prevData,
            image: null, // Réinitialisez l'image
        }));
    };

    const handleAddArticle = async () => {
        // Vérifiez si selectedStore est défini
        if (!selectedStore || !selectedStore.id) {
            console.error("selectedStore n'est pas défini ou l'ID est manquant");
            setAlert({
                type: 'error',
                message: 'Erreur : le magasin n\'est pas sélectionné.',
            });
            return;
        }

        const errors = {};

        if (!articleData.name.trim()) {
            errors.name = 'Le nom de l’article est requis';
        }
        if (!articleData.description.trim()) {
            errors.description = 'La description est requise';
        }
        if (articleData.price <= 0) {
            errors.price = 'Le prix doit être supérieur à 0';
        }
        if (articleData.stockCount < 0) {
            errors.stockCount = 'Le stock ne peut pas être négatif';
        }
        if (!articleData.categoryId) {
            errors.category = 'Veuillez sélectionner une catégorie';
        }
        if (!articleData.image) {
            errors.image = 'Veuillez télécharger une image';
        }

        if (Object.keys(errors).length > 0) {
            setArticleErrors(errors);
            return;
        }

        try {
            const response = await articleService.addArticleToStore(selectedStore.id, articleData); // Appel avec l'ID du magasin

            setAlert({
                type: 'success',
                message: 'Article ajouté avec succès !'
            });

            // Appelle la fonction pour ajouter l'article à la liste
            onAddArticle(response.data);
            onClose();
            console.log('Article fraîchement créé', response)

            // Réinitialiser les données de l'article
            setArticleData({
                name: '',
                description: '',
                price: 0,
                stockCount: 0,
                categoryId: null, // Réinitialisez la catégorie
                image: null, // Réinitialisez l'image
            });
            setArticleErrors({});
        } catch (error) {
            console.error('Erreur lors de l’ajout de l’article:', error);
            setAlert({
                type: 'error',
                message: 'Échec de l’ajout de l’article.'
            });
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            {alert && (
                <AlertNotification
                    type={alert.type}
                    message={alert.message}
                    onClose={() => setAlert(null)}
                />
            )}

            <Card className="w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r bg-primary text-white p-6">
                    <div className="flex items-center space-x-2">
                        <PlusCircle className="h-6 w-6" />
                        <h2 className="text-2xl font-bold">Ajouter un Nouvel Article</h2>
                    </div>
                </CardHeader>

                <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label className="flex items-center text-sm font-medium text-gray-600">
                                <Package className="h-4 w-4 mr-2"/>
                                Nom de l'article
                            </Label>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Entrez le nom de l'article"
                                value={articleData.name}
                                onChange={handleChange}
                                className="w-full p-2"
                            />
                            {articleErrors.name && <p className="text-red-500 text-sm">{articleErrors.name}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label className="flex items-center text-sm font-medium text-gray-600">
                                <Package className="h-4 w-4 mr-2"/>
                                Description
                            </Label>
                            <Input
                                type="text"
                                name="description"
                                placeholder="Entrez la description de l'article"
                                value={articleData.description}
                                onChange={handleChange}
                                className="w-full p-2"
                            />
                            {articleErrors.description &&
                                <p className="text-red-500 text-sm">{articleErrors.description}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="flex items-center text-sm font-medium text-gray-600">
                                    <DollarSign className="h-4 w-4 mr-2"/>
                                    Prix
                                </Label>
                                <Input
                                    type="number"
                                    name="price"
                                    placeholder="Entrez le prix"
                                    value={articleData.price}
                                    onChange={handleChange}
                                    className="w-full p-2"
                                />
                                {articleErrors.price && <p className="text-red-500 text-sm">{articleErrors.price}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label className="flex items-center text-sm font-medium text-gray-600">
                                    <BarChart3 className="h-4 w-4 mr-2"/>
                                    Quantité en Stock
                                </Label>
                                <Input
                                    type="number"
                                    name="stockCount"
                                    placeholder="Entrez la quantité en stock"
                                    value={articleData.stockCount}
                                    onChange={handleChange}
                                    className="w-full p-2"
                                />
                                {articleErrors.stockCount &&
                                    <p className="text-red-500 text-sm">{articleErrors.stockCount}</p>}
                            </div>
                        </div>


                        <div className="bg-gray-50 rounded-lg p-4">
                            <ImageUploader
                                onImageChange={handleImageChange}
                                onImageRemove={handleImageRemove}
                                previewUrl={articleData.image ? URL.createObjectURL(articleData.image) : null}
                                error={articleErrors.image}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="flex items-center text-sm font-medium text-gray-600">
                                Catégorie
                            </Label>
                            <CategorySelector
                                categories={categories}
                                onCategorySelected={handleCategorySelected}
                            />
                            {articleErrors.category && <p className="text-red-500 text-sm">{articleErrors.category}</p>}
                        </div>

                    </div>
                </CardContent>

                <CardFooter className="flex justify-end p-6">
                    <Button onClick={onClose} className="mr-4">Annuler</Button>
                    <Button onClick={handleAddArticle} className="bg-primary text-white">Ajouter</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ArticleManager;
