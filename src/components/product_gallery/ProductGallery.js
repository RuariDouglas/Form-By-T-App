import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// COMPONENTS
import Pagination from "./Pagination";

const ProductGallery = (props) => {
  // NAVIGATE TO PRODUCT PAGE
  const location = useLocation();
  const path = location.pathname.split("/");
  console.log(path[2]);
  const pathToUse = (productSku) => {
    if (path.length === 2) {
      return `/products/${productSku}`;
    }
    if (path.length === 3) {
      return `/collections/${path[2]}/${productSku}`;
    }
  };

  const currentCategory = path[path.length - 1];

  // PRODUCTS
  const { products, loading } = props;
  // PAGINATION
  const { productsPerPage, showPagination } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <>
      <div className="gallery">
        {currentProducts.map((product, index) => {
          return (
            <Link
              key={uuidv4()}
              className="gallery__link"
              to={pathToUse(product.sku)}
            >
              <div className="gallery__product">
                <img src={product.media.source} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price.formatted}</p>
              </div>
            </Link>
          );
        })}
      </div>
      {showPagination && (
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default ProductGallery;
