import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useUser } from '../../../context/UserContext';
import { userService } from '../../../services/userService';
import { Settings, ChevronDown } from 'lucide-react';

const FriendRequests = () => {
    const { currentUser } = useUser();
    const [userType, setUserType] = useState(currentUser ? currentUser.type : '');

    const getOptions = () => {
        switch (currentUser.type) {
            case "TAILLEUR": return ["VENDEUR"];
            case "CLIENT": return ["TAILLEUR", "VENDEUR"];
            case "VENDEUR": return ["TAILLEUR"];
            default: return [];
        }
    };

    const options = getOptions();

    const handleUpdateProfile = async (newType) => {
        try {
            await userService.updateProfile({ type: newType });
            setUserType(newType);
            showToast("Profil mis à jour avec succès !");
        } catch (error) {
            console.error("Erreur lors de la mise à jour du profil :", error);
            showToast("Erreur lors de la mise à jour du profil.", "error");
        }
    };

    const showToast = (message, type = "success") => {
        console.log(`Toast ${type}: ${message}`);
    };

    return (
        <Dropdown as="li" className="nav-item">
            <Dropdown.Toggle as="a" className="dropdown-toggle d-flex align-items-center justify-content-center custom-dropdown-toggle" id="profile-updates-drop">
                <Settings size={18} />
            </Dropdown.Toggle>
            <Dropdown.Menu className="custom-dropdown-menu" align="end">
                <div className="py-2 px-3">
                    <h6 className="mb-2 text-muted">Modifier le profil</h6>
                    <div className="select-wrapper">
                        <select
                            value={userType}
                            onChange={(e) => handleUpdateProfile(e.target.value)}
                            className="form-select custom-select"
                        >
                            <option value="">Sélectionner</option>
                            {options.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                        <ChevronDown size={16} className="select-icon" />
                    </div>
                </div>
            </Dropdown.Menu>
            <style jsx>{`
                .custom-dropdown-toggle {
                    background: #f8f9fa;
                    border: 1px solid #e9ecef;
                    color: #495057;
                    width: 32px;
                    height: 32px;
                    padding: 0;
                    border-radius: 50%;
                    transition: all 0.2s ease;
                }
                .custom-dropdown-toggle:hover, .custom-dropdown-toggle:focus {
                    background: #e9ecef;
                    color: #212529;
                }
                .custom-dropdown-menu {
                    min-width: 200px;
                    border: none;
                    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
                    border-radius: 0.375rem;
                }
                .select-wrapper {
                    position: relative;
                }
                .custom-select {
                    appearance: none;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    font-size: 0.875rem;
                    padding: 0.5rem 2rem 0.5rem 1rem;
                    border: 1px solid #e0e0e0;
                    border-radius: 0.25rem;
                    background-color: #ffffff;
                    color: #333;
                    width: 100%;
                    transition: all 0.2s ease;
                }
                .custom-select:focus {
                    border-color: #3498db;
                    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
                    outline: none;
                }
                .select-icon {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    pointer-events: none;
                    color: #666;
                }
                .custom-select:hover {
                    border-color: #3498db;
                }
            `}</style>
        </Dropdown>
    );
};

export default FriendRequests;ss