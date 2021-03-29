import React from "react";

// COMPONENTS
import ProductGallery from "../components/ProductGallery";
import Breadcrumb from "../components/Breadcrumb";

const Category = () => {
  return (
    <div className="category">
      <div className="category__header">
        <Breadcrumb />
        <h1>Title</h1>
        <p>Sort by</p>
      </div>
      <ProductGallery show={7} />
    </div>
  );
};

export default Category;
