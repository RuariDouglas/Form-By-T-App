import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <ul className="dropdown__group">
        <li className="dropdown__item">
          <Link className="dropdown__link" to="/collections/new-arrivals">
            <span>NEW ARRIVALS</span>
          </Link>
        </li>
        <li className="dropdown__item">
          <Link className="dropdown__link" to="/collections/dresses">
            Dresses
          </Link>
        </li>
        <li className="dropdown__item">
          <Link className="dropdown__link" to="/collections/tops">
            Tops
          </Link>
        </li>
        <li className="dropdown__item">
          <Link className="dropdown__link" to="/collections/jackets">
            Jackets
          </Link>
        </li>
      </ul>
      {/* GROUP 2 */}
      <ul className="dropdown__group">
        <li className="dropdown__item">
          <Link className="dropdown__link" to="/collections/pants">
            Pants
          </Link>
        </li>
        <li className="dropdown__item">
          <Link className="dropdown__link" to="/collections/skirts">
            Skirts
          </Link>
        </li>
        <li className="dropdown__item">
          <Link className="dropdown__link" to="/collections/shorts">
            Shorts
          </Link>
        </li>
        <li className="dropdown__item">
          <Link className="dropdown__link" to="/collections/jumpsuits">
            Jumpsuits
          </Link>
        </li>
      </ul>
      {/* GROUP 3 */}
      <ul className="dropdown__group">
        <li className="dropdown__item">
          <Link className="dropdown__link" to="/collections/bags">
            Bags
          </Link>
        </li>
        <li className="dropdown__item">
          <Link className="dropdown__link" to="/collections/masks">
            Face Masks
          </Link>
        </li>
        <li className="dropdown__item">
          <Link className="dropdown__link" to="/collections/hats">
            Hats
          </Link>
        </li>
        <li className="dropdown__item">
          <Link className="dropdown__link" to="/collections/hair-accessories">
            Hair Accessories
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Links;
