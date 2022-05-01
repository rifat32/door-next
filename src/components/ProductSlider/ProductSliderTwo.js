import { Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { ProductGridWrapperTwo } from "../ProductThumb";

const ProductSliderTwo = ({ title, products, items }) => {
  const params = {
    loop: false,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: items ? items : 4
      },
      768: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };

  return (
    <div className="product-slider-area space-pt--50">
      <Row>
        <Col md={6}>
          <div className="section-title space-mb--25">
            <h2>{title}</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="product-slider-wrap">
            <Swiper {...params}>
              <ProductGridWrapperTwo
                products={products}
                sliderClass="swiper-slide"
                bottomSpace="space-mb--30"
              />
            </Swiper>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductSliderTwo;
