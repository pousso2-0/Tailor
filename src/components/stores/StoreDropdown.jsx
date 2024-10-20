// StoreDropdown.jsx
import React, { useState } from 'react';
import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StoreDropdown = ({ stores, handleStoreSelect, selectedStore }) => {
    const [activeStore, setActiveStore] = useState(null);

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Store
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {stores.map(store => (
                    <Dropdown.Item as="li" key={store.id} onClick={() => setActiveStore(store.id)}>
                        <div
                            onClick={() => {
                                handleStoreSelect(store);
                                setActiveStore(store.id); // Mettez à jour l'état actif
                            }}
                        >
                            <OverlayTrigger placement="right" overlay={<Tooltip>{store.name}</Tooltip>}>
                                <span>{store.name}</span>
                            </OverlayTrigger>
                        </div>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default StoreDropdown;
