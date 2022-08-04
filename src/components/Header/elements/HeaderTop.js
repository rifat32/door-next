import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  IoIosPhonePortrait,
  IoIosShuffle,
  IoIosHeartEmpty
} from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/router";
import { apiClient } from "../../../utils/apiClient";
import { BACKENDAPI } from "../../../../config";

const HeaderTop = () => {
  const router = useRouter()
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
  return (
    <div className="top-header d-none d-lg-block">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
{/*               <Form.Control as="select" name="languages" className="mr-2">
                <option value="en">English</option>
                <option value="fn">France</option>
              </Form.Control> */}

{/*               <Form.Control as="select" name="countries" className="mr-3">
               <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBR">GBR</option>
              </Form.Control> */}

              <ul className="contact-detail text-center text-lg-left">
                <li>
                  <IoIosPhonePortrait />
                  <span><a href="tel:01452 924 200">01452 924 200</a></span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center text-md-right">
              <ul className="header-list">
                <li>
                {/*   <Link href="/other/compare">
                    <a>
                      <IoIosShuffle />
                      <span>Compare</span>
                    </a>
                  </Link> */}
                </li>
                <li className={localStorage.getItem("token")?"d-inline-block":"d-none"}>
                  <Link href="/other/my-account">
                    <a>
                      <AiOutlineUser />
                      <span>My Account</span>
                    </a>
                  </Link>
                </li>
                <li id="web-login" className={localStorage.getItem("token")?"d-none":"d-inline-block"}>
                  <Link href="/other/login">
                    <a>
                      <AiOutlineUser />
                      <span>Login </span>
                    </a>
                  </Link>
                </li>
                <li id="web-logout" className={localStorage.getItem("token")?"d-inline-block":"d-none"}>
            
                    <a onClick={logout}>
                      <AiOutlineUser />
                      <span>Logout </span>
                    </a>
                 
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTop;
