import { useState } from "react";
import Swiper from "react-id-swiper";
import { ProductGridWrapperTwo } from "../ProductThumb";

const ProductSliderFive = ({ products }) => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const params = {
    loop: false,
    slidesPerView: 4,
    grabCursor: true,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      769: {
        slidesPerView: 3
      },
      576: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <div className="product-slider-wrap">
      <Swiper {...params} getSwiper={setSwiper}>
        <ProductGridWrapperTwo products={products} sliderClass="swiper-slide" />
      </Swiper>

      <button
        className="swiper-button-prev ht-swiper-button-nav"
        onClick={goPrev}
      >
        <i className="icon-arrow-left" />
      </button>
      <button
        className="swiper-button-next ht-swiper-button-nav"
        onClick={goNext}
      >
        <i className="icon-arrow-right" />
      </button>
    </div>
  );
};

export default ProductSliderFive;
