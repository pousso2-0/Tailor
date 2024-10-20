import React, { useState } from 'react';
import { Button } from "../ui/Button";
import { Label } from "../ui/Label";
import {PlusCircle, Tag} from "lucide-react";
import { Checkbox } from "../ui/Checkbox";
import CategoryManager from './CategoryManager';

const CategorySelector = ({ categories, onCategorySelected }) => {
    const [selectedId, setSelectedId] = useState(null); // Une seule sélection possible
    const [showCategoryManager, setShowCategoryManager] = useState(false);

    const handleCheckboxChange = (categoryId) => {
        const newSelectedId = selectedId === categoryId ? null : categoryId;
        setSelectedId(newSelectedId);
        onCategorySelected(newSelectedId);
    };

    const handleAddCategorySuccess = (newCategory) => {
        // Vous pouvez gérer cela si nécessaire, par exemple, mettre à jour l'état
    };

    return (
        <div className="space-y-4">
            {showCategoryManager && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <CategoryManager
                        onClose={() => setShowCategoryManager(false)}
                        onSuccess={handleAddCategorySuccess}
                    />
                </div>
            )}

            <div className="flex items-center justify-between">
                <Label className="flex items-center text-sm font-medium text-gray-600">
                    <Tag className="h-4 w-4 mr-2" />
                    Catégories
                </Label>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowCategoryManager(true)}
                    className="text-blue-600 hover:text-blue-700"
                >
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Nouvelle catégorie
                </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {categories.map(category => (
                    <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                            id={`category-${category.id}`}
                            checked={selectedId === category.id}
                            onCheckedChange={() => handleCheckboxChange(category.id)}
                        />
                        <label
                            htmlFor={`category-${category.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            {category.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySelector;
