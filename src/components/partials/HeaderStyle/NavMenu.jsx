import React from "react";
import NavList from "./nav/NavList";

const NavMenu = ({ active, setActive }) => {
  return (
    <div className="d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between product-offcanvas">
        <div className="offcanvas offcanvas-end shadow-none iq-product-menu-responsive d-none d-xl-block" tabIndex="-1" id="offcanvasBottomNav">
          <div className="offcanvas-body">
            <NavList active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;