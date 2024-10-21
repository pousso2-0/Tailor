import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAccordionButton, AccordionContext } from 'react-bootstrap';

const CustomToggle = ({ children, eventKey, onClick }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({ state: !active, eventKey }));
    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={() => decoratedOnClick(isCurrentEventKey)}>
            {children}
        </Link>
    );
};
export default CustomToggle;
