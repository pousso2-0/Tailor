import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import * as SettingSelector from "../../../store/setting/selectors";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import FriendRequests from "./FriendRequests";
import Notifications from "./Notifications";
import UserDropdown from "./UserDropdown";
import { useAuth } from "../../../context/AuthContext";

const Header = () => {
    const { isAuthenticated } = useAuth();

    const appName = useSelector(SettingSelector.app_name);
    const [active, setActive] = useState("home");

    const minisidebar = () => {
        const sidebarMini = document.getElementsByTagName("ASIDE")[0];
        sidebarMini.classList.toggle('sidebar-mini');
    };


    return (
        <>
            <div className="iq-top-navbar border-bottom">
                <Navbar expand="lg" variant="light" className="nav navbar navbar-expand-lg navbar-light iq-navbar p-lg-0">
                    <Container fluid className="navbar-inner">

                        <Logo appName={appName} minisidebar={minisidebar} />

                        <NavMenu active={active} setActive={setActive} />

                        <SearchBar />

                        <ul className="navbar-nav navbar-list">
                            <FriendRequests />
                            <Notifications />
                            {isAuthenticated && <UserDropdown />}
                        </ul>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;