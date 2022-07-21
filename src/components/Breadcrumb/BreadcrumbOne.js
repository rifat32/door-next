import { Container, Row, Col } from "react-bootstrap";

const BreadcrumbOne = ({ pageTitle, children }) => {
  return (
    <div className="breadcrumb-section">
              <Row className="align-items-left">
          <Col className="align-items-left" md={6}>{children}</Col>
        </Row>

    </div>
  );
};

export default BreadcrumbOne;
