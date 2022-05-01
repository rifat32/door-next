import { Fragment } from "react";
import Link from "next/link";
import Swiper from "react-id-swiper";
import { getDiscountPrice } from "../../lib/product";
import { ProductRating } from "../Product";

const ProductSliderEight = ({ title, products }) => {
  const params = {
    loop: false,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav ht-swiper-button-nav--style-two">
        <i className="icon-arrow-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav ht-swiper-button-nav--style-two">
        <i className="icon-arrow-right" />
      </button>
    )
  };

  var chunkArr = [];
  while (products.length > 0) {
    var chunk = products.splice(0, 3);
    chunkArr.push(chunk);
  }

  return (
    <Fragment>
      <div className="section-title section-title--style-two heading-s1 d-flex justify-content-between align-items-center space-mb--30">
        <h4>{title}</h4>
        <Link href="/shop/grid-left-sidebar">
          <a className="text-default">View All</a>
        </Link>
      </div>
      <div className="product-slider-wrap">
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
                          <img
                            className="product-hover-image"
                            src={product.thumbImage[1]}
                            alt=""
                          />
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
                            <span className="price">${discountedPrice}</span>
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
    </Fragment>
  );
};

export default ProductSliderEight;
