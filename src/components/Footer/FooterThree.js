import { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { animateScroll } from "react-scroll";
import {
  IoIosPhonePortrait,
  IoIosMailOpen,
  IoIosPin,
  IoIosArrowUp
} from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
  FaInstagram,
  FaHeart
} from "react-icons/fa";
import { SubscribeEmailTwo } from "../Newsletter";

const FooterThree = () => {
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
    <footer className="footer-dark">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
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
              <div className="widget">
                <ul className="social-icons mb-3 mb-lg-0">
                  <li>
                    <a href="#" className="sc_facebook">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_twitter">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_google">
                      <FaGooglePlusG />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_youtube">
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_instagram">
                      <FaInstagram />
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
            <Col lg={4} md={12} sm={12}>
              <div className="widget">
                <h6 className="widget-title">Subscribe Our Newsletter</h6>
                <p>
                  If you want to get an email from us every time we have a new
                  special offer, then sign up here!
                </p>
                <SubscribeEmailTwo
                  mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                  alertColor="#fff"
                />
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
  );
};

export default FooterThree;
