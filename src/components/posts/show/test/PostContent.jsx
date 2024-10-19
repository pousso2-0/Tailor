const PostContent = ({ text, tags, image, onImageClick }) => (
    <>
        <div className="mt-4">
            <p className="m-0">{text}</p>
            <HashTags tags={tags} />
        </div>
        {image && (
            <div className="user-post mt-4">
                <Link onClick={() => onImageClick()} to="#" className="rounded">
                    <img src={image} alt="post" className="img-fluid rounded w-100" loading="lazy" />
                </Link>
            </div>
        )}
    </>
);

export default PostContent;