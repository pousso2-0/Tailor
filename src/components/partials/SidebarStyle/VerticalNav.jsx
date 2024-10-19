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
        eventKey: 'friends-menu',
        icon: 'people',
        label: 'Notification',
        path: '/dashboards/app/friend-list',
        tooltip: 'Friend List',
    },
    {
        eventKey: 'message-menu',
        icon: 'chat',
        label: 'Message',
        path: '/chat/index',
        tooltip: 'Chat',
    },
    {
        eventKey: 'store-menu',
        icon: 'storefront',
        label: 'Store',
        subItems: [
            { path: '/dashboards/store/store-category-grid', label: 'Category Grid', tooltip: 'Category Grid', miniIcon: 'CG' },
            { path: '/dashboards/store/store-category-list', label: 'Category List', tooltip: 'Category List', miniIcon: 'CL' },
            { path: '/dashboards/store/store-detail', label: 'Store Detail', tooltip: 'Store Detail', miniIcon: 'SD' },
            { path: '/dashboards/store/product-detail', label: 'Product Detail', tooltip: 'Product Detail', miniIcon: 'PD' },
            { path: '/dashboards/store/store-checkout', label: 'Checkout', tooltip: 'Checkout', miniIcon: 'CO' },
        ],
    },
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
