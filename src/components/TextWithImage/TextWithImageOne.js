import { Container, Row, Col } from "react-bootstrap";

const TextWithImageOne = () => {
  return (
    <div className="text-image-section space-pt--r100 space-pb--r100">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="about-img scene mb-4 mb-lg-0">
              <img src="/assets/images/banner/about_img.jpg" alt="about_img" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="heading-s1 space-mb--20">
              <h2>Who We are</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              consequuntur quibusdam enim expedita sed nesciunt incidunt
              accusamus adipisci officia libero laboriosam!
            </p>
            <p>
              Proin gravida nibh vel velit auctor aliquet. nec sagittis sem nibh
              id elit. Duis sed odio sit amet nibh vultate cursus a sit amet
              mauris. Duis sed odio sit amet nibh vultate cursus a sit amet
              mauris.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextWithImageOne;
