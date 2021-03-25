import React from "react";

const SideNav = () => {
  return (
    <div className="sideNav">
      <div className="scrollable">
        <div className="links-container">
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
        <div className="accounts-container--sidenav">
          <a className="link" href="#">
            Login &nbsp;
          </a>
          <a className="link" href="#">
            Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
