import React, { useEffect } from "react";

// COMPONENTS
import Breadcrumb from "../components/Breadcrumb";

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="product">
      <Breadcrumb />
    </div>
  );
};

export default Product;
