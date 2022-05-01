import { Row, Col } from "react-bootstrap";
import { MdApps, MdList } from "react-icons/md";
import { setActiveLayout } from "../../lib/product";

const ShopHeader = ({
  getFilterSortParams,
  getLayout,
  layoutClass,
  layout
}) => {
  return (
    <div className="shop-header-area">
      <Row
        className={`align-items-center mb-4 pb-1 ${
          layoutClass ? layoutClass : ""
        }`}
      >
        <Col>
          <div className="shop-header">
            <div className="shop-header__left">
              <select
                className="form-control form-control-sm"
                onChange={(e) =>
                  getFilterSortParams("filterSort", e.target.value)
                }
              >
                <option value="default">Default</option>
                <option value="priceHighToLow">Price - High to Low</option>
                <option value="priceLowToHigh">Price - Low to High</option>
              </select>
            </div>
            <div className="shop-header__right">
              <div className="products-view">
                <button
                  className={`sorting-icon grid ${
                    layout === "grid" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    getLayout("grid");
                    setActiveLayout(e);
                  }}
                >
                  <MdApps />
                </button>
                <button
                  className={`sorting-icon list  ${
                    layout === "list" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    getLayout("list");
                    setActiveLayout(e);
                  }}
                >
                  <MdList />
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShopHeader;
