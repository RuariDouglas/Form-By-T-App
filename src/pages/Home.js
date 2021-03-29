import React, { useEffect } from "react";

// COMPONENTS
import Hero from "../components/home/Hero";
import ProductGallery from "../components/product_gallery/ProductGallery";
import AboutSection from "../components/AboutSection";
import ProductSlider from "../components/ProductSlider";

// IMAGES
import ProductImage from "../images/hero.jpeg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <ProductGallery showPagination={false} productsPerPage={6} />
      <AboutSection />
      <ProductSlider
        sliderTitle={"You may also like"}
        show={12}
        products={ProductImage}
      />
    </>
  );
};

export default Home;
