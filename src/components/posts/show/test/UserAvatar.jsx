const UserAvatar = ({ src, className }) => (
    <img
        src={src}
        alt="user"
        className={`rounded-circle ${className}`}
        loading="lazy"
    />
);

export default UserAvatar;