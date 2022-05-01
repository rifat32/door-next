import Link from "next/link";
import { Row, Col } from "react-bootstrap";

const BannerFive = ({ containerClass }) => {
  return (
    <div className="banner-area space-pb--r70">
      <div className={`${containerClass ? containerClass : "container"}`}>
        <Row>
          <Col md={4}>
            <div className="sale-banner px-0">
              <Link href="/shop/grid-left-sidebar">
                <a className="hover-effect">
                  <img
                    src="/assets/images/banner/shop_banner_img7.jpg"
                    alt="shop_banner_img3"
                  />
                </a>
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="sale-banner px-0">
              <Link href="/shop/grid-left-sidebar">
                <a className="hover-effect">
                  <img
                    src="/assets/images/banner/shop_banner_img8.jpg"
                    alt="shop_banner_img3"
                  />
                </a>
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="sale-banner px-0">
              <Link href="/shop/grid-left-sidebar">
                <a className="hover-effect">
                  <img
                    src="/assets/images/banner/shop_banner_img9.jpg"
                    alt="shop_banner_img3"
                  />
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BannerFive;
