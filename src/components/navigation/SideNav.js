import React from "react";
// ICONS/IMAGES
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import CloseIcon from "@material-ui/icons/Close";
// COMPONENTS
import DropdownLinks from "./DropdownLinks";

const SideNav = ({ menuStatus, setMenuStatus }) => {
  return (
    <div className="side-nav">
      <CloseIcon
        className="close-icon"
        onClick={() => setMenuStatus(!menuStatus)}
      />
      <nav aria-label="Menu Links" className="nav--menu">
        <a href="CHANGEME.COM" className="nav--menu__link">
          Home
        </a>
        <a className="nav--menu__link">
          <strong>Shop</strong>
        </a>
        <nav className="nav--dropdown">
          <DropdownLinks />
        </nav>
        <a href="CHANGEME.COM" className="nav--menu__link">
          About
        </a>
      </nav>
      <nav aria-label="Account Links" className="nav--account">
        <a href="CHANGEME.COM" className="nav--account__link">
          Login
        </a>
        <a href="CHANGEME.COM" className="nav--account__link">
          <ShoppingCartSharpIcon />
        </a>
      </nav>
    </div>
  );
};

export default SideNav;
