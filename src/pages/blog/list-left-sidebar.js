import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { Sidebar, BlogPostListWrapper } from "../../components/Blog";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ListLeftSidebar = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Blog">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Blog</li>
        </ol>
      </BreadcrumbOne>
      <div className="blog-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={9}>
              {/* blog post grid wrapper */}
              <BlogPostListWrapper />
              <Row>
                <Col className="mt-2 mt-md-4">
                  <ul className="pagination pagination-style justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex={-1}>
                        <IoIosArrowBack />
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <IoIosArrowForward />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col lg={3} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              {/* sidebar */}
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default ListLeftSidebar;
