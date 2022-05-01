import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram
} from "react-icons/fa";

const TeamMemberOne = ({ teamMemberData }) => {
  return (
    <div className="team-member-area space-pt--r100 space-pb--r70">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8} className=" space-mb--30">
            <div className="heading-s1 text-center space-mb--20">
              <h2>Our Team Members</h2>
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {teamMemberData &&
            teamMemberData.map((single, key) => {
              return (
                <div className="col-lg-3 col-sm-6" key={key}>
                  <div className="team-box">
                    <div className="team-box__image">
                      <img src={single.image} alt="team_img1" />
                      <ul className="team-box__social-icons">
                        <li>
                          <a href={single.facebookUrl}>
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a href={single.twitterUrl}>
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          <a href={single.googlePlusUrl}>
                            <FaGooglePlusG />
                          </a>
                        </li>
                        <li>
                          <a href={single.instagramUrl}>
                            <FaInstagram />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-box__content">
                      <div className="title">
                        <h5>{single.name}</h5>
                        <span>{single.designation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default TeamMemberOne;
