import { BaseService } from './baseService';

class CommentService extends BaseService {
  constructor() {
    super('/comments');
  }

  createComment = (postId, commentData) => this.post(`/${postId}`, commentData);

  getComment = (id) => this.get(`/${id}`);

  updateComment = (id, commentData) => this.put(`/${id}`, commentData);

  deleteComment = (id) => this.delete(`/${id}`);

  createReply = (commentId, replyData) => this.post(`/${commentId}/replies`, replyData);

  getCommentsByPost = (postId, params) => this.get(`/post/${postId}`, { params });
}

export const commentService = new CommentService();