import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// PRODUCTS
import dummyProducts from "../DummyProducts";

const ProductGallery = (props) => {
  const show = props.show;
  const pagination = props.pagination;
  const [currentPage, setCurrentPage] = useState(1);
  let paginationBtns = [];
  // CALCULATE PAGINATION BTNS
  for (let i = 1; i <= Math.ceil(dummyProducts.length / show); i++) {
    paginationBtns.push(<div onClick={() => setCurrentPage(i)}>{i}</div>);
  }

  return (
    <>
      <div className="gallery">
        {dummyProducts.map((product, index) => {
          if (index * currentPage < show * currentPage) {
            return (
              <Link
                key={uuidv4()}
                className="gallery__link"
                to={`/collections/${product.category}/${product.sku}`}
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
      <div className="gallery__pagination">{paginationBtns}</div>
    </>
  );
};

export default ProductGallery;
