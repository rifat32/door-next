import { Fragment, useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

const ImageGalleryBottomThumb = ({ product }) => {
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
    <Fragment>
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
      <div className="product-small-image-wrapper">
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
    </Fragment>
  );
};

export default ImageGalleryBottomThumb;
