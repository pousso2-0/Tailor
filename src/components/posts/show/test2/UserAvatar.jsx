export default UserAvatar = ({ src, alt, size = "40px" }) => (
    <img
        src={src}
        alt={alt}
        className="border border-2 rounded-circle user-post-profile"
        style={{ width: size, height: size }}
    />
);
