import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { animateScroll } from "react-scroll";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGoogleplus,
  IoLogoYoutube,
  IoLogoInstagram,
  IoIosPhonePortrait,
  IoIosMailOpen,
  IoIosPin,
  IoIosArrowUp
} from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { SubscribeEmail } from "../Newsletter";

const FooterOne = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <Fragment>
      <div className="bg--default space-pt--60 space-pb--60">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h3 className="newsletter-title text-white mb-md-0">
                Subscribe Our Newsletter
              </h3>
            </Col>
            <Col md={6}>
              <SubscribeEmail
                mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                alertColor="#fff"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="footer-dark">
        <div className="footer-top">
          <Container>
            <Row>
              <Col lg={3} md={6} sm={12}>
                <div className="widget">
                  <div className="footer-logo">
                    <Link href="/">
                      <a>
                        <img src="/assets/images/logo_light.png" alt="logo" />
                      </a>
                    </Link>
                  </div>
                  <p>
                    If you are going to use of Lorem Ipsum need to be sure there
                    isn't hidden of text
                  </p>
                </div>
                <div className="widget">
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <IoLogoFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <IoLogoTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <IoLogoGoogleplus />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <IoLogoYoutube />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <IoLogoInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6}>
                <div className="widget">
                  <h6 className="widget-title">Useful Links</h6>
                  <ul className="widget-links">
                    <li>
                      <Link href="/other/about-us">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/other/faq">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Location</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Affiliates</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/other/contact-us">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6}>
                <div className="widget">
                  <h6 className="widget-title">Category</h6>
                  <ul className="widget-links">
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Men</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Woman</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Kids</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>Best Seller</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/grid-left-sidebar">
                        <a>New Arrivals</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={6} sm={6}>
                <div className="widget">
                  <h6 className="widget-title">My Account</h6>
                  <ul className="widget-links">
                    <li>
                      <Link href="/other/my-account">
                        <a>My Account</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Discount</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Returns</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Orders History</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Order Tracking</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <div className="widget">
                  <h6 className="widget-title">Contact Info</h6>
                  <ul className="contact-info contact-info-light">
                    <li>
                      <IoIosPin />
                      <p>123 Street, Old Trafford, New South London , UK</p>
                    </li>
                    <li>
                      <IoIosMailOpen />
                      <a href="mailto:info@sitename.com">info@sitename.com</a>
                    </li>
                    <li>
                      <IoIosPhonePortrait />
                      <p>+ 457 789 789 65</p>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bottom-footer border-top--grey">
          <Container>
            <Row>
              <Col md={6}>
                <p className="mb-3 mb-md-0 text-center text-md-left">
                  Copyright &copy; {new Date().getFullYear() + " "}. Built with{" "}
                  <FaHeart /> by{" "}
                  <a href="https://www.hasthemes.com" target="_blank">
                    HasThemes
                  </a>
                </p>
              </Col>
              <Col md={6}>
                <ul className="footer-payment text-center text-lg-right">
                  <li>
                    <a href="#">
                      <img src="/assets/images/icons/visa.png" alt="visa" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/icons/discover.png"
                        alt="discover"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/icons/master_card.png"
                        alt="master_card"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/assets/images/icons/paypal.png" alt="paypal" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/icons/amarican_express.png"
                        alt="american_express"
                      />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <button
          className={`scroll-top ${scroll > top ? "show" : ""}`}
          onClick={() => scrollToTop()}
        >
          <IoIosArrowUp />
        </button>
      </footer>
    </Fragment>
  );
};

export default FooterOne;
