import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const BannerSix = () => {
  return (
    <div className="banner-area space-pb--r100">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="sale-banner mb-0">
              <Link href="/shop/grid-left-sidebar">
                <a className="hover-effect">
                  <img
                    src="/assets/images/banner/shop_banner_img11.png"
                    alt="shop_banner_img11"
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

export default BannerSix;
