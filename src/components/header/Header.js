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
            <li className="menu__item menu__item--wDropdown">
              <a className="link" href="#">
                Shop
              </a>
              {/* DROPDOWN MENU */}
              <div className="dropdown">
                {/* GROUP 1 */}
                <ul className="dropdown__group">
                  <li className="dropdown__item">
                    <a className="dropdown__link" href="#">
                      <span>NEW ARRIVALS</span>
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a className="dropdown__link" href="#">
                      Dresses
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a className="dropdown__link" href="#">
                      Tops
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a className="dropdown__link" href="#">
                      Jackets
                    </a>
                  </li>
                </ul>
                {/* GROUP 2 */}
                <ul className="dropdown__group">
                  <li className="dropdown__item">
                    <a className="dropdown__link" href="#">
                      Pants
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a className="dropdown__link" href="#">
                      Skirts
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a className="dropdown__link" href="#">
                      Shorts
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a className="dropdown__link" href="#">
                      Jumpsuits
                    </a>
                  </li>
                </ul>
                {/* GROUP 3 */}
                <ul className="dropdown__group">
                  <li className="dropdown__item">
                    <a className="dropdown__link" href="#">
                      Bags
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a className="dropdown__link" href="#">
                      Face Masks
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a className="dropdown__link" href="#">
                      Hats
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a className="dropdown__link" href="#">
                      Hair Accessories
                    </a>
                  </li>
                </ul>
              </div>
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
        {/* HAMBURGER */}
        <div className="hamburger"></div>
      </div>
    </>
  );
};

export default Header;
