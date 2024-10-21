import { BaseService } from './baseService';

class FeedService extends BaseService {
  constructor() {
    super('/feed');
  }

  getUserFeed = () => this.get('/');
  
  getUserFollowFeed = () => this.get('/follow');
}

export const feedService = new FeedService();
