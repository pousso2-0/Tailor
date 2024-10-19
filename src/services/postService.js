import { BaseService } from './baseService';

class PostService extends BaseService {
  constructor() {
    super('/posts');
  }

  createPost = (postData) => this.post('/', postData);
  
  getPostById = (postId) => this.get(`/${postId}`);
  
  updatePost = (postId, postData) => this.put(`/${postId}`, postData);
  
  deletePost = (postId) => this.delete(`/${postId}`);
  
  getUserPosts = (userId, page, limit) => this.get(`/user/${userId}`, { params: { page, limit } });
  
  getAllPosts = (page, limit) => this.get('/', { params: { page, limit } });
  
  incrementShareCount = (postId) => this.post(`/${postId}/share`);
  
  retweetPost = (retweetData) => this.post('/retweet', retweetData);
  
  addToFavorites = (favoriteData) => this.post('/favorites', favoriteData);
  
  getUserRetweet = () => this.get('/retweets');
  
  getUserFavorites = () => this.get('/favorites/f');
  
  deleteFromFavorites = (postId) => this.delete(`/favorites/${postId}`);
  
  sharePost = (shareData) => this.post('/share', shareData);
  
  viewPost = (postId) => this.post('/view', { postId });
}

export const postService = new PostService();
