import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "../../layouts";
import { Sidebar, BlogSinglePostSlider } from "../../components/Blog";
import { BreadcrumbOne } from "../../components/Breadcrumb";

const PostSlider = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Post Slider">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Post Slider</li>
        </ol>
      </BreadcrumbOne>
      <div className="blog-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={9}>
              <BlogSinglePostSlider />
            </Col>
            <Col lg={3} className="mt-4 pt-2 mt-lg-0 pt-lg-0">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default PostSlider;
