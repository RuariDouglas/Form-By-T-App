import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// PRODUCTS
// NOTE!!! DUMMYPRODUCTS will be retrieved from an API call on the "Page component"
import dummyProducts from "../DummyProducts";
// SWIPER
// import Swiper core and required modules
import SwiperCore, { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper modules
SwiperCore.use([A11y]);

const ProductSlider = (props) => {
  const { productsPerPage, startIndex, sliderTitle, products, loading } = props;
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <>
      <div className="slider__header">
        <p>{sliderTitle}</p>
        <button className="btn-arrow">View All</button>
      </div>
      <div className="product-slider">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          scrollbar={{ draggable: true }}
        >
          {products.map((product, index) => {
            if (index < productsPerPage && index > startIndex) {
              return (
                <SwiperSlide key={uuidv4()}>
                  <Link className="slider__link" to={`/${product.sku}`}>
                    <div className="slider__product">
                      <img src={product.media.source} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h5>{product.price.formatted}</h5>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            } else return;
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ProductSlider;
