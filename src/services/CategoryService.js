import { BaseService } from './baseService';

class CategoryService extends BaseService {
  constructor() {
    super('/categories');
  }

  getAllCategories = () => this.get('/');

  createCategory = (categoryData) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    return this.post('/', categoryData, config);
  };
}

export const categoryService = new CategoryService();