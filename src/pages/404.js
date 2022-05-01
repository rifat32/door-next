import Link from "next/link";
import { LayoutOne } from "../layouts";
import { BreadcrumbOne } from "../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";

const NotFound = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Not Found">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Not Found</li>
        </ol>
      </BreadcrumbOne>
      <div className="not-found-content space-pt--r100 space-pb--r100">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={6} md={10}>
              <div className="text-center">
                <div className="error-txt">404</div>
                <h5 className="mb-2 mb-sm-3">
                  oops! The page you requested was not found!
                </h5>
                <p>
                  The page you are looking for was moved, removed, renamed or
                  might never existed.
                </p>
                <div className="search-form pb-3 pb-md-4">
                  <form method="post">
                    <input
                      name="text"
                      id="text"
                      type="text"
                      placeholder="Search"
                      className="form-control"
                    />
                    <button type="submit" className="btn icon-search">
                      <IoIosSearch />
                    </button>
                  </form>
                </div>
                <Link href="/">
                  <a className="btn btn-fill-out">Back To Home</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default NotFound;
