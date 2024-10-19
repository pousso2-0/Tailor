import { Link } from "react-router-dom";

const NavLink = ( {key, name, active, setActive, link, children }) => {
    let hasChildren = !!children;

    return (
        <li key={key} className="nav-item">
            <Link
                className={`nav-link menu-arrow justify-content-start ${active === name ? 'active' : ''}`}
                to={link}
                onClick={() => setActive(name)}
                {...(hasChildren && {
                    'data-bs-toggle': 'collapse',
                    'role': 'button',
                    'aria-expanded': 'false',
                    'aria-controls': 'blogData',
                })}
            >
                <span className="nav-text">{name}</span>
            </Link>
            {children}
        </li>
    );
}

export default NavLink;
