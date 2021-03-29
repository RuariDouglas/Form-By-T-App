import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// PRODUCTS
import dummyProducts from "../DummyProducts";

const ProductGallery = (props) => {
  const show = props.show;
  return (
    <div className="gallery">
      {dummyProducts.map((product, index) => {
        if (index < show) {
          return (
            <Link
              key={uuidv4()}
              className="gallery__link"
              to={`/${product.id}`}
            >
              <div className="gallery__product">
                <img src={product.imgUrl} alt={product.title} />
                <h3>{product.title}</h3>
                <h5>{product.price}</h5>
              </div>
            </Link>
          );
        } else return;
      })}
    </div>
  );
};

export default ProductGallery;
