import React from "react";
import { Form } from "react-bootstrap";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="mt-4 iq-search-bar device-search">
            <Form action="#" className="searchbox position-relative">
                <Form.Control
                    type="text"
                    className="text search-input bg-light-subtle"
                    placeholder="Search for people...."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form>
        </div>
    );
};

export default SearchBar;