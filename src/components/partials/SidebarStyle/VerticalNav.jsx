import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import NavItemWithTooltip from './vericalnav/NavItemWithTooltip';
import AccordionMenu from './vericalnav/AccordionMenu';
import { useAuth } from '../../../context/AuthContext';


const menuItems = [
    {
        path: '/',
        icon: 'newspaper',
        label: 'Newsfeed',
        tooltip: 'Newsfeed',
    },
    {
        eventKey: 'profile-menu',
        icon: 'person',
        label: 'Profiles',
        path: '/dashboard/app/profile',
        tooltip: 'Profiles',
    },
    {
        eventKey: 'friends-menu',
        icon: 'people',
        label: 'Friend',
        path: '/dashboards/app/friend-list',
        tooltip: 'Friend List',
    },
    {
        eventKey: 'notification-menu',
        icon: 'people',
        label: 'Notification',
        path: '/dashboard/app/notification',
        tooltip: 'Notifications',
    },
    {
        eventKey: 'message-menu',
        icon: 'chat',
        label: 'Message',
        path: 'dashboard/app/chat',
        tooltip: 'Chat',
    },
    {
        eventKey: 'store-menu',
        icon: 'storefront',
        label: 'Store',
        path: 'dashboard/app/store',
    }
];



const VerticalNav = () => {
    const [activeMenu, setActiveMenu] = useState('');
    const { isAuthenticated } = useAuth();

    return (
        <Accordion as="ul" className="navbar-nav iq-main-menu" id="sidebar-menu">
            {menuItems.map((item, index) =>
                item.subItems ? (
                    <AccordionMenu
                        key={index}
                        eventKey={item.eventKey}
                        icon={item.icon}
                        label={item.label}
                        subItems={item.subItems}
                        onClick={() => setActiveMenu(item.eventKey)}
                    />
                ) : (
                    <NavItemWithTooltip key={index} path={item.path} icon={item.icon} label={item.label} tooltip={item.tooltip} />
                )
            )}
            {!isAuthenticated && (
                <NavItemWithTooltip
                    key="connexion"
                    path="/auth/sign-in"
                    icon="login"
                    label="Se connecter"
                    tooltip="Se connecter"
                />
            )}
        </Accordion>
    );
};

export default VerticalNav;