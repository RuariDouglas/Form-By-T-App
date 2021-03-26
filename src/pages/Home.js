import React from "react";

// COMPONENTS
import Hero from "../components/home/Hero";
import ProductGallery from "../components/ProductGallery";
import AboutSection from "../components/AboutSection";
import ProductSlider from "../components/ProductSlider";

// IMAGES
import ProductImage from "../images/hero.jpeg";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductGallery show={6} />
      <AboutSection />
      <ProductSlider show={12} products={ProductImage} />
    </>
  );
};

export default Home;
