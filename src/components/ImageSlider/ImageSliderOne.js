import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { FaInstagram } from "react-icons/fa";

const ImageSliderOne = ({ imageSliderData }) => {
  const params = {
    loop: true,
    slidesPerView: 6,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      1024: {
        slidesPerView: 6
      },
      769: {
        slidesPerView: 4
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
    <div className="image-slider-area space-pb--r100">
      <Container fluid className="p-0">
        <Row className="no-gutters">
          <Col lg={12}>
            <div className="follow-box">
              <FaInstagram />
              <h3>instagram</h3>
              <span>@shoppingzone</span>
            </div>
            <Swiper {...params}>
              {imageSliderData &&
                imageSliderData.map((single, key) => {
                  return (
                    <div className="item" key={key}>
                      <div className="instafeed-box">
                        <a href={single.url}>
                          <img src={single.image} alt="insta_image" />
                        </a>
                      </div>
                    </div>
                  );
                })}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageSliderOne;
