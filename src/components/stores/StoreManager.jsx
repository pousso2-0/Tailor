import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "../ui/Card";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Label } from "../ui/Label";
import { Store, MapPin, Phone, Mail } from "lucide-react";
import Textarea from "../ui/Textarea";
import { Alert, AlertDescription } from "../ui/Alert";
import { articleService } from "../../services/articleService";

const StoreManager = ({ onClose }) => {
    const [storeData, setStoreData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        description: ''
    });
    const [alert, setAlert] = useState(null);

    const handleSubmit = async () => {
        if (!storeData.name.trim() || !storeData.description.trim()) {
            setAlert({
                type: 'error',
                message: 'Le nom et la description sont requis'
            });
            return;
        }

        // Préparez les données à soumettre
        const storeToSubmit = {
            name: storeData.name,
            description: storeData.description,
        };


        try {
            // Soumettez les données
            await articleService.createStore(storeToSubmit);
            setAlert({
                type: 'success',
                message: 'Magasin ajouté avec succès!'
            });
        } catch (error) {
            setAlert({
                type: 'error',
                message: 'Erreur lors de l\'ajout du magasin.'
            });
            console.error('Erreur lors de l\'ajout du magasin:', error);
        }

        // Fermez le dialogue après un délai si vous le souhaitez
        setTimeout(() => {
            if (onClose) onClose();
        }, 2000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStoreData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <Card className="w-full max-w-md rounded-lg shadow-lg">
                <CardHeader className="bg-primary text-white rounded-t-lg p-4">
                    <div className="flex items-center space-x-2">
                        <Store className="h-6 w-6"/>
                        <h2 className="text-xl font-bold">Nouveau Magasin</h2>
                    </div>
                </CardHeader>

                <CardContent className="p-6 space-y-6">
                    {alert && (
                        <Alert className={`${
                            alert.type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                        } mb-4 p-3 border rounded-md shadow`}>
                            <AlertDescription>
                                {alert.message}
                            </AlertDescription>
                        </Alert>
                    )}

                    <div className="space-y-4">
                        <div>
                            <Label>Nom du magasin</Label>
                            <Input
                                name="name"
                                placeholder="ex: Ma Boutique"
                                value={storeData.name}
                                onChange={handleChange}
                                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Textarea
                                name="description"
                                placeholder="Description de votre magasin..."
                                value={storeData.description}
                                onChange={handleChange}
                                rows={4}
                                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="bg-gray-50 flex justify-end space-x-4 p-4 rounded-b-lg">
                    <Button variant="outline" onClick={onClose} className="border-gray-300 hover:bg-gray-100">
                        Annuler
                    </Button>
                    <Button
                        className="bg-primary text-white transition duration-200 ease-in-out transform hover:scale-105"
                        onClick={handleSubmit}
                    >
                        Créer le magasin
                    </Button>
                </CardFooter>
            </Card>
        </div>

    );
};

export default StoreManager;
