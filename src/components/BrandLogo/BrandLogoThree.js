import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";

const BrandLogoThree = ({ title, brandLogoData }) => {
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
    slidesPerView: 6,
    grabCursor: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      1024: {
        slidesPerView: 6
      },
      769: {
        slidesPerView: 5
      },
      576: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };

  return (
    <div className="brand-logo-area space-pb--r100">
      <div className="custom-container">
        <Row>
          <Col md={12}>
            <div className="section-title section-title--style-two heading-s1 space-mb--30">
              <h4>{title}</h4>
            </div>
            <div className="header-slider-nav">
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
        <Row>
          <Col md={12}>
            <Swiper {...params} getSwiper={setSwiper}>
              {brandLogoData &&
                brandLogoData.map((single, key) => {
                  return (
                    <div className="item" key={key}>
                      <div className="cl-logo">
                        <img src={single.image} alt="cl_logo" />
                      </div>
                    </div>
                  );
                })}
            </Swiper>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BrandLogoThree;
