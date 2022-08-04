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
  const logout = () => {
    apiClient()
    .post(`${BACKENDAPI}/v1.0/logout`)
    .then((response) => {
      console.log(response);
    
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response);
      }
    });
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    router.push(`/other/login`);
 
  }
 
 const [addressFormData,setAddressFormData] = useState({
  id:"",
  billing_address:"",
  billing_address2:"",
  city:"",
  zipcode:"",
  fname:"",
    lname:"",
    cname:"",
    country:"",
    state:"",
    phone:"",
    is_default:false,
 })
const handleSubmit = (e) => {
e.preventDefault();
apiClient().post(`${BACKENDAPI}/v1.0/client/addresses`,{...addressFormData})
.then(response => {
window.alert("address saved")
loadAddress()
})
.catch(err => {

})
}
const handleAddressChange = (e) => {
  setAddressFormData({...addressFormData,[e.target.name]:e.target.value})
}

const handleAddressChangeCheck = (e) => {
  setAddressFormData({...addressFormData,[e.target.name]:e.target.checked})
}
const [showAddress,setShowAddress] = useState(false);

const [addresses,setAddresses] = useState([])
useEffect(() => {
loadAddress()
},[])
const loadAddress = () => {
  apiClient().get(`${BACKENDAPI}/v1.0/client/addresses`)
  .then(response => {
    console.log("address",response.data.data)
    setShowAddress(false)
  setAddresses(response.data.data)
  })
  .catch(err => {
  
  })
}

const [accountDetails,setAccountDetails] = useState({
  name: "",
  current_password:"",
  password: "",
  password_confirmation: "",
})

const handleAccountDetailsChange = (e) => {
setAccountDetails({...accountDetails,[e.target.name]:e.target.value})
}
const handleAccountDetailsSubmit = (e) => {
  e.preventDefault()
  apiClient().post(`${BACKENDAPI}/v1.0/client/account-details`,{...accountDetails})
  .then(response => {
    
  window.alert("Details updated")
  
  })
  .catch(err => {
    console.log(err.response)
    window.alert(err.response.data.message)
  })
}

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
                          
                              <a className="logout" onClick={logout}>Logout</a>
                           
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
                        <div className="row">
                          {
                            addresses.length?(
                              addresses.map((el,index) => {
                                return (
                                  <div className="col-lg-4 col-sm-12 mt-3 p-2" key={index}>
                                  <address>
                                  <div>
                            
                                    <strong>{el.fname}{" "}{el.lname} {el.is_default == 1?(" (Default Address) "):("")}</strong>
                                  </div>
                                  {/* <p>
                                    1355 Market St, Suite 900 <br />
                                    San Francisco, CA 94103
                                  </p> */}
                                  <div>Address:{" "}{el.billing_address}</div>
                                  <div>Address2:{" "}{el.billing_address2&&el.billing_address2}</div>
                                  <div>City:{" "}{el.city}</div>
                                  <div>State/Province:{" "}{el.state}</div>
                                  <div>Zipcode:{" "}{el.zipcode}</div>
                                  <div>Country{" "}{el.country}</div>
                                  <div>Mobile:{" "} {el.phone}</div>
                                </address>
                                <a href="#" className="check-btn sqr-btn ">
                                  <FaRegEdit /> Edit Address
                                </a>
                                  </div>
                                )
                              })
                            ):(null)
                          }
                         
                       
                        </div>
                      
                      </Card.Body>
                   
                      <Card.Body>
                      <button className="btn btn-primary" for="firstname"   onClick={() => { setShowAddress(true);  }}>Add Address</button>
                      </Card.Body>

                      {showAddress? (<Card.Body>
                      <div className="mt-5">
                    <form onSubmit={handleSubmit}   >
                            <Row>
                            <Col className="form-group" md={12} >
                                <label for="firstname" >
                            First Name
                                   <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="fname"
                                  type="text"
                                  value={addressFormData.fname}
                                  onChange={handleAddressChange}
                                  id="firstname"
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                            Last Name
                                   <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="lname"
                                  type="text"
                                  value={addressFormData.lname}
                                  onChange={handleAddressChange}
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                            Company Name
                                   <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="cname"
                                  type="text"
                                  value={addressFormData.cname}
                                  onChange={handleAddressChange}
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                                Billing Address
                                   <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="billing_address"
                                  type="text"
                                  value={addressFormData.billing_address}
                                  onChange={handleAddressChange}
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                                  Billing Address2
                                </label>
                                <input
                                  className="form-control"
                                
                                  name="billing_address2"
                                  type="text"
                                  value={addressFormData.billing_address2}
                                  onChange={handleAddressChange}
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                            Country Name
                                   <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="country"
                                  type="text"
                                  value={addressFormData.country}
                                  onChange={handleAddressChange}
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                                State/Province
                                   <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="state"
                                  type="text"
                                  value={addressFormData.state}
                                  onChange={handleAddressChange}
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                                City
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="city"
                                  type="text"
                                  value={addressFormData.city}
                                  onChange={handleAddressChange}
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                                Postal/Zipcode
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="zipcode"
                                  type="text"
                                  value={addressFormData.zipcode}
                                  onChange={handleAddressChange}
                                />
                              </Col>
                              <Col className="form-group" md={12}>
                                <label>
                                Phone Number
                                   <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="phone"
                                  type="text"
                                  value={addressFormData.phone}
                                  onChange={handleAddressChange}
                                />
                              </Col>
                              <Col className="form-group" md={2}>
                              <input
                                  
                                  className=""
                                  name="is_default"
                                  type="checkbox"
                                  style={{marginRight:"4px"}}
                                  checked={addressFormData.is_default}
                                  onChange={handleAddressChangeCheck}
                                />
                                <label>
                                Set Default
                                 
                                </label>
                               
                              </Col>
                              
                              <Col md={12}>
                                <button
                                  type="submit"
                                  className="btn btn-fill-out"
                                  name="submit"
                                  value="Submit"
                                >
                                 Add Address
                                </button>
                                <button type="button" className="btn btn-danger" onClick={() => {setShowAddress(false)
                                 window.scrollTo(0, 0);
                                }}>Cancel</button>
                              </Col>
                            </Row>
                          </form>


                    </div>
                      </Card.Body>):""}
                      
                    </Card>
                   
                    
                  </Tab.Pane>
                  <Tab.Pane eventKey="accountDetails">
                    <Card className="my-account-content__content">
                      <Card.Header>
                        <h3>Account Details</h3>
                      </Card.Header>
                      <Card.Body>
                        <div className="account-details-form">
                          <form onSubmit={handleAccountDetailsSubmit} >
                            <Row >
                              <Col className="form-group" md={6}>
                                <label>
                                   Name <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="name"
                                  type="text"
                                  value={accountDetails.name}
                                  onChange={handleAccountDetailsChange}
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
                                  name="current_password"
                                  type="current_password"
                                  value={accountDetails.current_password}
                                  onChange={handleAccountDetailsChange}
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
                                  name="password"
                                  type="password"
                                  value={accountDetails.password}
                                  onChange={handleAccountDetailsChange}
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
                                  name="password_confirmation"
                                  type="password"
                                  value={accountDetails.password_confirmation}
                                  onChange={handleAccountDetailsChange}
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
