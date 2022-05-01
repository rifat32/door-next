import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";

const TestimonialOne = ({ testimonialData }) => {
  const params = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 60,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // }
    ContainerEl: "div",
    WrapperEl: "div",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="icon-arrow-right" />
      </button>
    ),
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="icon-arrow-left" />
      </button>
    )
  };
  return (
    <div className="testimonial-area bg--redon space-pt--r100 space-pb--r100 space-mb--r100">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="section-title text-center space-mb--25">
              <h2>Our Client Say!</h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={9}>
            <div className="testimonial-wrap">
              <Swiper {...params}>
                {testimonialData &&
                  testimonialData.map((single, key) => {
                    return (
                      <div className="testimonial-box text-center" key={key}>
                        <div className="testimonial-desc space-mb--25">
                          <p>{single.content}</p>
                        </div>
                        <div className="author-wrap text-left">
                          <div className="author-img">
                            <img src={single.image} alt="user_img1" />
                          </div>
                          <div className="author-name">
                            <h6>{single.name}</h6>
                            <span>{single.designation}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialOne;
