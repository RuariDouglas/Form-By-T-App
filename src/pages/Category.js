import React from "react";

// COMPONENTS
import ProductGallery from "../components/ProductGallery";

const Category = () => {
  return (
    <div className="category">
      <div className="category__header">
        <p>Breadcrumb - Here</p>
        <h1>Title</h1>
        <p>Sort by</p>
      </div>
      <ProductGallery show={7} />
    </div>
  );
};

export default Category;
