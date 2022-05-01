import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HeroSliderTwo = ({ heroSliderData }) => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // },
    // renderPrevButton: () => (
    //   <button className="swiper-button-prev ht-swiper-button-nav">
    //     <FiChevronLeft />
    //   </button>
    // ),
    // renderNextButton: () => (
    //   <button className="swiper-button-next ht-swiper-button-nav">
    //     <FiChevronRight />
    //   </button>
    // )
  };
  return (
    <div className="hero-slider space-pb--r100 space-pt--25">
      <Container>
        <Row>
          <Col lg={9} className="ml-auto">
            <div className="hero-slider__wrapper">
              <Swiper {...params}>
                {heroSliderData &&
                  heroSliderData.map((single, key) => {
                    return (
                      <div
                        className="hero-slider__slide bg-image"
                        style={{
                          backgroundImage: `url(${single.backgroundImage})`
                        }}
                        key={key}
                      >
                        <div className="hero-slider__content-wrapper hero-slider__content-wrapper--round-space">
                          <Col lg={8}>
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
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSliderTwo;
