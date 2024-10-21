import React, { useState } from 'react';
import { ImagePlus, Upload } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

const ImageUploader = ({ onImageChange, onImageRemove, previewUrl, error }) => {
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onImageChange(reader.result, file);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-2">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                {previewUrl ? (
                    <div className="relative">
                        <img
                            src={previewUrl}
                            alt="Aperçu"
                            className="mx-auto max-h-48 rounded"
                        />
                        <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-0 right-0 text-red-600"
                            onClick={onImageRemove}
                        >
                            Supprimer
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <div className="flex justify-center">
                            <ImagePlus className="h-12 w-12 text-gray-400" />
                        </div>
                        <div className="flex justify-center">
                            <label className="cursor-pointer">
                                <Input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                                <div className="flex items-center space-x-2 text-blue-600">
                                    <Upload className="h-4 w-4" />
                                    <span>Choisir une image</span>
                                </div>
                            </label>
                        </div>
                    </div>
                )}
            </div>
            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}
        </div>
    );
};

export default ImageUploader;
