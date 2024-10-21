import { BaseService } from './baseService';


class AuthService extends BaseService {
  constructor() {
    super('/users');
  }

  register = async (userData) => {
    try {
      const response = await this.post('/register', userData);
      console.log(userData);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  };

  login = async (credentials) => {
    try {
      const response = await this.post('/login', credentials);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  };

  logout = () => {
    console.log("Appel à la méthode logout, suppression du token...");

    localStorage.removeItem('token'); // Supprimer uniquement le token
    sessionStorage.clear(); // Si nécessaire, vider sessionStorage

    console.log("Token supprimé.");
  };


  getCurrentUser = () => this.get('/profile');

  isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  getToken = () => {
    return localStorage.getItem('token');
  };

  isLoggedIn = () => {
    const token = this.getToken();
    return !!token;
  };
}

const authService = new AuthService();
export default authService;
