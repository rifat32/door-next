import { Container, Row, Col } from "react-bootstrap";
import { ProductGridWrapperFour } from "../ProductThumb";

const ProductGridTwo = ({ title, text, products }) => {
  return (
    <div className="product-grid-area space-pb--r70">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="section-title text-center space-mb--25">
              <h2>{title}</h2>
            </div>
            <p className="leads text-center">{text}</p>
          </Col>
        </Row>
        <Row>
          <ProductGridWrapperFour
            products={products}
            bottomSpace="space-mb--30"
          />
        </Row>
      </Container>
    </div>
  );
};

export default ProductGridTwo;
