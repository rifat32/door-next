import { ProductGridListWrapper } from "../../components/ProductThumb";
import { Row } from "react-bootstrap";

const ShopProducts = ({ products, layout }) => {
  console.log(products)
 
 
  return (
    <div className="shop-products">
      <Row className={layout}>
        <ProductGridListWrapper
          products={products}
          bottomSpace="space-mb--50"
        />
      </Row>
    </div>
  );
};

export default ShopProducts;
