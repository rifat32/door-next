import { Row, Col } from "react-bootstrap";
import ProductSliderEight from "./ProductSliderEight";

const ProductSliderEightWrapper = ({
  featuredTitle,
  bestSellerTitle,
  saleTitle,
  featuredProducts,
  bestSellerProducts,
  saleProducts
}) => {
  return (
    <div className="product-slider-area space-pb--r70">
      <div className="custom-container">
        <Row>
          <Col lg={4}>
            {/* product slider */}
            <ProductSliderEight
              title={featuredTitle}
              products={featuredProducts}
            />
          </Col>
          <Col lg={4}>
            {/* product slider */}
            <ProductSliderEight
              title={bestSellerTitle}
              products={bestSellerProducts}
            />
          </Col>
          <Col lg={4}>
            {/* product slider */}
            <ProductSliderEight title={saleTitle} products={saleProducts} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductSliderEightWrapper;
