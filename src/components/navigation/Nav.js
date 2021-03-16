import React, { useState } from "react";

// COMPONENTS
import SideNav from "./SideNav";
import DropdownLinks from "./DropdownLinks";
import Advert from "./Advert";

// ICONS/IMAGES
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import LogoPng from "../../images/logo.png";
import LogoWeb from "../../images/logo.webp";
import NoiseBg from "../../images/bg-noise.png";

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
      <header className="full-nav wrapper">
        {/* MAIN MENU LINKS */}
        <nav aria-label="Menu Links" className="main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a href="CHANGEME.COM" className="link">
                Home
              </a>
            </li>
            <li className="main-nav__item main-nav__item--store">
              <a href="CHANGEME.COM" className="link link--store">
                Shop
              </a>

              <div className="dropdown">
                <div className="left-col">
                  <div className="dropdown__links">
                    <DropdownLinks />
                  </div>
                </div>
                <div className="right-col">
                  <div className="advert">
                    <Advert />
                  </div>
                </div>
              </div>
            </li>
            <li className="main-nav__item">
              <a href="CHANGEME.COM" className="link">
                About
              </a>
            </li>
          </ul>
          {/* DROPDOWN */}
        </nav>
        <div className="logo-container">
          <picture>
            <source srcSet={LogoWeb} type="image/webp" />
            <source srcSet={LogoPng} type="image/png" />
            <img className="logo" src={LogoPng} alt="Form By T Logo" />
          </picture>
        </div>
        {/* MAIN MENU LINKS */}
        <nav aria-label="Account Links" className="acc-nav">
          <ul className="acc-nav__list">
            <li className="acc-nav__item">
              <a href="CHANGEME.COM" className="link">
                Login
              </a>
            </li>
            <li className="acc-nav__item">
              <a href="CHANGEME.COM" className="link">
                {/* <ShoppingCartSharpIcon /> */}
                Cart
              </a>
            </li>
          </ul>
        </nav>
        <div
          onClick={() => setMenuStatus(!menuStatus)}
          className="hamburger"
        ></div>
      </header>
    </>
  );
};

export default Nav;
