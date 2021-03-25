import React from "react";

// COMPONENTS
import Hero from "../components/home/Hero";
import ProductGallery from "../components/ProductGallery";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductGallery show={6} />
      <AboutSection />
    </>
  );
};

export default Home;
