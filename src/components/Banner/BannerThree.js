import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const BannerThree = () => {
  return (
    <div className="banner-area space-pb--r70">
      <Container fluid className="px-2">
        <Row className="no-gutters">
          <Col md={4}>
            <div className="sale-banner">
              <Link href="/shop/grid-left-sidebar">
                <a className="hover-effect">
                  <img
                    src="/assets/images/banner/shop_banner_img3.jpg"
                    alt="shop_banner_img3"
                  />
                </a>
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="sale-banner">
              <Link href="/shop/grid-left-sidebar">
                <a className="hover-effect">
                  <img
                    src="/assets/images/banner/shop_banner_img4.jpg"
                    alt="shop_banner_img3"
                  />
                </a>
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="sale-banner">
              <Link href="/shop/grid-left-sidebar">
                <a className="hover-effect">
                  <img
                    src="/assets/images/banner/shop_banner_img5.jpg"
                    alt="shop_banner_img3"
                  />
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerThree;
