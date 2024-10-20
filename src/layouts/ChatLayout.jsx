import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/partials/HeaderStyle/Header";
import RightSidebar from "../components/partials/SidebarStyle/RightSidebar";
import Sidebar from "../components/partials/SidebarStyle/Sidebar";
import SettingOffCanvas from "../components/setting/SettingOffCanvas";


const ChatLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="position-relative">
          <Header />
          <Outlet />
        </div>
      </div>
      <RightSidebar />
      <SettingOffCanvas />
    </>
  );
};

export default ChatLayout;
