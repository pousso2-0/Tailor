import { Accordion, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CustomToggle from './CustomToggle';
import SubNav from './SubNav';

const AccordionMenu = ({ eventKey, icon, label, subItems, onClick }) => (
    <Accordion.Item as="li" eventKey={eventKey} bsPrefix="nav-item">
        <CustomToggle eventKey={eventKey} onClick={onClick}>
            <OverlayTrigger placement="right" overlay={<Tooltip>{label}</Tooltip>}>
                <i className="icon material-symbols-outlined">{icon}</i>
            </OverlayTrigger>
            <span className="item-name">{label}</span>
            <i className="right-icon material-symbols-outlined">chevron_right</i>
        </CustomToggle>
        <Accordion.Collapse eventKey={eventKey}>
            <SubNav items={subItems} />
        </Accordion.Collapse>
    </Accordion.Item>
);

export default AccordionMenu;
