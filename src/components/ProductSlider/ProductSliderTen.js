import Swiper from "react-id-swiper";
import { ProductGridWrapperFive } from "../ProductThumb";

const ProductSliderTen = ({ products }) => {
  const params = {
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    }
  };
  return (
    <div className="product-slider-wrap product-slider-wrap--custom-bullet">
      <Swiper {...params}>
        <ProductGridWrapperFive
          products={products}
          sliderClass="swiper-slide"
          bottomSpace="space-mb--30"
        />
      </Swiper>
    </div>
  );
};

export default ProductSliderTen;
