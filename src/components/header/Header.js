import React from "react";

// IMAGES
import Logo from "../../images/logo.png";
import LogoWebp from "../../images/logo.webp";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <picture>
            <source srcset={LogoWebp} type="image/webp" />
            <source srcset={Logo} type="image/png" />
            <img src={Logo} alt="Form By T Logo" />
          </picture>
        </div>
        <div className="menu-container">
          <ul className="menu">
            <li className="menu__item">
              <a className="link" href="#">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a className="link" href="#">
                Shop
              </a>
            </li>
            <li className="menu__item">
              <a className="link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="accounts-container">
          <a className="link" href="#">
            Login |
          </a>
          <a className="link" href="#">
            Create Account
          </a>
        </div>
      </div>
      {/* Free shipping banner */}
      {/* Account Links */}
      {/* Main Navigation
          Logo
          Links / Dropdown
      */}
    </>
  );
};

export default Header;
