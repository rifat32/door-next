import { Container, Row, Col } from "react-bootstrap";
import { FaPencilAlt, FaLayerGroup, FaRegEnvelope } from "react-icons/fa";

const IconBoxTwo = () => {
  return (
    <div className="icon-box-area bg--blue-two space-pt--r100 space-pb--r70">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8} className=" space-mb--30">
            <div className="heading-s1 text-center space-mb--20">
              <h2>Why Choose Us?</h2>
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={4} sm={6}>
            <div className="icon-box icon-box--style2">
              <div className="icon-box__icon">
                <FaPencilAlt />
              </div>
              <div className="icon-box__content">
                <h5>Creative Design</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="icon-box icon-box--style2">
              <div className="icon-box__icon">
                <FaLayerGroup />
              </div>
              <div className="icon-box__content">
                <h5>Flexible Layouts</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="icon-box icon-box--style2">
              <div className="icon-box__icon">
                <FaRegEnvelope />
              </div>
              <div className="icon-box__content">
                <h5>Email Marketing</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IconBoxTwo;
