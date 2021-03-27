import React from "react";
import { Link } from "react-router-dom";

// PRODUCTS
// NOTE!!! DUMMYPRODUCTS will be retrieved from an API call on the "Page component"
import dummyProducts from "../DummyProducts";
// SWIPER
// import Swiper core and required modules
import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper modules
SwiperCore.use([A11y]);

const ProductSlider = (props) => {
  const show = props.show;
  const sliderTitle = props.sliderTitle;

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
              slidesPerView: 6,
            },
          }}
          scrollbar={{ draggable: true }}
        >
          {dummyProducts.map((product, index) => {
            if (index < show) {
              return (
                <SwiperSlide>
                  <Link className="slider__link" to={`/${product.id}`}>
                    <div className="slider__product">
                      <img src={product.imgUrl} alt={product.title} />
                      <h3>{product.title}</h3>
                      <h5>{product.price}</h5>
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
