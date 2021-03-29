import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__group">
          <p className="footer__title">Support</p>
          <p className="footer__link">Postage</p>
          <p className="footer__link">Returns / Exchanges</p>
          <p className="footer__link">Contact Us</p>
          <p className="footer__link">Size Chart</p>
          <p className="footer__link">Gift Cards</p>
        </div>
        <div className="footer__group">
          <p className="footer__title">Info</p>
          <p className="footer__link">About Us</p>
          <p className="footer__link">Fabric Sustainability &#38; Care</p>
          <p className="footer__link">Stockists</p>
        </div>
        <div className="footer__group">
          <p className="footer__title">Follow Us</p>
          <p className="footer__link">Postage</p>
          <p className="footer__link">Returns / Exchanges</p>
          <p className="footer__link">Contact Us</p>
          <p className="footer__link">Size Chart</p>
          <p className="footer__link">Gift Cards</p>
        </div>
        <div className="footer__group">
          <div className="footer__newsletter">
            <p className="footer__title">Join Our Newsletter</p>
            <p className="footer__text">
              Enter your details below to receive exclusive updates about
              releases, discounts and events.
            </p>
            <form className="footer__form">
              <input
                name="Email"
                type="text"
                placeholder="Enter your email.."
              />
              <button type="submit" className="btn-arrow">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
