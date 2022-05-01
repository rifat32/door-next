import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "../../layouts";
import { Sidebar, BlogSinglePostAudio } from "../../components/Blog";
import { BreadcrumbOne } from "../../components/Breadcrumb";

const PostAudio = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Post Audio">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Post Audio</li>
        </ol>
      </BreadcrumbOne>
      <div className="blog-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={9}>
              <BlogSinglePostAudio />
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

export default PostAudio;
