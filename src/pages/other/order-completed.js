import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosCheckmarkCircle } from "react-icons/io";

const OrderCompleted = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Order Completed">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Order Completed</li>
        </ol>
      </BreadcrumbOne>
      <div className="order-content space-pt--r100 space-pb--r100">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="text-center order-complete">
                <IoIosCheckmarkCircle />
                <div className="heading-s1 space-mb--20">
                  <h3>Your order is completed!</h3>
                </div>
                <p>
                  Thank you for your order! Your order is being processed and
                  will be completed within 3-6 hours. You will receive an email
                  confirmation when your order is completed.
                </p>
                <Link href="/shop/grid-left-sidebar">
                  <a className="btn btn-fill-out">Continue Shopping</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default OrderCompleted;
