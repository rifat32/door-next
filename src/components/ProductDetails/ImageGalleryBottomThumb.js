import { Fragment, useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { BACKEND } from "../../../config";

const ImageGalleryBottomThumb = ({ product, swipper, setColorImage,setSwiper  }) => {
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

  let images = [
    ...product.colors.map(el => {
      return {
      file:el.color_image
      };
         }),
    ...product.images,
   {
    file:product.image
   },
  
   

  ]

const hideFunc = () =>{
// document.querySelector(".product-large-image-wrapper").classList.remove("d-none");
// document.querySelector(".pimage").classList.add("d-none");

}
const changeSomething = (image) =>{
  setColorImage(image)

  
  }

  return (
    <Fragment>
      {/* <div className="product-large-image-wrapper ">
       
        <LightgalleryProvider>
           <Swiper {...gallerySwiperParams}>
     
            {images &&
              images.map((single, key) => {
                return (
                  <div key={key} >
                 
                    <LightgalleryItem group="any" src={`${BACKEND}/${single.file}`}>
                      <button className="enlarge-icon">
                        <i className="icon-magnifier-add" />
                      </button>
                    </LightgalleryItem>
                    <div className="single-image" style={{height:"15rem"}}>
                      <img src={`${BACKEND}/${single.file}`}className="img-fluid" alt="" style={{height:"inherit"}} />
                    </div>
                  </div>
                );
              })
              
              }
          </Swiper> 
        </LightgalleryProvider>
      </div> */}
      
    {
      images.length >1?(<div className="product-small-image-wrapper">
      <Swiper {...thumbnailSwiperParams} getSwiper={setSwiper} >
        {
          images.map((image, i) => {
            return (
              <div key={i} 
              onClick={
                () => {
                  changeSomething(image.file)
                  hideFunc()
                }
              }
             

              >
                <div className="single-image"   onClick={
                () => {
                  changeSomething(image.file)
               
                }
              }>
            
                  <img src={`${BACKEND}/${image.file}`}  className="img-fluid" alt=""   onClick={
                () => {
                  changeSomething(image.file)
                 
                }
              } />
                </div>
              </div>
            );
          })}
      </Swiper>
    </div>):(null)
    }  
    </Fragment>
  );
};

export default ImageGalleryBottomThumb;
