import React, { useState } from 'react';

const CategoryGrid = () => {
    // Définir un état pour l'image sélectionnée
    const [selectedImage, setSelectedImage] = useState(null);

    // Gérer la sélection d'image et stocker l'image sélectionnée
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <div className="text-center mb-5">
                <h1>Catégorie du Store</h1>
            </div>
            <div id="content-page" className="content-inner">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/3 mb-4">
                            <div className="filter-section mb-4">
                                <h4>Filtrer les catégories</h4>
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    className="form-control mb-3 border rounded p-2 w-full"
                                />
                            </div>
                            <div className="add-category-section mt-4">
                                <h4>Ajouter une nouvelle catégorie</h4>
                                <form>
                                    <div className="form-group mb-3">
                                        <label htmlFor="categoryName">Nom de la catégorie</label>
                                        <input
                                            type="text"
                                            id="categoryName"
                                            placeholder="Entrez le nom"
                                            className="form-control border rounded p-2 w-full"
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="categoryImage">Image de la catégorie</label>
                                        <input
                                            type="file"
                                            id="categoryImage"
                                            accept="image/*"
                                            className="form-control border rounded p-2 w-full"
                                            onChange={handleImageChange} // Appeler la fonction lors de la sélection de l'image
                                            required
                                        />
                                    </div>

                                    {/* Afficher l'image sélectionnée dans une section stylée */}
                                    {selectedImage && (
                                        <div className="image-preview mb-3">
                                            <img
                                                src={selectedImage}
                                                alt="Prévisualisation de la catégorie"
                                                className="w-full h-auto rounded shadow-lg"
                                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                                            />
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white rounded p-2 w-full"
                                    >
                                        Ajouter
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <p className="text-center">Chargement...</p>
                            <div className="text-center mt-4">
                                <h4>Aucune catégorie disponible</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryGrid;
