import React from "react";
import { Dropdown, Card } from "react-bootstrap";

const ShoppingCart = () => {
  return (
    <Dropdown as="li" className="nav-items">
      <Dropdown.Toggle as="a" className="d-flex align-items-center" id="mail-drop">
        <span className="material-symbols-outlined position-relative">
          shopping_bag
          <span className="bg-primary text-white shopping-badge">3</span>
        </span>
        <span className="mobile-text d-none ms-3">Shopping Cart</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="sub-drop header-notification" data-bs-popper="static">
        <Card className="shadow m-0">

        </Card>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ShoppingCart;