import React from "react";
import DropdownAdvert from "../../images/dropdown-advert.png";

const Advert = () => {
  return (
    <>
      <img src={DropdownAdvert} alt="Masks advert" className="advert__image" />
      <h3 className="advert__title">
        Be
        <br /> _careful
        <br /> out_there...
      </h3>
      <p className="advert__description">
        New 2 layer Summer mask using lightweight and breathable fabric.
        Reusable face mask with wire across bridge of the nose for an extra snug
        and comfortable fit. Two sizes available Small and Medium.
      </p>
      <a className="btn-arrow" href="#">
        View Masks
      </a>
    </>
  );
};

export default Advert;
