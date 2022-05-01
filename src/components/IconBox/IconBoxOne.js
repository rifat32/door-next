import { Container, Row, Col } from "react-bootstrap";

const IconBoxOne = () => {
  return (
    <div className="icon-box-area space-pb--r70">
      <Container>
        <Row className="no-gutters">
          <Col lg={4}>
            <div className="icon-box icon-box--style1">
              <div className="icon-box__icon">
                <i className="flaticon-shipped" />
              </div>
              <div className="icon-box__content">
                <h5>Free Delivery</h5>
                <p>
                  If you are going to use of Lorem, you need to be sure there
                  anything
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="icon-box icon-box--style1">
              <div className="icon-box__icon">
                <i className="flaticon-money-back" />
              </div>
              <div className="icon-box__content">
                <h5>30 Day Return</h5>
                <p>
                  If you are going to use of Lorem, you need to be sure there
                  anything
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="icon-box icon-box--style1">
              <div className="icon-box__icon">
                <i className="flaticon-support" />
              </div>
              <div className="icon-box__content">
                <h5>27/4 Support</h5>
                <p>
                  If you are going to use of Lorem, you need to be sure there
                  anything
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IconBoxOne;
