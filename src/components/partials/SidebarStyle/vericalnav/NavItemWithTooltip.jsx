import { Link, useLocation } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const NavItemWithTooltip = ({ path, icon, tooltip, label }) => {
    const location = useLocation();
    return (
        <li className={`${location.pathname === path ? 'active' : ''} nav-item`}>
            <Link className={`${location.pathname === path ? 'active' : ''} nav-link`} to={path}>
                <OverlayTrigger placement="right" overlay={<Tooltip>{tooltip}</Tooltip>}>
                    <i className={`icon material-symbols-outlined`}>{icon}</i>
                </OverlayTrigger>
                <span className="item-name">{label}</span>
            </Link>
        </li>
    );
};

export default NavItemWithTooltip;
