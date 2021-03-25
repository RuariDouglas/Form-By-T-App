import React from "react";

// COMPONENTS
import Hero from "../components/home/Hero";
import ProductGallery from "../components/ProductGallery";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductGallery show={6} />
    </>
  );
};

export default Home;
