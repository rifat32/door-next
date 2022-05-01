import Link from "next/link";
import { IoIosFlash } from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { ProductGridWrapperFive } from "../ProductThumb";

const ProductSliderEleven = ({ title, products }) => {
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
      <Container>
        <Row>
          <Col lg={12}>
            <div className="section-title text-center space-mb--30">
              <h2>{title}</h2>
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
      </Container>
    </div>
  );
};

export default ProductSliderEleven;
