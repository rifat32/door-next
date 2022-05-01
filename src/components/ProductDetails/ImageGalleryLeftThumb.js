import { Fragment, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

const ImageGalleryLeftThumb = ({ product }) => {
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
    slidesPerView: 5,
    loopedSlides: 4,
    touchRatio: 0.2,
    loop: true,
    slideToClickedSlide: true,
    direction: "vertical",
    breakpoints: {
      1200: {
        slidesPerView: 5,
        direction: "vertical"
      },
      992: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      768: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      640: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      320: {
        slidesPerView: 4,
        direction: "horizontal"
      }
    }
  };

  return (
    <Fragment>
      <Row className="image-gallery-side-thumb-wrapper">
        <Col xl={10} className="order-1 order-xl-2">
          <div className="product-large-image-wrapper">
            <LightgalleryProvider>
              <Swiper {...gallerySwiperParams}>
                {product.image &&
                  product.image.map((single, key) => {
                    return (
                      <div key={key}>
                        <LightgalleryItem group="any" src={single}>
                          <button className="enlarge-icon">
                            <i className="icon-magnifier-add" />
                          </button>
                        </LightgalleryItem>
                        <div className="single-image">
                          <img src={single} className="img-fluid" alt="" />
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </LightgalleryProvider>
          </div>
        </Col>
        <Col xl={2} className="order-2 order-xl-1">
          <div className="product-small-image-wrapper product-small-image-wrapper--side-thumb">
            <Swiper {...thumbnailSwiperParams}>
              {product.image &&
                product.image.map((image, i) => {
                  return (
                    <div key={i}>
                      <div className="single-image">
                        <img src={image} className="img-fluid" alt="" />
                      </div>
                    </div>
                  );
                })}
            </Swiper>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ImageGalleryLeftThumb;
