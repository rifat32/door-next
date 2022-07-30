import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Swiper from "react-id-swiper";
import { ProductGridWrapperTwo } from "../ProductThumb";

const ProductSliderTwo = ({ title, products, items }) => {
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
    <div className="product-slider-area space-pt--50">
      {/* <Row className="justify-content-center">
          <Col md={12}>
            <div className="section-title section-title--style-three text-center space-mb--40">
              <h2>{title}</h2>
              <div className="header-slider-nav header-slider-nav--style-two">
                <button
                  className="swiper-button-prev ht-swiper-button-nav"
                  onClick={goPrev}
                >
                  <IoIosArrowRoundBack />
                </button>
                <button
                  className="swiper-button-next ht-swiper-button-nav"
                  onClick={goNext}
                >
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </Col>
        </Row> */}
      <Row>
        <Col md={6}>
          <div className="section-title space-mb--25">
            <h2>{title}</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="product-slider-wrap">
            <Swiper {...params}>
              <ProductGridWrapperTwo
                products={products}
                sliderClass="swiper-slide"
                bottomSpace="space-mb--30"
              />
            </Swiper>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductSliderTwo;
