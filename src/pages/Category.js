import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// COMPONENTS
import ProductGallery from "../components/product_gallery/ProductGallery";
import Breadcrumb from "../components/Breadcrumb";
// COMMERCE
import { commerce } from "../lib/commerce";

const Category = () => {
  const location = useLocation();
  const categoryTitle = location.pathname.split("/")[2];
  // Fetch and set products
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    console.log(products);
  };
  useEffect(() => {
    fetchProducts();
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
