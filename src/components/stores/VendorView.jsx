import React, { useEffect, useRef, useState } from 'react';
import  Card  from "../Card";
import { Button } from "../ui/Button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/DropdownMenu";
import { Plus, Store, Tag, ChevronDown, Pencil, Trash2 } from "lucide-react";
import ArticleManager from '../articles/ArticleManager';
import CategoryManager from '../categories/CategoryManager';
import StoreManager from './StoreManager';
import { articleService } from "../../services/articleService";
import Modal from "../ui/Modal"; // Assurez-vous d'importer votre composant Modal

export const VendorView = ({ stores }) => {
    const [activeManager, setActiveManager] = useState(null);
    const [articles, setArticles] = useState([]);
    const [openMenu, setOpenMenu] = useState(null);
    const [editingArticleId, setEditingArticleId] = useState(null);
    const [editedArticle, setEditedArticle] = useState(null);
    const [currentStore, setCurrentStore] = useState(stores);
    const [showDeleteModal, setShowDeleteModal] = useState(false); // État pour la modal de suppression
    const [articleToDelete, setArticleToDelete] = useState(null); // ID de l'article à supprimer

    // Fonction pour démarrer l'édition d'un article
    const handleEditClick = (article) => {
        setEditingArticleId(article.id);
        setEditedArticle({ ...article });
    };

    const handleSaveEdit = async (articleId) => {
        try {
            const updatedArticle = await articleService.addArticleToStore(currentStore.id, editedArticle);
            setArticles(prevArticles =>
                prevArticles.map(item => (item.id === articleId ? updatedArticle : item))
            );
            setEditingArticleId(null);
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'article :", error);
        }
    };

    const handleCancelEdit = () => {
        setEditingArticleId(null);
        setEditedArticle(null);
    };

    const handleInputChange = (field, value) => {
        setEditedArticle(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Fonction pour gérer la demande de suppression
    const confirmDeleteArticle = (articleId) => {
        setArticleToDelete(articleId); // Définir l'article à supprimer
        setShowDeleteModal(true); // Ouvrir la modal de confirmation
    };

    // Fonction pour effectuer la suppression
    const handleDeleteArticle = async () => {
        if (articleToDelete) {
            try {
                await articleService.deleteArticleFromStore(currentStore.id, articleToDelete);
                setArticles(prevArticles => prevArticles.filter(item => item.id !== articleToDelete));
                setShowDeleteModal(false); // Fermer la modal après la suppression
                setArticleToDelete(null); // Réinitialiser l'article à supprimer
            } catch (error) {
                console.error("Erreur lors de la suppression de l'article :", error);
                // Gérer l'erreur (affichage d'un message d'erreur, etc.)
            }
        }
    };

    // Utilisation de useEffect pour sélectionner le premier magasin
    useEffect(() => {
        if (stores && stores.length > 0) {
            setCurrentStore(stores[0]);
            setArticles(stores[0].articles || []);
        } else {
            setCurrentStore(null);
            setArticles([]);
        }
    }, [stores]);

    const handleStoreSelect = (store) => {
        setCurrentStore(store);
        setArticles(store.articles || []);
        setOpenMenu(null);
    };

    const onAddArticle = (newArticle) => {
        setArticles((prevArticles) => [...prevArticles, newArticle]);
    };

    const renderManager = () => {
        switch (activeManager) {
            case 'article':
                return <ArticleManager selectedStore={currentStore} onClose={() => setActiveManager(null)} onAddArticle={onAddArticle} />;
            case 'category':
                return <CategoryManager onClose={() => setActiveManager(null)} />;
            case 'store':
                return <StoreManager onClose={() => setActiveManager(null)} />;
            default:
                return null;
        }
    };

    const toggleMenu = (id) => {
        setOpenMenu((prev) => (prev === id ? false : id));
    };

    return (
        <Card className="w-full shadow-lg">
            <Card.Header className="border-b">
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center space-x-4 w-1/2">
                        <Store className="h-6 w-6 text-gray-500" />
                        <h2 className="text-2xl font-bold">
                            {currentStore?.name || 'Sélectionnez un magasin'}
                        </h2>
                    </div>
                    <div className="flex items-center space-x-4 w-1/2 justify-end">

                        <Button variant="outline" className="border-dashed m-1">
                            <DropdownMenu openMenu={openMenu} setOpenMenu={setOpenMenu}>
                                <DropdownMenuTrigger>
                                    <button className="flex items-center space-x-2" onClick={() => toggleMenu('dropdown')}>
                                        <span>{currentStore?.name || 'Sélectionnez un magasin'}</span>
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent show={openMenu === 'dropdown'}>
                                    {stores.map(store => (
                                        <DropdownMenuItem key={store.id} onClick={() => handleStoreSelect(store)}>
                                            {store.name}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </Button>
                        <Button
                            variant="outline"
                            className="border-dashed m-1"
                            onClick={() => setActiveManager('store')}
                        >
                            <Store className="h-4 w-4 mr-2" />
                            Nouveau Magasin
                        </Button>

                        <Button
                            variant="outline"
                            className="border-dashed m-1"
                            onClick={() => setActiveManager('category')}
                        >
                            <Tag className="h-4 w-4 mr-2" />
                            Nouvelle Catégorie
                        </Button>

                        <Button
                            className="bg-primary hover:bg-primary-subtle m-1"
                            onClick={() => setActiveManager('article')}
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            Ajouter Article
                        </Button>
                    </div>
                </div>
            </Card.Header>


            <Card.Body className="p-6">
                {renderManager()}
                {articles && articles.length > 0 ? (
                    <div className="rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="table table-responsive-md table-striped text-center">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Catégorie</th>
                                    <th>Prix</th>
                                    <th>Stock</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {articles.map(item => (
                                    <tr key={item.id}
                                        className={editingArticleId === item.id ? "bg-yellow-50" : "hover:bg-gray-50"}>
                                        <td className="px-6 py-4 font-medium text-gray-900 text-center">
                                            {editingArticleId === item.id ? (
                                                <input
                                                    type="text"
                                                    value={editedArticle.name}
                                                    readOnly
                                                    className="w-full border border-gray-300 rounded-md p-1 bg-gray-200"
                                                />
                                            ) : (
                                                item.name
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {editingArticleId === item.id ? (
                                                <input
                                                    type="text"
                                                    value={editedArticle.category?.name}
                                                    readOnly
                                                    className="w-full border border-gray-300 rounded-md p-1 bg-gray-200"
                                                />
                                            ) : (
                                                item.category?.name
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right text-center">
                                            {editingArticleId === item.id ? (
                                                <input
                                                    type="text"
                                                    value={editedArticle.price}
                                                    onChange={(e) => handleInputChange("price", e.target.value)}
                                                    className="w-full border border-gray-300 rounded-md p-1"
                                                />
                                            ) : (
                                                item.price
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right text-center">
                                            {editingArticleId === item.id ? (
                                                <input
                                                    type="text"
                                                    value={editedArticle.stockCount}
                                                    onChange={(e) => handleInputChange("stockCount", e.target.value)}
                                                    className="w-full border border-gray-300 rounded-md p-1"
                                                />
                                            ) : (
                                                item.stockCount
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center flex justify-center space-x-2">
                                            {editingArticleId === item.id ? (
                                                <>
                                                    <Button className={"bg-primary"} onClick={() => handleSaveEdit(item.id)}>Sauvegarder</Button>
                                                    <Button onClick={handleCancelEdit}>Annuler</Button>
                                                </>
                                            ) : (
                                                <>
                                                    <Button onClick={() => handleEditClick(item)} variant="outline">
                                                        <Pencil className="h-4 w-4"/>
                                                    </Button>
                                                    <Button onClick={() => confirmDeleteArticle(item.id)}
                                                            variant="outline">
                                                        <Trash2 className="h-4 w-4"/>
                                                    </Button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div>Aucun article disponible pour ce magasin.</div>
                )}

                {/* Modal de confirmation de suppression */}
                {showDeleteModal && (
                    <Modal
                        title="Confirmer la suppression"
                        onClose={() => setShowDeleteModal(false)}
                        onConfirm={handleDeleteArticle}
                    >
                        <p>Êtes-vous sûr de vouloir supprimer cet article ?</p>
                    </Modal>
                )}
            </Card.Body>
        </Card>
    );
};


