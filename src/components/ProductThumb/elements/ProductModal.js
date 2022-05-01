import Link from "next/link";
import { useState, useEffect, Fragment } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { getProductCartQuantity } from "../../../lib/product";
import { ProductRating } from "../../Product";
import { BsShield } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
import { GiSwapBag } from "react-icons/gi";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGoogleplus,
  IoLogoYoutube,
  IoLogoInstagram
} from "react-icons/io";
import { BACKEND } from "../../../../config";

const ProductModal = (props) => {
  const {
    product,
    discountedprice,
    productprice,
    cartitems,
    wishlistitem,
    compareitem,
    addtocart,
    addtowishlist,
    deletefromwishlist,
    addtocompare,
    deletefromcompare,
    addtoast
  } = props;

  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.qty
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const productCartQty = getProductCartQuantity(
    cartitems,
    product,
    selectedProductColor,
    selectedProductSize
  );
console.log(productCartQty)
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  // effect for swiper slider synchronize
  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  // swiper slider settings
  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true,
    effect: "fade"
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      className="product-quickview"
      centered
    >
      <Modal.Body>
        <Modal.Header closeButton></Modal.Header>
        <Row>
          <Col lg={6}>
            <div className="product-quickview__large-image-wrapper">
         
              <Swiper {...gallerySwiperParams}>
                {product.images &&
                  product.images.map((single, key) => {
                    return (
                      <div key={key}>
                        <div className="single-image">
                          <img src={`${BACKEND}/${single.file}` } className="img-fluid" alt="" />
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </div>
            <div className="product-quickview__small-image-wrapper">
              <Swiper {...thumbnailSwiperParams}>
                {product.images &&
                  product.images.map((image, i) => {
                    return (
                      <div key={i}>
                        <div className="single-image">
                          <img src={`${BACKEND}/${image.file}` } className="img-fluid" alt="image" />
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </div>
          </Col>
          <Col lg={6}>
            <div className="product-quickview__content">
              <h2 className="product-quickview__title space-mb--10">
                {product.name}
              </h2>
              <div className="product-quickview__price-rating-wrapper space-mb--10">
                <div className="product-quickview__price d-flex-align-items-center">
                  {product.discount ? (
                    <Fragment>
                      <span className="price">${discountedprice}</span>
                      <del>${productprice}</del>
                      <span className="on-sale">{product.discount}% Off</span>
                    </Fragment>
                  ) : (
                    <span className="price">${productprice}</span>
                  )}
                </div>
                {product.rating && product.rating > 0 ? (
                  <div className="product-quickview__rating-wrap">
                    <div className="product-quickview__rating">
                      <ProductRating ratingValue={product.rating} />
                      <span>({product.ratingCount})</span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="product-quickview__description space-mb--20">
                <p>{product.shortDescription}</p>
              </div>

              <div className="product-quickview__sort-info space-mb--20">
                <ul>
                  <li>
                    <BsShield /> 1 Year Brand Warranty
                  </li>
                  <li>
                    <AiOutlineReload /> 30 Days Return Policy
                  </li>
                  <li>
                    <GiSwapBag /> Cash on Delivery available
                  </li>
                </ul>
              </div>

              {product.variation ? (
                <div className="product-quickview__size-color">
                  <div className="product-quickview__color space-mb--10">
                    <div className="product-quickview__color__title">Color</div>
                    <div className="product-quickview__color__content">
                      {product.variation.map((single, i) => {
                        return (
                          <Fragment key={i}>
                            <input
                              type="radio"
                              value={single.color}
                              name="product-color"
                              id={single.color}
                              checked={
                                single.color === selectedProductColor
                                  ? "checked"
                                  : ""
                              }
                              onChange={() => {
                                setSelectedProductColor(single.color);
                                setSelectedProductSize(single.size[0].name);
                                setProductStock(single.size[0].stock);
                                setQuantityCount(1);
                              }}
                            />
                            <label
                              htmlFor={single.color}
                              style={{ backgroundColor: single.colorCode }}
                            ></label>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="product-quickview__size space-mb--20">
                    <div className="product-quickview__size__title">Size</div>
                    <div className="product-quickview__size__content">
                      {product.variation &&
                        product.variation.map((single) => {
                          return single.color === selectedProductColor
                            ? single.size.map((singleSize, i) => {
                                return (
                                  <Fragment key={i}>
                                    <input
                                      type="radio"
                                      value={singleSize.name}
                                      checked={
                                        singleSize.name === selectedProductSize
                                          ? "checked"
                                          : ""
                                      }
                                      id={singleSize.name}
                                      onChange={() => {
                                        setSelectedProductSize(singleSize.name);
                                        setProductStock(singleSize.stock);
                                        setQuantityCount(1);
                                      }}
                                    />
                                    <label htmlFor={singleSize.name}>
                                      {singleSize.name}
                                    </label>
                                  </Fragment>
                                );
                              })
                            : "";
                        })}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <hr />
              {product.affiliateLink ? (
                <div className="product-quickview__quality">
                  <div className="product-quickview__cart btn-hover">
                    <a
                      href={product.affiliateLink}
                      target="_blank"
                      className="btn btn-fill-out btn-addtocart"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              ) : (
                <Fragment>
                  <div className="product-quickview__button-wrapper d-flex align-items-center">
                    <div className="product-quickview__quantity">
                      <div className="cart-plus-minus">
                        <button
                          onClick={() =>
                            setQuantityCount(
                              quantityCount > 1 ? quantityCount - 1 : 1
                            )
                          }
                          className="qtybutton"
                        >
                          -
                        </button>
                        <input
                          className="cart-plus-minus-box"
                          type="text"
                          value={quantityCount}
                          readOnly
                        />

                        
                        <button
                          onClick={() =>
                            setQuantityCount(
                              quantityCount < productStock - productCartQty
                                ? quantityCount + 1
                                : quantityCount 
                            )
                          }
                          className="qtybutton"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {productStock && productStock > 0 ? (
                      <button
                        onClick={() =>
                          addtocart(
                            product,
                            addtoast,
                            quantityCount,
                            selectedProductColor,
                            selectedProductSize
                          )
                        }
                        disabled={productCartQty >= productStock}
                        className="btn btn-fill-out btn-addtocart space-ml--10"
                      >
                        <i className="icon-basket-loaded" /> Add To Cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-fill-out btn-addtocart"
                        disabled
                      >
              
                        Out of Stock
                      </button>
                    )}

                    <button
                      className={`product-quickview__compare ${
                        compareitem !== undefined ? "active" : ""
                      }`}
                      title={
                        compareitem !== undefined
                          ? "Added to compare"
                          : "Add to compare"
                      }
                      onClick={
                        compareitem !== undefined
                          ? () => deletefromcompare(product, addtoast)
                          : () => addtocompare(product, addtoast)
                      }
                    >
                      <i className="icon-shuffle" />
                    </button>

                    <button
                      className={`product-quickview__wishlist ${
                        wishlistitem !== undefined ? "active" : ""
                      }`}
                      title={
                        wishlistitem !== undefined
                          ? "Added to wishlist"
                          : "Add to wishlist"
                      }
                      onClick={
                        wishlistitem !== undefined
                          ? () => deletefromwishlist(product, addtoast)
                          : () => addtowishlist(product, addtoast)
                      }
                    >
                      <i className="icon-heart" />
                    </button>
                  </div>
                </Fragment>
              )}
              <hr />
              <ul className="product-quickview__product-meta">
                <li>
                  SKU: <span>{product.sku}</span>
                </li>
                <li>
                  Category: {product.category }
                  {/* {product.category &&
                    product.category.map((item, index, arr) => {
                      return (
                        <Link
                          href="/shop/grid-left-sidebar"
                          as={"/shop/grid-left-sidebar"}
                          key={index}
                        >
                          <a>{item + (index !== arr.length - 1 ? ", " : "")}</a>
                        </Link>
                      );
                    })} */}
                </li>
                <li>
                  Tags:
                  {product.tag &&
                    product.tag.map((item, index, arr) => {
                      return (
                        <Link
                          href="/shop/grid-left-sidebar"
                          as={"/shop/grid-left-sidebar"}
                          key={index}
                        >
                          <a>{item + (index !== arr.length - 1 ? ", " : "")}</a>
                        </Link>
                      );
                    })}
                </li>
              </ul>
              <div className="product-quickview__product-share space-mt--15">
                <span>Share:</span>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <IoLogoFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <IoLogoTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <IoLogoGoogleplus />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <IoLogoYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <IoLogoInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
