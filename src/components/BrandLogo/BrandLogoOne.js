import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";

const BrandLogoOne = ({ title, brandLogoData }) => {
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
    slidesPerView: 5,
    grabCursor: true,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      769: {
        slidesPerView: 4
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
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-title section-title--style-two space-mb--25">
              <h2>{title}</h2>
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
      </Container>
    </div>
  );
};

export default BrandLogoOne;
