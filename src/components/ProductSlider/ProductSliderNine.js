import Link from "next/link";
import { IoIosFlash } from "react-icons/io";
import { Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { ProductGridWrapperFive } from "../ProductThumb";

const ProductSliderNine = ({ title, bannerImage, products }) => {
  const params = {
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    }
  };

  return (
    <div className="product-slider-area space-pb--r100">
      <div className="custom-container">
        <Row>
          <Col xl={3} lg={4}>
            <div className="sale-banner px-0 mb-0 mb-3 mb-lg-0">
              <Link href="/shop/grid-left-sidebar">
                <a className="hover-effect">
                  <img src={bannerImage} alt="shop_banner_img3" />
                </a>
              </Link>
            </div>
          </Col>
          <Col xl={9} lg={8}>
            <div className="section-title section-title--style-two heading-s1 d-flex justify-content-between align-items-center space-mb--30">
              <h4>{title}</h4>
              <Link href="/shop/grid-left-sidebar">
                <a className="text-default">
                  {" "}
                  <IoIosFlash /> View All
                </a>
              </Link>
            </div>
            <div className="product-slider-wrap product-slider-wrap--custom-bullet">
              <Swiper {...params}>
                <ProductGridWrapperFive
                  products={products}
                  sliderClass="swiper-slide"
                  bottomSpace="space-mb--30"
                />
              </Swiper>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductSliderNine;
