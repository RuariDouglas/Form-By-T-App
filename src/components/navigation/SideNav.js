import React from "react";
// ICONS/IMAGES
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import CloseIcon from "@material-ui/icons/Close";
// COMPONENTS
import DropdownLinks from "./DropdownLinks";

const SideNav = ({ menuStatus, setMenuStatus }) => {
  return (
    <nav className="side-nav">
      <CloseIcon
        className="close-icon"
        onClick={() => setMenuStatus(!menuStatus)}
      />
      <ul aria-label="Menu Links" className="main-menu">
        <li className="main-menu__item">
          <a href="CHANGEME.COM" className="main-menu__link">
            Home
          </a>
        </li>
        <li className="main-menu__item">
          <a className="main-menu__link">
            <strong>Shop</strong>
          </a>
          <div className="dropdown">
            <DropdownLinks />
          </div>
        </li>
        <li className="main-menu__item">
          <a href="CHANGEME.COM" className="menu__link">
            About
          </a>
        </li>
      </ul>
      <ul aria-label="Account Links" className="account-menu">
        <a href="CHANGEME.COM" className="account-menu__link">
          Login
        </a>
        <a href="CHANGEME.COM" className="account-menu__link">
          <ShoppingCartSharpIcon />
        </a>
      </ul>
    </nav>
  );
};

export default SideNav;
