import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "../ui/Card";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Label } from "../ui/Label";
import { Alert, AlertDescription } from "../ui/Alert";
import { categoryService } from "../../services/CategoryService";
import ImageUploader from "../ImageUploader";
import {Tag} from "lucide-react"; // Importer le composant ImageUploader

const CategoryManager = ({ onClose }) => {
    const [categoryData, setCategoryData] = useState({
        name: '',
        imageUrl: null
    });
    const [previewUrl, setPreviewUrl] = useState(null);
    const [alert, setAlert] = useState(null);
    const [errors, setErrors] = useState({
        name: '',
        imageUrl: ''
    });

    const handleImageChange = (imageUrl, file) => {
        setPreviewUrl(imageUrl);
        setCategoryData(prev => ({ ...prev, imageUrl: file }));
        setErrors(prev => ({ ...prev, imageUrl: '' })); // Clear error if any
    };

    const handleImageRemove = () => {
        setPreviewUrl(null);
        setCategoryData(prev => ({ ...prev, imageUrl: null }));
        setErrors(prev => ({ ...prev, imageUrl: '' })); // Clear error if any
    };

    const handleSubmit = async () => {
        let hasError = false;
        const newErrors = { name: '', imageUrl: '' };

        // Validate name
        if (!categoryData.name.trim()) {
            newErrors.name = 'Le nom de la catégorie est requis';
            hasError = true;
        }

        // Validate image
        if (!categoryData.imageUrl) {
            newErrors.imageUrl = 'Une image est requise';
            hasError = true;
        }

        setErrors(newErrors);

        if (hasError) return;

        try {
            const response = await categoryService.createCategory(categoryData);
            const createdCategory = response.data;
            setCategoryData([...categoryData, createdCategory]);

            setAlert({
                type: 'success',
                message: 'Catégorie ajoutée avec succès!'
            });

            setTimeout(() => {
                if (onClose) onClose();
            }, 2000);
        } catch (error) {
            // Handle backend error and show under relevant fields
            if (error.response && error.response.data) {
                const backendErrors = error.response.data.errors || {};
                setErrors(backendErrors);
                setAlert({
                    type: 'error',
                    message: 'Une erreur est survenue lors de la soumission'
                });
            }
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        <Card className="w-full max-w-md">
            <CardHeader className="bg-primary text-white">
                <div className="flex items-center space-x-2">
                    <Tag className="h-6 w-6" />
                    <h2 className="text-xl font-bold">Nouvelle Catégorie</h2>
                </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
                {alert && (
                    <Alert className={`${
                        alert.type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    } mb-4`}>
                        <AlertDescription>
                            {alert.message}
                        </AlertDescription>
                    </Alert>
                )}

                <div className="space-y-2">
                    <Label>Nom de la catégorie</Label>
                    <Input
                        placeholder="ex: Électronique"
                        value={categoryData.name}
                        onChange={(e) => {
                            setCategoryData(prev => ({ ...prev, name: e.target.value }));
                            setErrors(prev => ({ ...prev, name: '' })); // Clear error if any
                        }}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                </div>

                <ImageUploader
                    onImageChange={handleImageChange}
                    onImageRemove={handleImageRemove}
                    previewUrl={previewUrl}
                    error={errors.imageUrl}
                />
            </CardContent>

            <CardFooter className="bg-gray-50 flex justify-end space-x-4 p-4">
                <Button variant="outline" onClick={onClose}>
                    Annuler
                </Button>
                <Button
                    className="bg-primary hover:bg-primary text-white"
                    onClick={handleSubmit}
                >
                    Ajouter la catégorie
                </Button>
            </CardFooter>
        </Card>

        </div>
    );
};

export default CategoryManager;
