const HashTags = ({ tags }) => (
    <ul className="list-inline m-0 p-0 d-flex flex-wrap gap-1">
        {tags.map((tag, index) => (
            <li key={index}>
                <Link to="#">#{tag}</Link>
            </li>
        ))}
    </ul>
);

export default HashTags;