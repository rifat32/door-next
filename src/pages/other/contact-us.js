import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegMap, FaRegEnvelopeOpen, FaMobileAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Contact Us">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Contact Us</li>
        </ol>
      </BreadcrumbOne>
      <div className="contact-content space-pt--r100 space-pb--r100">
        <div className="contact-icon-area space-pb--r70">
          <Container>
            <Row>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaRegMap />
                  </div>
                  <div className="contact-wrap__text">
                    <span>Address</span>
                    <p>123 Street, Old Trafford, London, UK</p>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaRegEnvelopeOpen />
                  </div>
                  <div className="contact-wrap__text">
                    <span>Email Address</span>
                    <a href="mailto:info@sitename.com">info@yourmail.com </a>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaMobileAlt />
                  </div>
                  <div className="contact-wrap__text">
                    <span>Phone</span>
                    <p>+ 457 789 789 65</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact-form-map-area">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="heading-s1 space-mb--20">
                  <h2>Get In touch</h2>
                </div>
                <p className="leads">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus blandit massa enim. Nullam id varius nunc id varius
                  nunc.
                </p>
                <div className="field-form">
                  <form method="post">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          required
                          placeholder="Enter Name *"
                          id="first-name"
                          className="form-control"
                          name="name"
                          type="text"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          required
                          placeholder="Enter Email *"
                          id="email"
                          className="form-control"
                          name="email"
                          type="email"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          required
                          placeholder="Enter Phone No. *"
                          id="phone"
                          className="form-control"
                          name="phone"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          placeholder="Enter Subject"
                          id="subject"
                          className="form-control"
                          name="subject"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          required
                          placeholder="Message *"
                          id="description"
                          className="form-control"
                          name="message"
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          title="Submit Your Message!"
                          className="btn btn-fill-out"
                          id="submitButton"
                          name="submit"
                          value="Submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
              <Col lg={6} className="pt-2 pt-lg-0 mt-4 mt-lg-0">
                <div className="google-map">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6777.000026107364!2d-74.08304414937152!3d40.83212940017352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f866a80dcc27%3A0x3e3160910d4d5045!2sHoliday%20Inn%20Express%20%26%20Suites%20Meadowlands%20Area!5e0!3m2!1sen!2sbd!4v1581852597883!5m2!1sen!2sbd"
                    allowFullScreen
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutOne>
  );
};

export default ContactUs;
