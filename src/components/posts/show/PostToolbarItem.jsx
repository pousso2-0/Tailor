import React from 'react';
import { Dropdown } from 'react-bootstrap';


export default function PostToolbarItem({ icon, title, description }) {
    return (
        <Dropdown.Item className="p-3" to="#">
            <div className="d-flex align-items-top">
                <span className="material-symbols-outlined">{icon}</span>
                <div className="data ms-2">
                    <h6>{title}</h6>
                    <p className="mb-0">{description}</p>
                </div>
            </div>
        </Dropdown.Item>
    );  
}