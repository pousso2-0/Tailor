import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Card } from "react-bootstrap";
import { userService } from "../../../services/userService";
import { timeUtils } from '../../../utilities/timeUtils';

const NotificationDropdown = () => {
    const [notifications, setNotifications] = useState([]); // État pour stocker les notifications

    useEffect(() => {
        const fetchNotif = async () => {
            try {
                const response = await userService.getNotifications();
                const notificationsData = response.data || []; // Assurez-vous que notifications est un tableau
                setNotifications(Array.isArray(notificationsData) ? notificationsData : []); // Mettez à jour l'état avec les notifications
            } catch (error) {
                console.error("Erreur lors de la récupération des notifications :", error);
            }
        };

        fetchNotif();
    }, []);

    // Vérifiez s'il y a des notifications non lues
    const hasUnread = notifications.some(notification => !notification.read); // Ajoutez une propriété isRead à vos notifications

    const renderMessage = (notif) => {
        return notif.userNotif
            ? `${notif.userNotif.name} ${notif.message}`
            : notif.message;
    };

    const renderProfilePicture = (notif) => {
        return notif.userNotif && notif.userNotif.profilePicture
            ? notif.userNotif.profilePicture
            : '';
    };

    return (
        <Dropdown as="li" className="nav-item">
            <Dropdown.Toggle as="a" className="search-toggle d-flex align-items-center" id="notification-drop">
                <span className="material-symbols-outlined position-relative">
                    notifications
                    {hasUnread && <span className="bg-primary text-white notification-badge"></span>}
                </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="sub-drop header-notification" aria-labelledby="notification-drop" data-bs-popper="static">
                <Card className="m-0 shadow">
                    <div className="card-header d-flex justify-content-between px-0 pb-4 mx-5 border-bottom">
                        <h5 className="fw-semibold">Notifications</h5>
                        <h6 className="material-symbols-outlined">settings</h6>
                    </div>
                    <Card.Body>
                        <div className="item-header-scroll">
                            {/* Affiche uniquement les notifications avec une map */}
                            {notifications.slice(0, 3).map(notification => (
                                <Link to="/dashboard/app/notification" key={notification.id}>
                                    <div className="d-flex gap-3 mb-4">
                                        <img className="avatar-32 rounded-pill"
                                             src={renderProfilePicture(notification)} // Utiliser la fonction pour obtenir l'image
                                             alt="" />
                                        <div>
                                            <h6 className="font-size-14">
                                                {renderMessage(notification)} {/* Utiliser la fonction pour formater le message */}
                                            </h6>
                                            <small className="text-body fw-500">{timeUtils(notification.createdAt)}</small>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link to="dashboard/app/notification">
                            <button type="button" className="btn btn-primary fw-500 w-100">View All Notifications</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default NotificationDropdown;
