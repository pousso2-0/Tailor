import { BaseService } from './baseService';

class OrderService extends BaseService {
  constructor() {
    super('/orders');
  }

  createOrder = (orderData) => this.post('/', orderData);
  
  getOrders = () => this.get('/');
  
  updateOrderStatus = (orderId, statusData) => this.put(`/${orderId}`, statusData);
  
  markOrderAsCompleted = (orderId) => this.patch(`/${orderId}/complete`);
}

export const orderService = new OrderService();
