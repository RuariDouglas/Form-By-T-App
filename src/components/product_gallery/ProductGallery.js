import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// PRODUCTS
import dummyProducts from "../../DummyProducts";

// COMPONENTS
import Pagination from "./Pagination";

const ProductGallery = (props) => {
  const productsPerPage = props.productsPerPage;
  const showPagination = props.showPagination;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = dummyProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // CHANGE PAGE
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // // GRAB THE PRODUCTS
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     // const res = await axios.get("");
  //     setProducts(res.data);
  //     setLoading(false);
  //   };
  //   fetchProducts();
  // }, []);
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
              to={`/collections/${product.category}/${product.sku}`}
            >
              <div className="gallery__product">
                <img src={product.imgUrl} alt={product.title} />
                <h3>{product.title}</h3>
                <h5>{product.price}</h5>
              </div>
            </Link>
          );
        })}
      </div>
      {showPagination && (
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={dummyProducts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default ProductGallery;
