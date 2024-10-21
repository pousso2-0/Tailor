import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostMedia from './PostMedia';
import PostReactions from './PostReactions';
import PostActions from './PostActions';

const Post = ({ post, toggleCommentSection, imageOnSlide, setModalShow1 }) => {
  return (
    <div className="user-post mt-4">
      <PostHeader user={post.user} createdAt={post.createdAt} />
      <PostContent content={post.content} />
      <PostMedia media={post.media} imageOnSlide={imageOnSlide} postId={post.id} />
      <PostReactions reactions={post.reactions} user={post.user} />
      <PostActions
        commentsCount={post.commentsCount}
        sharesCount={post.sharesCount}
        toggleCommentSection={toggleCommentSection}
        postId={post.id}
        setModalShow1={setModalShow1}
      />
    </div>
  );
};
export default Post;