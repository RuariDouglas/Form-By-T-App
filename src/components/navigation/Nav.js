import React, { useState } from "react";

// COMPONENTS
import SideNav from "./SideNav";

// ICONS/IMAGES

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
        <nav aria-label="Menu Links" className="main-nav"></nav>
        <div className="logo-container">
          <picture>
            {/* <source srcSet={LogoWeb} type="image/webp" />
            <source srcSet={LogoPng} type="image/png" />
            <img className="logo" src={LogoPng} alt="Form By T Logo" /> */}
          </picture>
        </div>
        {/* MAIN MENU LINKS */}

        <div
          onClick={() => setMenuStatus(!menuStatus)}
          className="hamburger"
        ></div>
      </header>
    </>
  );
};

export default Nav;
