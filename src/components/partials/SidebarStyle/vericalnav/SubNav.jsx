import { Link } from 'react-router-dom';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';

const SubNav = ({ items }) => (
    <ul className="sub-nav">
        {items.map(({ path, label, tooltip, miniIcon }) => (
            <Nav.Item as="li" key={path}>
                <Link className={`nav-link`} to={path}>
                    <i className="icon material-symbols-outlined filled">fiber_manual_record</i>
                    <OverlayTrigger placement="right" overlay={<Tooltip>{tooltip}</Tooltip>}>
                        <i className="sidenav-mini-icon">{miniIcon}</i>
                    </OverlayTrigger>
                    <span className="item-name">{label}</span>
                </Link>
            </Nav.Item>
        ))}
    </ul>
);

export default SubNav;
