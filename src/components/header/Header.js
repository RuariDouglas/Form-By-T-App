import React, { useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import SideNav from "./SideNav";
import Links from "./Links";

// IMAGES
import Logo from "../../images/logo.png";
import LogoWebp from "../../images/logo.webp";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <>
      {navToggle && <SideNav />}
      <div className="header">
        <div className="logo-container">
          <picture>
            <source srcSet={LogoWebp} type="image/webp" />
            <source srcSet={Logo} type="image/png" />
            <img src={Logo} alt="Form By T Logo" />
          </picture>
        </div>
        <div className="menu-container">
          <ul className="menu">
            <li className="menu__item">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="menu__item menu__item--wDropdown">
              <Link className="link" to="/">
                Shop
              </Link>
              {/* DROPDOWN MENU */}
              <div className="dropdown">
                <Links />
              </div>
            </li>
            <li className="menu__item">
              <Link className="link" to="/">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="accounts-container">
          <Link className="link" to="/">
            Login &nbsp;
          </Link>
          <Link className="link" to="/">
            Cart
          </Link>
        </div>
        {/* HAMBURGER */}
        <div onClick={() => setNavToggle(!navToggle)} className="hamburger">
          <div className={`hamburger__line ${navToggle ? "rotate" : ""}`}></div>
          <div
            className={`hamburger__line ${navToggle ? "rotate2" : ""}`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Header;
