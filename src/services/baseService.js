import api from './api';

export class BaseService {
    // Le constructeur prend un endpoint comme paramètre, qui est l'URL de base pour les requêtes.
    constructor(endpoint) {
      this.endpoint = endpoint; // Stockage de l'endpoint dans une propriété de l'instance.
    }
  
    // Méthode pour effectuer une requête GET.
    // url : chemin additionnel à l'endpoint (par défaut vide).
    // config : options supplémentaires pour la requête (par défaut un objet vide).
    get = (url = '', config = {}) => api.get(`${this.endpoint}${url}`, config);
  
    // Méthode pour effectuer une requête POST.
    // url : chemin additionnel à l'endpoint (par défaut vide).
    // data : données à envoyer dans la requête (par défaut un objet vide).
    // config : options supplémentaires pour la requête (par défaut un objet vide).
    post = (url = '', data = {}, config = {}) => api.post(`${this.endpoint}${url}`, data, config);
  
    // Méthode pour effectuer une requête PUT.
    // url : chemin additionnel à l'endpoint (par défaut vide).
    // data : données à envoyer dans la requête (par défaut un objet vide).
    // config : options supplémentaires pour la requête (par défaut un objet vide).
    put = (url = '', data = {}, config = {}) => api.put(`${this.endpoint}${url}`, data, config);
  
    // Méthode pour effectuer une requête DELETE.
    // url : chemin additionnel à l'endpoint (par défaut vide).
    // config : options supplémentaires pour la requête (par défaut un objet vide).
    delete = (url = '', config = {}) => api.delete(`${this.endpoint}${url}`, config);

    patch = (url = '', data = {}, config = {}) => api.patch(`${this.endpoint}${url}`, data, config);

}