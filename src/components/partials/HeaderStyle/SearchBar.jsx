import React from "react";
import { Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchModal from "../../SearchModal";

const SearchBar = () => {
    return (
        <Dropdown bsPrefix=" " className="iq-search-bar device-search position-relative d-none d-lg-block">
            <Dropdown.Toggle as="form" bsPrefix=" " action="#" className="searchbox open-modal-search">
                <Link className="search-link" to="#">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.82491" cy="7.82495" r="6.74142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                        <path d="M12.5137 12.8638L15.1567 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </Link>
                <Form.Control
                    type="text"
                    className="text search-input form-control bg-light-subtle"
                    placeholder="Search for people or groups..."
                />
                <Link className="d-lg-none d-flex d-none d-lg-block" to="/">
                    <span className="material-symbols-outlined">search12</span>
                </Link>
            </Dropdown.Toggle>
            <SearchModal />
        </Dropdown>
    );
};

export default SearchBar;