import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { FaCloudDownloadAlt, FaRegEdit } from "react-icons/fa";
import {
  IoIosList,
  IoIosClipboard,
  IoIosDownload,
  IoIosCash,
  IoIosCreate,
  IoIosPerson
} from "react-icons/io";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Authorize, { authorize } from "../../utils/authorize";
import { BACKENDAPI } from "../../../config";
import { apiClient } from "../../utils/apiClient";
import { useRouter } from "next/dist/client/router";


const MyAccount = () => {
  const router = useRouter()

  const [user,setUser] = useState(null);
  const setUserFunction = (user) => {
    setUser(user)
  }
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const showModal = (show) => {
    setIsOpen(show);
  };
  const [currentData, setCurrentData] = useState(null);

  const [link, setLink] = useState(`${BACKENDAPI}/v1.0/orders/client/customers`);
  const [nextPageLink, setNextPageLink] = useState("");
  const [prevPageLink, setPrevPageLink] = useState("");


  useEffect(() => {
    loadData(link);
  }, []);

  // pagination required
  const loadData = (link) => {
    setLoading(true);
    apiClient()
      .get(link)
      .then((response) => {
        setLoading(false);
        console.log(response.data.data);
        setData([...data, ...response.data.data.data]);
        setNextPageLink(response.data.data.next_page_url);
        setPrevPageLink(response.data.data.prev_page_url);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
      });
  };

  const viewOrder = (id) => {
    router.push(`/other/order/${id}`);
  };
  return (
    <Authorize setUserFunction={setUserFunction}>
<LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="My Account">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">My Account</li>
        </ol>
      </BreadcrumbOne>
      <div className="my-account-content space-pt--r100 space-pb--r100">
        <Container>
          <Tab.Container defaultActiveKey="dashboard">
            <Row>
              <Col lg={3} md={4}>
                <Nav
                  variant="pills"
                  className="flex-column my-account-content__navigation space-mb--r60"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="dashboard">
                      <IoIosList /> Dashboard
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="orders">
                      <IoIosClipboard /> Orders
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="download">
                      <IoIosDownload /> Download
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="payment">
                      <IoIosCash /> Payment
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="address">
                      <IoIosCreate /> Address
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="accountDetails">
                      <IoIosPerson /> Account Details
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={9} md={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="dashboard">
                    <Card className="my-account-content__content">
                      <Card.Header>
                        <h3>Dashboard</h3>
                      </Card.Header>
                      <Card.Body>
                        <div className="welcome">
                          <p>
                            Hello, <strong>{user && user.name}</strong> (If Not{" "}
                            <strong>{user && user.name} !</strong>{" "}
                            <Link href="/other/login" as="/other/login">
                              <a className="logout">Logout</a>
                            </Link>
                            )
                          </p>
                        </div>
                        <p>
                          From your account dashboard. you can easily check
                          &amp; view your recent orders, manage your shipping
                          and billing addresses and edit your password and
                          account details.
                        </p>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="orders">
                    <Card className="my-account-content__content">
                      <Card.Header>
                        <h3>Orders</h3>
                      </Card.Header>
                      <Card.Body>
                        <div className="myaccount-table table-responsive text-center">
                          <table className="table">
                          <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Order Date</th>
            <th scope="col">Status</th>
       
          </tr>
        </thead>

        {data.length ? (
          <tbody>
            {data.map((el) => {
              return (
                <tr
                  key={el.id}
                  onClick={() => viewOrder(el.id)}
                  className="trhover"
                >
                  <td>{el.id}</td>
                  <td> {el.fname && el.fname}</td>
                  <td>{el.fname && el.lname}</td>
                  <td>{el.fname && el.email}</td>
                  <td>{el.fname && new Date(el.created_at).toDateString()}</td>
                  <td>{el.status}</td>
                
                </tr>
              );
            })}
          </tbody>
        ) : null}
                          </table>
                          <div className="text-center">
        {nextPageLink ? (
          <button
            className="btn btn-primary"
            onClick={() => {
              loadData(nextPageLink);
            }}
          >
            Load More ...
          </button>
        ) : data.length ? (
          prevPageLink ? (
            "No more data to show"
          ) : (
            ""
          )
        ) : loading ? (
          "Loading.."
        ) : (
          "No data to show"
        )}
      </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="download">
                    <Card className="my-account-content__content">
                      <Card.Header>
                        <h3>Downloads</h3>
                      </Card.Header>
                      <Card.Body>
                        <div className="myaccount-table table-responsive text-center">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Date</th>
                                <th>Expire</th>
                                <th>Download</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Haven - Free Real Estate PSD Template</td>
                                <td>Aug 22, 2020</td>
                                <td>Yes</td>
                                <td>
                                  <a href="#" className="check-btn sqr-btn ">
                                    <FaCloudDownloadAlt /> Download File
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>HasTech - Portfolio Business Template</td>
                                <td>Sep 12, 2020</td>
                                <td>Never</td>
                                <td>
                                  <a href="#" className="check-btn sqr-btn ">
                                    <FaCloudDownloadAlt /> Download File
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="payment">
                    <Card className="my-account-content__content">
                      <Card.Header>
                        <h3>Payment Method</h3>
                      </Card.Header>
                      <Card.Body>
                        <p className="saved-message">
                          You Can't Saved Your Payment Method yet.
                        </p>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="address">
                    <Card className="my-account-content__content">
                      <Card.Header>
                        <h3>Billing Address</h3>
                      </Card.Header>
                      <Card.Body>
                        <address>
                          <p>
                            <strong>John Doe</strong>
                          </p>
                          <p>
                            1355 Market St, Suite 900 <br />
                            San Francisco, CA 94103
                          </p>
                          <p>Mobile: (123) 456-7890</p>
                        </address>
                        <a href="#" className="check-btn sqr-btn ">
                          <FaRegEdit /> Edit Address
                        </a>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="accountDetails">
                    <Card className="my-account-content__content">
                      <Card.Header>
                        <h3>Account Details</h3>
                      </Card.Header>
                      <Card.Body>
                        <div className="account-details-form">
                          <form method="post" name="enq">
                            <Row>
                              <Col className="form-group" md={6}>
                                <label>
                                  First Name <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="name"
                                  type="text"
                                />
                              </Col>
                              <Col className="form-group" md={6}>
                                <label>
                                  Last Name <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="phone"
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                                  Display Name{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="dname"
                                  type="text"
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                                  Email Address{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="email"
                                  type="email"
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                                  Current Password{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="password"
                                  type="password"
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                                  New Password{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="npassword"
                                  type="password"
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                                  Confirm Password{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="cpassword"
                                  type="password"
                                />
                              </Col>
                              <Col md={12}>
                                <button
                                  type="submit"
                                  className="btn btn-fill-out"
                                  name="submit"
                                  value="Submit"
                                >
                                  Save
                                </button>
                              </Col>
                            </Row>
                          </form>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </LayoutOne>
    </Authorize>
    
  );
};

export default MyAccount;
