
const UserList = ({ users }) => (
    <ul className="list-inline m-0 p-0 post-user-liked-list">
        {users.map((user, index) => (
            <li key={index}>
                <img
                    src={user.image}
                    alt="user"
                    className="rounded-circle img-fluid userimg"
                    loading="lazy"
                />
            </li>
        ))}
    </ul>
);

export default UserList;