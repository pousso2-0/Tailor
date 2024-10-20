import React, { useState, useCallback, useEffect } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchModal from "../../SearchModal";
import { userService } from "../../../services/userService";
import debounce from 'lodash/debounce';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedUserProfile, setSelectedUserProfile] = useState(null);

    const debouncedSearch = useCallback(
        debounce(async (term) => {
            if (term.length === 0) {
                setUsers([]);
                return;
            }

            setLoading(true);
            setError('');

            try {
                const results = await userService.searchUsers(term);
                console.log('Résultats de la recherche :', results);
                setUsers(Array.isArray(results.data) ? results.data : []);
            } catch (err) {
                setError('Erreur lors de la recherche des utilisateurs');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }, 300),
        []
    );

    useEffect(() => {
        debouncedSearch(searchTerm);

        return () => {
            debouncedSearch.cancel();
        };
    }, [searchTerm, debouncedSearch]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleUserClick = async (userId) => {
        try {
            const userProfile = await userService.getUserProfileById(userId);
            setSelectedUserProfile(userProfile.data);
        } catch (err) {
            console.error('Erreur lors de la récupération du profil utilisateur', err);
        }
    };

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
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <Link className="d-lg-none d-flex d-none d-lg-block" to="/">
                    <span className="material-symbols-outlined">search12</span>
                </Link>
            </Dropdown.Toggle>
            <SearchModal
                users={users}
                loading={loading}
                error={error}
                onUserClick={handleUserClick} // Passer la fonction ici
            />
            {selectedUserProfile && (
                <div>
                    {/* Affichez les détails de l'utilisateur sélectionné ici */}
                    {/*<h3>{selectedUserProfile.name}</h3>*/}
                    <p>{selectedUserProfile.email}</p>
                    {/* Ajoutez d'autres détails selon vos besoins */}
                </div>
            )}
        </Dropdown>
    );
};

export default SearchBar;
