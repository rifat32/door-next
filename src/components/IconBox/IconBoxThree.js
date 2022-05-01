import { Container, Row, Col } from "react-bootstrap";

const IconBoxThree = () => {
  return (
    <div className="icon-box-area space-pb--r100">
      <Container>
        <Row className="no-gutters">
          <Col lg={3} sm={6}>
            <div className="icon-box icon-box--style4">
              <div className="icon-box__icon">
                <i className="flaticon-shipped" />
              </div>
              <div className="icon-box__content">
                <h6>Free Delivery</h6>
                <p>Worldwide</p>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div className="icon-box icon-box--style4">
              <div className="icon-box__icon">
                <i className="flaticon-money-back" />
              </div>
              <div className="icon-box__content">
                <h6>Money Returns</h6>
                <p>30 Days money return</p>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div className="icon-box icon-box--style4">
              <div className="icon-box__icon">
                <i className="flaticon-support" />
              </div>
              <div className="icon-box__content">
                <h6>27/4 Online Support</h6>
                <p>Customer Support</p>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div className="icon-box icon-box--style4">
              <div className="icon-box__icon">
                <i className="flaticon-lock" />
              </div>
              <div className="icon-box__content">
                <h6>Payment Security</h6>
                <p>Safe Payment</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IconBoxThree;
