import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { BACKEND } from "../../../config";
import AuthorizeReverse from "../../utils/authorizeReverse";
import { useRouter } from "next/dist/client/router";

const Register = () => {
  const router = useRouter()
	const [state, setState] = useState({
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
	});
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState(null);
	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setErrors(null);

		axios
			.post(`${BACKEND}/api/v1.0/register2`, {
				...state,
			})
			.then((response) => {
				console.log(response.data);
				localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data));
			
				 setLoading(false);
          router.push("/other/my-account");
			
				
			})
			.catch((error) => {
		
				if (error.response.status === 422) {
				
					setErrors(error.response.data.errors);
				}

		
				setLoading(false);
			});
      axios
			.post(`${BACKEND}/api/v1.0/email`, {
				...state,
			})
			.then((response) => {
				console.log(response.data+"Email Sended");
			
				
			})
			.catch((error) => {
		
				if (error.response.status === 422) {
				
					setErrors(error.response.data.errors);
				}

		
				setLoading(false);
			});
	};
  return (
    <AuthorizeReverse>
      <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Register">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Register</li>
        </ol>
      </BreadcrumbOne>
      <div className="login-content space-pt--r100 space-pb--r100">
        <Container>
          <Row className="justify-content-center">
            <Col xl={6} md={10}>
              <div className="login-wrap">
                <div className="heading-s1 space-mb--20">
                  <h3>Create An Account</h3>
                </div>
                <div>
                  <form method="post" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        required
                      
                        name="name"
                        placeholder="Your Name"
                      
						className={
							errors
								? errors.name
									? `form-control is-invalid`
									: `form-control is-valid`
								: "form-control"
						}
						id="yourPassword"
						onChange={handleChange}
						value={state.name}
                      />
                      	{errors?.name && (
						<div className="invalid-feedback">{errors.name[0]}</div>
					)}
					{errors && <div className="valid-feedback">Looks good!</div>}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        required
                        
                        name="email"
                        placeholder="Your Email"
                        className={
                          errors
                            ? errors.email
                              ? `form-control is-invalid`
                              : `form-control is-valid`
                            : "form-control"
                        }
                        id="yourEmail"
                        
                        onChange={handleChange}
                        value={state.email}
                      />
                      {errors?.email && (
                        <div className="invalid-feedback">{errors.email[0]}</div>
                      )}
                      {errors && <div className="valid-feedback">Looks good!</div>}
                    </div>
                    <div className="form-group">
                      <input
                      
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                     
						className={
							errors
								? errors.password
									? `form-control is-invalid`
									: `form-control is-valid`
								: "form-control"
						}
						id="yourPassword"
						
						onChange={handleChange}
						value={state.password}
					/>
					{errors?.password && (
						<div className="invalid-feedback">{errors.password[0]}</div>
					)}
					{errors && <div className="valid-feedback">Looks good!</div>}
                      
                    </div>
                    <div className="form-group">
                      <input
                       
                        required
                        type="password"
                   
                        placeholder="Confirm Password"
                        name="password_confirmation"
						className="form-control"
						id="yourPassword"
						
						onChange={handleChange}
						value={state.password_confirmation}
                      />
                    </div>
                    <div className="login-footer form-group">
                      <div className="check-form">
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
                            <span>I agree to terms & Policy.</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-fill-out btn-block"
                        name="login"
                      >
                        Register
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
                    Already have an account?{" "}
                    <Link href="/other/login">
                      <a>Log in</a>
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

export default Register;
