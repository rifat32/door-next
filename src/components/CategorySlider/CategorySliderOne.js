import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";

const CategorySliderOne = ({ title, text, url, categorySliderData }) => {
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
        slidesPerView: 2
      }
    }
  };
  return (
    <div className="category-slider-area space-pb--r100">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="category-overlap">
              <Row className="align-items-center">
                <Col lg={3} md={4}>
                  <div className="text-center text-md-left mb-4 mb-md-0">
                    <h4>{title}</h4>
                    <p className="mb-2">{text}</p>
                    <Link href={url}>
                      <a className="btn btn-line-fill btn-sm">View All</a>
                    </Link>
                  </div>
                </Col>
                <Col lg={9} md={8}>
                  <Swiper {...params} getSwiper={setSwiper}>
                    {categorySliderData &&
                      categorySliderData.map((single, key) => {
                        return (
                          <div className="item" key={key}>
                            <div className="categories-box">
                              <Link href={single.url}>
                                <a>
                                  <i className={single.iconClass} />
                                  <span>{single.title}</span>
                                </a>
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                  </Swiper>
                  <div className="slider-nav-wrapper">
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategorySliderOne;
