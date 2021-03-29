import React from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import Links from "./Links";

const SideNav = () => {
  return (
    <div className="sideNav">
      <div className="scrollable">
        <div className="links-container">
          <Links />
        </div>
        <div className="accounts-container--sidenav">
          <Link className="link" href="#">
            Login &nbsp;
          </Link>
          <Link className="link" href="#">
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
