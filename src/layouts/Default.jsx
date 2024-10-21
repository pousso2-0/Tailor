import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/partials/HeaderStyle/Header";
import RightSidebar from "../components/partials/SidebarStyle/RightSidebar";
import Sidebar from "../components/partials/SidebarStyle/Sidebar";
import SettingOffCanvas from "../components/setting/SettingOffCanvas";
import Footer from "../components/partials/FooterStyle/Footer";

const Default = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content" style={{ minHeight: "100vh" }}>
        <div className="position-relative">
          <Header />
          <Outlet />
        </div>
      </div>
      <RightSidebar />
      <Footer />
      <SettingOffCanvas />
    </>
  );
};

export default Default;
