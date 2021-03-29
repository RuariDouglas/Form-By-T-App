import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// COMPONENTS
import ProductGallery from "../components/product_gallery/ProductGallery";
import Breadcrumb from "../components/Breadcrumb";

const Category = () => {
  const location = useLocation();
  const categoryTitle = location.pathname.split("/")[2];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="category">
      <div className="category__header">
        <Breadcrumb />
        <h1 className="category__title">{categoryTitle}</h1>
        <p className="category__sort">Sort by</p>
      </div>
      <ProductGallery showPagination={true} productsPerPage={10} />
    </div>
  );
};

export default Category;
