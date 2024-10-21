import { Link } from "react-router-dom";

const NavItem = ({key, name, active, setActive, link}) => {

    return (
        <li key={key} className="nav-item">
            <Link className={`nav-link${active === name ? 'active' : ''}`} to={link} onClick={() => setActive(name)}>
                {name}
            </Link>    
        </li>
    )   
}

export default NavItem;