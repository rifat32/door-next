import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { ProductGridWrapperTwo } from "../ProductThumb";

const ProductSliderOne = ({ title, products }) => {
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
    <div className="product-slider-area space-pt--r100 space-pb--r100">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="section-title text-center space-mb--25">
              <h2>{title}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="product-slider-wrap">
              <Swiper {...params} getSwiper={setSwiper}>
                <ProductGridWrapperTwo
                  products={products}
                  sliderClass="swiper-slide"
                />
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductSliderOne;
