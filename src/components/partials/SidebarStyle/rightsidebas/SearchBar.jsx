import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchBar = () => (
  <div className="mt-4 iq-search-bar device-search">
    <Form action="#" className="searchbox position-relative">
      <Link className="search-link" to="#">
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="7.82491"
            cy="7.82495"
            r="6.74142"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5137 12.8638L15.1567 15.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <Form.Control
        type="text"
        className="text search-input bg-light-subtle"
        placeholder="Search for people or groups..."
      />
    </Form>
  </div>
);

export default SearchBar;