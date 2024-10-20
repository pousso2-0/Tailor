import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Dropdown } from 'react-bootstrap';
import  Card  from '../../components/Card';
import { userService } from "../../services/userService";
import { timeUtils } from '../../utilities/timeUtils';

const Notification = () => {
   const [notifications, setNotifications] = useState([]);
   const [error, setError] = useState('');

   useEffect(() => {
      document.body.classList.add('notification');

      const fetchNotifications = async () => {
         try {
            const response = await userService.getNotifications();
            setNotifications(response.data);
         } catch (err) {
            setError("Erreur lors de la récupération des notifications");
         }
      };

      fetchNotifications();

      return () => {
         document.body.classList.remove('notification');
      };
   }, []);

   const toggleReadStatus = async (id, readStatus) => {
      try {
         if (readStatus) {
            await userService.markNotificationAsUnread(id);
         } else {
            await userService.markNotificationAsRead(id);
         }
         setNotifications((prevNotifications) =>
             prevNotifications.map((notif) =>
                 notif.id === id ? { ...notif, read: !readStatus } : notif
             )
         );
      } catch (err) {
         console.error("Erreur lors de la mise à jour de la notification :", err);
      }
   };

   const deleteNotification = async (id) => {
      try {
         await userService.deleteNotification(id);
         setNotifications((prevNotifications) =>
             prevNotifications.filter((notif) => notif.id !== id)
         );
      } catch (err) {
         console.error("Erreur lors de la suppression de la notification :", err);
      }
   };

   const renderMessage = (notif) => {
      // Si userNotif existe, concaténer le nom avec le message
      return notif.userNotif
          ? `${notif.userNotif.name} ${notif.message}`
          : notif.message;
   };

   const renderProfilePicture = (notif) => {
      // Si userNotif existe et a une photo de profil, l'utiliser, sinon une image par défaut
      return notif.userNotif && notif.userNotif.profilePicture
          ? notif.userNotif.profilePicture
          : '';
   };

   return (
       <div id='content-page' className='content-inner'>
          <Container>
             <Row>
                <Col sm="12">
                   <h4 className="card-title mb-3">Notifications</h4>
                </Col>
                <Col sm="12">
                   {notifications.length > 0 ? (
                       notifications.map((notif) => (
                           <Card key={notif.id} className="mb-3">
                              <Card.Body>
                                 <ul className="notification-list m-0 p-0">
                                    <li className="d-flex align-items-center justify-content-between">
                                       <div className="user-img img-fluid">
                                          <img
                                              src={renderProfilePicture(notif)} // Afficher l'image appropriée
                                              alt="user-img"
                                              className="rounded-circle avatar-40"
                                          />
                                       </div>
                                       <div className="w-100">
                                          <div className="d-flex justify-content-between">
                                             <div className="ms-3">
                                                <h6>{renderMessage(notif)}</h6> {/* Formater le message */}
                                                <p className="mb-0">{timeUtils(notif.createdAt)}</p>
                                             </div>
                                             <div className="d-flex align-items-center">
                                                <span className="btn btn-icon btn-primary-subtle btn-sm me-3"
                                                      onClick={() => toggleReadStatus(notif.id, notif.read)}>
                                                   <span className="btn-inner">
                                                      {notif.read ? (
                                                          <i className="material-symbols-outlined font-size-16">
                                                             visibility
                                                          </i>
                                                      ) : (
                                                          <i className="material-symbols-outlined font-size-16">
                                                             visibility_off
                                                          </i>
                                                      )}
                                                   </span>
                                                </span>
                                                <div className="card-header-toolbar d-flex align-items-center">
                                                   <Dropdown>
                                                      <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                         more_horiz
                                                      </Dropdown.Toggle>
                                                      <Dropdown.Menu className="dropdown-menu-right">
                                                         <Dropdown.Item
                                                             onClick={() => toggleReadStatus(notif.id, notif.read)}
                                                             className='d-flex align-items-center'>
                                                            <span className="material-symbols-outlined me-2 md-18">
                                                               visibility
                                                            </span>
                                                            {notif.read ? 'Mark as Unread' : 'Mark as Read'}
                                                         </Dropdown.Item>
                                                         <Dropdown.Item onClick={() => deleteNotification(notif.id)}
                                                                        className='dropdown-item d-flex align-items-center'>
                                                            <span className="material-symbols-outlined me-2 md-18">
                                                               delete
                                                            </span>
                                                            Delete
                                                         </Dropdown.Item>
                                                      </Dropdown.Menu>
                                                   </Dropdown>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </Card.Body>
                           </Card>
                       ))
                   ) : (
                       <p>Aucune notification pour le moment</p>
                   )}
                   {error && <p className="text-danger">{error}</p>}
                </Col>
             </Row>
          </Container>
       </div>
   );
};

export default Notification;
