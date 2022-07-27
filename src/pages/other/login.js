import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { useState } from "react";
import { BACKEND, BACKENDAPI } from "../../../config";

import axios from "axios";
import withRouter from "next/dist/client/with-router";
import { useEffect } from "react";
import { apiClient } from "../../utils/apiClient";
import { useRouter } from "next/dist/client/router";

import AuthorizeReverse, { authorizeReverse } from "../../utils/authorizeReverse";


const Login = (props) => {
  
  const router = useRouter()


  const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState([]);
  const [formData,setFormData] = useState({
    email:"",
    password:""
  })
  const handleChange = (e) => {
     setFormData({...formData,[e.target.name]:e.target.value})    
  }
  const handleSubmit = (e) => {
		e.preventDefault();
		 setLoading(true);
		setErrors([]);

		axios
			.post(`${BACKEND}/api/v1.0/login`, {
				...formData,
			})
			.then((response) => {
				console.log(response.data);
				localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data));
			
				 setLoading(false);
          router.push("/other/my-account");
			})
			.catch((err) => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
				console.log("err", err);

				if (err.response) {
					let errorStatus = err.response.status;
					if (errorStatus === 422) {
						setErrors(err.response.data.errors);
					}
					if (errorStatus === 401) {
						setErrors(["Invalid Credentials"]);
					}
				}

				setLoading(false);
			});
	};
  return (
    <AuthorizeReverse>
 <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Login">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Login</li>
        </ol>
      </BreadcrumbOne>
      <div className="login-content space-pt--r100 space-pb--r100">
        <Container>
          <Row className="justify-content-center">
            <Col xl={6} md={10}>
              <div className="login-wrap">
                <div className="heading-s1 space-mb--20">
                  <h3>Login</h3>
                </div>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="login-footer form-group">
                      {/* <div className="check-form">
                        <div className="custom-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox1"
                            defaultValue
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox1"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                      </div> */}
                      <a href="#">Forgot password?</a>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        name="login"
                      >
                        Log in
                      </button>
                    </div>
                  </form>
                  <div className="different-login">
                    <span> or</span>
                  </div>
                  <ul className="btn-login text-center">
                    <li>
                      <a href="#" className="btn btn-facebook">
                        <FaFacebookF />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-google">
                        <FaGooglePlusG />
                        Google
                      </a>
                    </li>
                  </ul>
                  <div className="form-note text-center space-mt--20">
                    Don't Have an Account?{" "}
                    <Link href="/other/register">
                      <a>Sign up now</a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
    </AuthorizeReverse>
   
  );
};

export default withRouter(Login);
