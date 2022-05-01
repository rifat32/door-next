import { Container, Row, Col, Form } from "react-bootstrap";
import { FaApple, FaAndroid, FaWindows } from "react-icons/fa";

const HeaderTopTwo = () => {
  return (
    <div className="top-header d-none d-lg-block">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="header-topbar-info d-flex">
              <div className="header-offer">
                <span>Free Ground Shipping Over $250</span>
              </div>
              <div className="download-wrap">
                <span className="mr-3">Download App</span>
                <ul className="text-center text-lg-left">
                  <li>
                    <a href="#">
                      <FaApple />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaAndroid />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaWindows />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex align-items-center justify-content-end">
              <Form.Control as="select" name="languages" className="mr-2">
                <option value="en">English</option>
                <option value="fn">France</option>
              </Form.Control>

              <Form.Control as="select" name="countries">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBR">GBR</option>
              </Form.Control>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTopTwo;
