const PostComponent = () => {
    const [openComments, setOpenComments] = useState(false);
    const [modalShow, setModalShow] = useState(false);
  
    const comments = [
      {
        userImg: "user6.jpg",
        userName: "Bob Frapples",
        commentText: `"Just stumbled upon this post and it's giving me all the feels! 🙌"`,
        timeAgo: "3 min ago",
        replies: [
          {
            userImg: "user2.jpg",
            userName: "Alice Wonder",
            replyText: `"Couldn't agree more! This is awesome."`,
            timeAgo: "1 min ago",
          },
        ],
      },
    ];
  
    return (
      <div className="comment-area mt-4 pt-4 border-top">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <LikeDropdown likeCount={140} />
  
          <div className="d-flex align-items-center gap-3 flex-shrink-0">
            <div
              className="total-comment-block"
              type="button"
              aria-controls="commentcollapes"
              aria-expanded={openComments}
              onClick={() => setOpenComments(!openComments)}
            >
              <span className="material-symbols-outlined align-text-top font-size-20">
                comment
              </span>{" "}
              <span className="fw-medium">20 Comment</span>
            </div>
  
            <ShareBlock shareCount={99} onClick={() => setModalShow(true)} />
            <ShareOffcanvas show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
  
        <CommentArea open={openComments}>
          <ul className="list-inline m-o p-0 comment-list">
            {comments.map((comment, index) => (
              <Comment
                key={index}
                userImg={comment.userImg}
                userName={comment.userName}
                commentText={comment.commentText}
                timeAgo={comment.timeAgo}
                replies={comment.replies}
              />
            ))}
          </ul>
          <CommentForm userImg="user1.jpg" />
        </CommentArea>
      </div>
    );
  };
  
  export default PostComponent;
  