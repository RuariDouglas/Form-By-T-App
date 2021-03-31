import React, { useEffect } from "react";

// COMPONENTS
import Breadcrumb from "../components/Breadcrumb";
import ProductImages from "../components/product/ProductImages";

// DUMMY IMAGE

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="product">
      <Breadcrumb />
      <ProductImages />
    </div>
  );
};

export default Product;
