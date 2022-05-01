import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const BannerFour = () => {
  return (
    <div className="banner-area space-pb--r70">
      <Container>
        <Row>
          <Col md={5}>
            <div className="single-banner">
              <div>
                <img
                  src="/assets/images/banner/furniture_banner1.jpg"
                  alt="furniture_banner1"
                />
                <div className="fb-info">
                  <h5 className="single-bn-title-two">Super Sale</h5>
                  <h3 className="single-bn-title">New Collection</h3>
                  <Link href="/shop/grid-left-sidebar">
                    <a className="single-bn-link">Shop Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="single-banner">
              <div>
                <img
                  src="/assets/images/banner/furniture_banner2.jpg"
                  alt="furniture_banner1"
                />
                <div className="fb-info-two">
                  <h3 className="single-bn-title">New Season</h3>
                  <h4 className="single-bn-title-two">Sale 40% Off</h4>
                  <Link href="/shop/grid-left-sidebar">
                    <a className="single-bn-link">Shop Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerFour;
