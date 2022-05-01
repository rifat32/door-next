import { Container, Row, Col } from "react-bootstrap";
import { ProductGridWrapperFour } from "../ProductThumb";

const ProductGridOne = ({ title, products }) => {
  return (
    <div className="product-grid-area space-pb--r70">
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <div className="section-title section-title--style-three text-center space-mb--40">
              <h2>{title}</h2>
            </div>
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

export default ProductGridOne;
