import { BaseService } from './baseService';

class UserService extends BaseService {
  constructor() {
    super('/users');
  }


  getCurrentUser = () => this.get('/profile');
  updateProfile = (userData) => this.put('/update', userData);
  buyCredits = (amount) => this.post('/buy-credits', { amount });
  upgradeToPremium = () => this.post('/upgrade-to-premium');
  getUserProfileById = (id) => this.get(`/profile/${id}`);
  checkPremiumStatus = () => this.get('/premium-status');
  searchUsers = (name) => this.get('/search', { params: { name } });
  followUser = (followingId) => this.post('/follow', { followingId });
  unfollowUser = (unfollowingId) => this.post('/unfollow', { unfollowingId });
  getFollowers = () => this.get('/follower');
  getFollowing = () => this.get('/following');
  vote = (tailorId, rating) => this.post('/vote', { tailorId, rating });
  getTailorRating = (id) => this.get(`/${id}/vote`);
  createOrUpdateMesure = (mesureData) => this.post('/mesure', mesureData);
  getMesure = () => this.get('/mesures');
  deleteMesure = (mesureId) => this.delete('/delMesure', { data: { mesureId } });
  reportUser = (signaledId, reasons) => this.post('/report', { signaledId, reasons });
  getNotifications = () => this.get('/notifications');
  markNotificationAsRead = (id) => this.patch(`/notifications/${id}`);
  sendNotification = (userId, message) => this.post('/notifications', { userId, message });
  markNotificationAsUnread = (id) => this.patch(`/notifications/${id}/unread`);
  deleteNotification = (id) => this.delete(`/notifications/${id}`);
}

export const userService = new UserService();

