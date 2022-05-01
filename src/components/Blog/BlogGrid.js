import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegComments, FaCalendarAlt } from "react-icons/fa";

const BlogGrid = ({ customClass }) => {
  return (
    <div className="blog-grid-area space-pb--r70">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="section-title text-center space-mb--25">
              <h2>Latest News</h2>
            </div>
            <p className="leads text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={4} md={6}>
            <div
              className={`blog-post blog-post--style-two ${
                customClass ? customClass : ""
              }`}
            >
              <div className="blog-post__image">
                <Link href="/blog/post-left-sidebar">
                  <a>
                    <img
                      src="/assets/images/blog/furniture_blog_img1.jpg"
                      alt="blog_small_img1"
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    <Link href="/blog/post-left-sidebar">
                      <a>
                        But I must explain to you how all this mistaken idea
                      </a>
                    </Link>
                  </h6>
                  <ul className="blog-meta">
                    <li>
                      <Link href="/blog/post-left-sidebar">
                        <a>
                          <FaCalendarAlt /> April 14, 2021
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/post-left-sidebar">
                        <a>
                          <FaRegComments /> 10 Comments
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div
              className={`blog-post blog-post--style-two ${
                customClass ? customClass : ""
              }`}
            >
              <div className="blog-post__image">
                <Link href="/blog/post-left-sidebar">
                  <a>
                    <img
                      src="/assets/images/blog/furniture_blog_img2.jpg"
                      alt="blog_small_img1"
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    <Link href="/blog/post-left-sidebar">
                      <a>
                        On the other hand we provide denounce with righteous
                      </a>
                    </Link>
                  </h6>
                  <ul className="blog-meta">
                    <li>
                      <Link href="/blog/post-left-sidebar">
                        <a>
                          <FaCalendarAlt /> April 15, 2020
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/post-left-sidebar">
                        <a>
                          <FaRegComments /> 11 Comments
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div
              className={`blog-post blog-post--style-two ${
                customClass ? customClass : ""
              }`}
            >
              <div className="blog-post__image">
                <Link href="/blog/post-left-sidebar">
                  <a>
                    <img
                      src="/assets/images/blog/furniture_blog_img3.jpg"
                      alt="blog_small_img1"
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    <Link href="/blog/post-left-sidebar">
                      <a>Why is a ticket to Lagos so expensive?</a>
                    </Link>
                  </h6>
                  <ul className="blog-meta">
                    <li>
                      <Link href="/blog/post-left-sidebar">
                        <a>
                          <FaCalendarAlt /> April 16, 2020
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/post-left-sidebar">
                        <a>
                          <FaRegComments /> 12 Comments
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogGrid;
