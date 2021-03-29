import React, { useEffect } from "react";

// COMPONENTS
import ProductGallery from "../components/product_gallery/ProductGallery";
import Breadcrumb from "../components/Breadcrumb";

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="category">
      <div className="category__header">
        <Breadcrumb />
        <h1>Title</h1>
        <p>Sort by</p>
      </div>
      <ProductGallery showPagination={true} productsPerPage={10} />
    </div>
  );
};

export default Category;
