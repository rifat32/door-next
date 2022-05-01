import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HeroSliderOne = ({ heroSliderData }) => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <FiChevronLeft />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <FiChevronRight />
      </button>
    )
  };
  return (
    <div className="hero-slider space-pb--r100">
      <div className="hero-slider__wrapper">
        <Swiper {...params}>
          {heroSliderData &&
            heroSliderData.map((single, key) => {
              return (
                <div
                  className="hero-slider__slide bg-image"
                  style={{ backgroundImage: `url(${single.backgroundImage})` }}
                  key={key}
                >
                  <div className="hero-slider__content-wrapper">
                    <Container>
                      <Row>
                        <Col lg={6}>
                          <div className="hero-slider__content overflow-hidden">
                            <h5 className="mb-3 font-weight-light sub-title">
                              {single.subtitle}
                            </h5>
                            <h2 className="space-mb--20 title">
                              {single.title}
                            </h2>
                            <Link href={single.url}>
                              <a className="btn btn-fill-out rounded-0 text-uppercase slider-link">
                                Shop Now
                              </a>
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderOne;
