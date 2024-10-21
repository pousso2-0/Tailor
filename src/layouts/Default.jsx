import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/partials/HeaderStyle/Header";
import RightSidebar from "../components/partials/SidebarStyle/RightSidebar";
import Sidebar from "../components/partials/SidebarStyle/Sidebar";
import SettingOffCanvas from "../components/setting/SettingOffCanvas";
import Footer from "../components/partials/FooterStyle/Footer";
import SuggestPeople from "../components/partials/Aside/SuggestPeople";
import { Col } from "react-bootstrap";

const Default = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="position-relative">
          <Header />
          <Outlet />
        </div>
        <Col lg={4}>
          <SuggestPeople />
        </Col>
      </div>
      <RightSidebar />
      <Footer />
      <SettingOffCanvas />
    </>
  );
};

export default Default;
