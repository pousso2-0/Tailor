import React, { Fragment } from 'react';
import { Dropdown, Form, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SearchModal = ({ users, loading, error }) => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <Dropdown.Menu bsPrefix=' ' className={`search-modal-custom`}>
                <div className="search-modal-content">
                    <div className="px-3 py-2">
                        <div className="d-lg-none w-100">
                            <Form action="#" className="searchbox">
                                <Link className="search-link" to="#">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7.82491" cy="7.82495" r="6.74142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                        <path d="M12.5137 12.8638 L15.1567 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>
                                <Form.Control
                                    type="text"
                                    className="text search-input bg-primary-subtle"
                                    placeholder="Search here..."
                                />
                            </Form>
                        </div>
                        <div className="d-none d-lg-flex align-items-center justify-content-between w-100">
                            <h4 className="modal-title" id="exampleModalFullscreenLabel">
                                Recent
                            </h4>
                            <Link to="/" className="text-dark">
                                Clear All
                            </Link>
                        </div>
                    </div>
                    <Modal.Body className="p-0">
                        {loading && <div>Chargement...</div>}
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        {Array.isArray(users) && users.length === 0 && (
                            <div>Aucun utilisateur trouvé</div>
                        )}
                        {Array.isArray(users) && users.map((user) => (
                            <div key={user.id} className="d-flex align-items-center search-hover py-2 px-3"
                                 onClick={() => {
                                     console.log("Utilisateur cliqué :", user);
                                     navigate(`/friend/UserView`, {state: user}); // Vérifiez ici
                                 }}>
                                <div className="flex-shrink-0">
                                    <img
                                        src={user.profilePicture || 'default-avatar.jpg'}
                                        className="align-self-center img-fluid avatar-50 rounded-pill"
                                        alt="#"
                                    />
                                </div>
                                <div className="d-flex ms-3 w-100 justify-content-between">
                                    <div className="d-flex flex-column">
                                        <Link to="#" className="h6">
                                            {user.name}
                                        </Link>
                                    </div>
                                    <Link to="#" className="material-symbols-outlined text-dark font-size-16">
                                        close
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Modal.Body>
                </div>
            </Dropdown.Menu>
        </Fragment>
    );
};

export default SearchModal;
