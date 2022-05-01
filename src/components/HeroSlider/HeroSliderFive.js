import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HeroSliderFive = ({ heroSliderData }) => {
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
      <div className="custom-container">
        <Row>
          <Col xl={7} lg={9} className="offset-lg-3">
            <div className="hero-slider__wrapper hero-slider__wrapper--style-three mb-4 mb-xl-0">
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
                            <div className="hero-slider__content hero-slider__content--style-four overflow-hidden">
                              <h5 className="mb-3 font-weight-light sub-title">
                                {single.subtitle}
                              </h5>
                              <h2 className="space-mb--20 title">
                                {single.title}
                              </h2>
                              <Link href={single.url}>
                                <a className="btn btn-fill-out btn-radius text-uppercase slider-link">
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
          <Col xl={2} lg={12}>
            <Row>
              <Col xl={12} lg={6}>
                <div className="sale-banner sale-banner--style-two px-0">
                  <Link href="/shop/grid-left-sidebar">
                    <a className="hover-effect">
                      <div className="el-title text-white">
                        <h6>Tphone Collection</h6>
                        <span>25% off</span>
                      </div>
                      <div className="el-img">
                        <img
                          src="/assets/images/banner/shop_banner_img6.png"
                          alt="shop_banner_img6"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </Col>
              <Col xl={12} lg={6}>
                <div className="sale-banner sale-banner--style-two bg--blue-three px-0 mb-0">
                  <Link href="/shop/grid-left-sidebar">
                    <a className="hover-effect">
                      <div className="el-title-two text-white text-right w-100">
                        <h6>JAC Computer</h6>
                        <span>
                          <u>Shop Now</u>
                        </span>
                      </div>
                      <div className="el-img">
                        <img
                          src="/assets/images/banner/shop_banner_img7.png"
                          alt="shop_banner_img7"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSliderFive;
