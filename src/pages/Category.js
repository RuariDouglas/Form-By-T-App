import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// COMPONENTS
import ProductGallery from "../components/product_gallery/ProductGallery";
import Breadcrumb from "../components/Breadcrumb";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/cjsAction";

const Category = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const products = useSelector((state) => state.cjs);
  console.log(products);
  const categoryTitle = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getProducts());
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
