import { useState, Fragment } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Countdown from "react-countdown";
import Swiper from "react-id-swiper";
import { getDiscountPrice } from "../../lib/product";
import RendererTwo from "../../components/Countdown/RendererTwo";

const DealProductSlider = ({ title, products }) => {
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
    slidesPerView: 2,
    grabCursor: true,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <div className="deal-product-area  space-pb--r100">
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
            <div className="deal-product-wrapper">
              <Swiper {...params} getSwiper={setSwiper}>
                {products &&
                  products.map((product, key) => {
                    const discountedPrice = getDiscountPrice(
                      product.price,
                      product.discount
                    ).toFixed(2);
                    const productPrice = product.price.toFixed(2);
                    return (
                      <div className="deal-product" key={key}>
                        <div className="deal-product__image">
                          <Link
                            href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                            as={"/shop/product-basic/" + product.slug}
                          >
                            <a>
                              <img
                                src={product.thumbImage[0]}
                                alt="product_img1"
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="deal-product__info">
                          <h5 className="product-title">
                            <Link
                              href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                              as={"/shop/product-basic/" + product.slug}
                            >
                              <a>{product.name}</a>
                            </Link>
                          </h5>
                          <div className="product-price">
                            {product.discount ? (
                              <Fragment>
                                <span className="price">
                                  ${discountedPrice}
                                </span>
                                <del>${productPrice}</del>
                              </Fragment>
                            ) : (
                              <span className="price">${productPrice}</span>
                            )}
                          </div>
                          <div className="countdown-two countdown-two--style-two space-mt--20">
                            <Countdown
                              date={new Date(product.dealEnd)}
                              renderer={RendererTwo}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DealProductSlider;
