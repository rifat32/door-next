import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HeroSliderFour = ({ heroSliderData }) => {
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
    <div className="hero-slider">
      <div className="hero-slider__wrapper hero-slider__wrapper--style-two">
        <Swiper {...params}>
          {heroSliderData &&
            heroSliderData.map((single, key) => {
              return (
                <div
                  className="hero-slider__slide hero-slider__slide--style-three bg-image overlay-bg--40"
                  style={{
                    backgroundImage: `url(${single.backgroundImage})`
                  }}
                  key={key}
                >
                  <div className="hero-slider__content-wrapper hero-slider__content-wrapper--round-space">
                    <Container>
                      <Row className="justify-content-center">
                        <Col lg={7}>
                          <div className="hero-slider__content hero-slider__content--style-three overflow-hidden text-center">
                            <h5 className="mb-3 font-weight-light bg-strip sub-title">
                              {single.subtitle}
                            </h5>
                            <h2 className="space-mb--20 title">
                              {single.title}
                            </h2>
                            <p className="text">{single.text}</p>
                            <Link href={single.url}>
                              <a className="btn btn-white slider-link">
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

export default HeroSliderFour;
