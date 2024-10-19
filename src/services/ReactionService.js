import { BaseService } from './baseService';

class ReactionService extends BaseService {
  constructor() {
    super('/reactions');
  }

  toggleReaction = (reactionData) => this.post('/', reactionData);

  getReactionsForPost = (postId) => this.get(`/posts/${postId}`);

  getReactionsForComment = (commentId) => this.get(`/comments/${commentId}`);
}

export const reactionService = new ReactionService();
