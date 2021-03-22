import React from "react";

// IMAGES
import HeroImg from "../../images/hero.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__advert">
        <div className="hero__text">
          <h2>
            SU <br />
            MMER <br />
            _COLL <br />
            ECTION
          </h2>
        </div>
        <img className="hero__img" src={HeroImg} alt="Summer Collection Hero" />
      </div>
    </div>
  );
};

export default Hero;
