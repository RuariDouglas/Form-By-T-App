import React from "react";
import ImageZoom from "react-medium-image-zoom";

// DUMMY IMAGE
import DummyImage from "../../images/hero.jpeg";
const ProductImages = () => {
  return (
    <div className="product-images">
      <div className="product-images__hero">
        <ImageZoom
          image={{
            src: DummyImage,
            alt: "Golden Gate Bridge",
            className: "img",
            style: { width: "50em" },
          }}
          zoomImage={{
            src: "bridge-big.jpg",
            alt: "Golden Gate Bridge",
          }}
        />
      </div>
      <div className="product-images__secondary">
        <img src={DummyImage} alt="" className="secondary__img" />
      </div>
    </div>
  );
};

export default ProductImages;
