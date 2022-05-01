import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { ProductSliderFive } from "../ProductSlider";

const ProductTabTwo = ({
  title,
  newProducts,
  bestSellerProducts,
  featuredProducts,
  saleProducts
}) => {
  return (
    <div className="product-tab-area space-pb--r100">
      <Container>
        <Tab.Container defaultActiveKey="new">
          <Row className="justify-content-center">
            <Col md={12}>
              <div className="section-title section-title--style-two space-mb--25 d-flex flex-column flex-lg-row justify-content-between">
                <h2>{title}</h2>
                <Nav
                  variant="pills"
                  className="product-tab-navigation product-tab-navigation--style-two"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="new">New Arrival</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="bestSellers">Best Sellers</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="featured">Featured</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sale">Special Offer</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
          </Row>
          <Tab.Content>
            <Tab.Pane eventKey="new">
              <Row>
                <Col md={12}>
                  <ProductSliderFive products={newProducts} />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSellers">
              <Row>
                <Col md={12}>
                  <ProductSliderFive products={bestSellerProducts} />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="featured">
              <Row>
                <Col md={12}>
                  <ProductSliderFive products={featuredProducts} />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="sale">
              <Row>
                <Col md={12}>
                  <ProductSliderFive products={saleProducts} />
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default ProductTabTwo;
