import React from "react";

// IMAGES
import FormByT from "../images/formbyt.svg";

const AboutSection = () => {
  return (
    <section className="about-section">
      <img src={FormByT} alt="Form By T" />
      <p>
        Form By T is a conscious brand upholding sustainable values at every
        point of the process whilst balancing attention to detail and quality.
        The result is a collection that has been designed and produced locally
        with a considered trans-seasonal focus. Every piece is made to order
        with care by Tessa in her Melbourne home studio.
      </p>
    </section>
  );
};

export default AboutSection;
