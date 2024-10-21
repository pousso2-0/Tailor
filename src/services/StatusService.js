import { BaseService } from './baseService';

class StatusService extends BaseService {
  constructor() {
    super('/status');
  }

  createStatus = (content, media, duration) => {
    const formData = new FormData();
    formData.append('content', content);
    formData.append('mediaUrl', media);
    formData.append('duration', duration); // Format comme '5m', '2h', etc.

    return this.post('/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  getUserStatuses = () => this.get('/all');

  getFollowedUserStatuses = () => this.get('/followed');

  deleteStatus = (statusId) => this.delete(`/del/${statusId}`);

  sendMessageToStatus = (statusId, message) => this.post('/message', { statusId, message });

  getStatus = (statusId) => this.get(`/${statusId}`);
}

const statusService = new StatusService() ;

export default statusService;