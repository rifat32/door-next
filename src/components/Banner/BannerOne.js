import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const BannerOne = () => {
  return (
    <div className="banner-area bg--blue-two space-pt-mobile-only--60">
      <Container>
        <Row className="align-items-center flex-row-reverse">
          <Col md={6} className="offset-md-1">
            <div className="medium-divider d-none d-md-block clearfix" />
            <div className="trending-text text-center text-md-left">
              <div className="heading-wrapper mb-3">
                <span>New season trends!</span>
                <h2>Best Summer Collection</h2>
              </div>
              <h5 className="mb-4">Sale Get up to 50% Off</h5>
              <Link href="/shop/grid-left-sidebar">
                <a className="btn btn-fill-out rounded-0">Shop Now</a>
              </Link>
            </div>
            <div className="medium-divider clearfix" />
          </Col>
          <Col md={5}>
            <div className="text-center trending-img">
              <img
                src="/assets/images/banner/trending_img.png"
                alt="trending_img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerOne;
