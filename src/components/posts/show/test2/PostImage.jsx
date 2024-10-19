export default PostImage = ({ src, alt }) => (
    <Link to="#" className="rounded">
        <img
            src={src}
            alt={alt}
            className="img-fluid rounded w-100"
            loading="lazy"
        />
    </Link>
);
