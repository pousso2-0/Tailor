import { BaseService } from './baseService';

class MessageService extends BaseService {
  constructor() {
    super('/messages');
  }

  sendMessage = (messageData) => this.post('/', messageData);
  
  getUserConversations = () => this.get('/conversations');
  
  getConversationMessages = (conversationId) => this.get(`/conversation/${conversationId}`);
  
  deleteMessage = (messageId) => this.delete(`/${messageId}`);
}

export const messageService = new MessageService();
