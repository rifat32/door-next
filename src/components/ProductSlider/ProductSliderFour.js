import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import Link from "next/link";
import { getDiscountPrice } from "../../lib/product";
import { ProductRating } from "../../components/Product";

const ProductSliderFour = ({ title, products }) => {
  const params = {
    loop: false,
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="icon-arrow-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="icon-arrow-right" />
      </button>
    ),
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      769: {
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

  var chunkArr = [];
  while (products.length > 0) {
    var chunk = products.splice(0, 3);
    chunkArr.push(chunk);
  }

  return (
    <div className="product-slider-area space-pb--r70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-title section-title--style-two space-mb--25">
              <h2>{title}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="product-slider-wrap product-slider-wrap--style-two">
              <Swiper {...params}>
                {chunkArr.map((chunk, key) => (
                  <div className="product-chunk" key={key}>
                    {chunk.map((product, key) => {
                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount
                      ).toFixed(2);
                      const productPrice = product.price.toFixed(2);
                      return (
                        <div className="widget-product" key={key}>
                          <div className="widget-product__image">
                            <Link
                              href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                              as={"/shop/product-basic/" + product.slug}
                            >
                              <a>
                                <img src={product.thumbImage[0]} alt="" />
                              </a>
                            </Link>
                          </div>
                          <div className="widget-product__content">
                            <h6 className="product-title">
                              <Link
                                href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                                as={"/shop/product-basic/" + product.slug}
                              >
                                <a>{product.name}</a>
                              </Link>
                            </h6>
                            <div className="product-price">
                              {product.discount ? (
                                <Fragment>
                                  <span className="price">
                                    ${discountedPrice}
                                  </span>
                                  <del>${productPrice}</del>
                                  <span className="on-sale">
                                    {product.discount}% Off
                                  </span>
                                </Fragment>
                              ) : (
                                <span className="price">${productPrice}</span>
                              )}
                            </div>
                            <div className="rating-wrap">
                              <ProductRating ratingValue={product.rating} />
                              <span className="rating-num">
                                ({product.ratingCount})
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductSliderFour;
