import React, { useState } from "react";

// COMPONENTS
import SideNav from "./SideNav";
import DropdownLinks from "./DropdownLinks";

// ICONS/IMAGES
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import LogoPng from "../../images/logo.png";
import LogoWeb from "../../images/logo.webp";

const Nav = () => {
  // STATE
  const [menuStatus, setMenuStatus] = useState(false);
  const [dropdownStatus, setDropdownStatus] = useState(false);
  // FUNCTIONS
  const showDropdown = (e) => {
    e.preventDefault();
    setDropdownStatus(!dropdownStatus);
  };

  return (
    <>
      {menuStatus && (
        <SideNav menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      )}
      <header>
        {/* MAIN MENU LINKS */}
        <div className="nav-container">
          <nav aria-label="Menu Links" className="nav--menu">
            <a href="CHANGEME.COM" className="nav--menu__link">
              Home
            </a>
            <a
              href="CHANGEME.COM"
              onClick={showDropdown}
              className="nav--menu__link nav--menu__link--store"
            >
              Shop
            </a>
            {/* DROPDOWN */}
            {dropdownStatus && (
              <nav className="nav--menu__dropdown">
                <DropdownLinks />
              </nav>
            )}
            <a href="CHANGEME.COM" className="nav--menu__link">
              About
            </a>
          </nav>
        </div>
        <div className="logo-container">
          <picture>
            <source srcSet={LogoWeb} type="image/webp" />
            <source srcSet={LogoPng} type="image/png" />
            <img className="logo" src={LogoPng} alt="Form By T Logo" />
          </picture>
        </div>
        {/* MAIN MENU LINKS */}
        <div className="nav-container">
          <nav aria-label="Account Links" className="nav--account">
            <a href="CHANGEME.COM" className="nav--account__link">
              Login
            </a>
            <a href="CHANGEME.COM" className="nav--account__link">
              <ShoppingCartSharpIcon />
            </a>
          </nav>
        </div>
        <div
          onClick={() => setMenuStatus(!menuStatus)}
          className="hamburger"
        ></div>
      </header>
    </>
  );
};

export default Nav;
