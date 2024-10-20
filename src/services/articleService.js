import { BaseService } from './baseService';

class ArticleService extends BaseService {
  constructor() {
    super('/articles');
  }

  getAllArticles = () => this.get();
  getArticle = (id) => this.get(`/${id}`);
  createArticle = (articleData) => this.post('', articleData);
  updateArticle = (id, articleData) => this.put(`/${id}`, articleData);
  deleteArticle = (id) => this.delete(`/${id}`);

  // Store-related endpoints
  getAllStores = () => this.get('/stores');
  getStoresByUser = () => this.get('/stores/user');
  createStore = (storeData) => this.post('/stores', storeData);
  deleteStore = (storeId) => this.delete(`/store/${storeId}`);

  // Category-related endpoints
  listAllCategoriesAndArticles = () => this.get('/categories');
  listAllCategoriesForStore = (storeId) => this.get(`/store/${storeId}/categories`);

  // Article-in-store endpoints
  listArticlesByCategoryForStore = (storeId, categoryId) => this.get(`/stores/${storeId}/category/${categoryId}`);
  addArticleToStore = (storeId, articleData) => {
    const formData = new FormData();
    console.log('depuis le service', articleData.categoryId)

    // Supposons que articleData est un objet avec des propriétés comme title, description, etc.
    formData.append('name', articleData.name);
    formData.append('description', articleData.description);
    formData.append('price', articleData.price);
    formData.append('stockCount', articleData.stockCount);
    formData.append('categoryId', articleData.categoryId);
    formData.append('image', articleData.image); // Changement de 'image' à 'files'
    console.log('avant le post', formData)

    return this.post(`/store/${storeId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  deleteArticleFromStore = (storeId, articleId) => this.delete(`/stores/${storeId}/articles/${articleId}`);
  deleteCategoryForStore = (storeId, categoryId) => this.delete(`/store/${storeId}/category/${categoryId}`);
}

export const articleService = new ArticleService();