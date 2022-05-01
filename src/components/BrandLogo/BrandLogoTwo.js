import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";

const BrandLogoTwo = ({ brandLogoData }) => {
  const params = {
    loop: false,
    slidesPerView: 5,
    grabCursor: true,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      769: {
        slidesPerView: 4
      },
      576: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };

  return (
    <div className="brand-logo-area space-pb--r100">
      <Container>
        <Row>
          <Col md={12}>
            <Swiper {...params}>
              {brandLogoData &&
                brandLogoData.map((single, key) => {
                  return (
                    <div className="item" key={key}>
                      <div className="cl-logo text-center">
                        <img src={single.image} alt="cl_logo" />
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

export default BrandLogoTwo;
