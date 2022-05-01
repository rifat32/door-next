import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import Countdown from "react-countdown";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ProductGridWrapperTwo } from "../ProductThumb";
import Renderer from "../Countdown/Renderer";

const ProductSliderThree = ({ title, products, dateTime }) => {
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
    <div className="product-slider-area space-pb--r100">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-title section-title--style-two space-mb--25 d-flex justify-content-between align-items-center">
              <h2>{title}</h2>
              <div className="countdown">
                <AiOutlineClockCircle />{" "}
                <Countdown date={new Date(dateTime)} renderer={Renderer} />
              </div>
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

export default ProductSliderThree;
