import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// COMPONENTS
import Hero from "../components/home/Hero";
import ProductGallery from "../components/product_gallery/ProductGallery";
import AboutSection from "../components/AboutSection";
import ProductSlider from "../components/ProductSlider";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/cjsAction";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.cjs);
  useEffect(() => {
    dispatch(getProducts());
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <ProductGallery
        loading={loading}
        products={products}
        showPagination={false}
        productsPerPage={6}
      />
      <AboutSection />
      <ProductSlider
        sliderTitle={"You may also like"}
        startIndex={6}
        products={products}
        loading={loading}
      />
    </>
  );
};

export default Home;
