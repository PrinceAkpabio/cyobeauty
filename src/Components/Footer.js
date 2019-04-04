import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faYelp
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <Container className="p-5">
          <Row>
            <Col className="footerLinks" lg={4} md={4} sm={12}>
              <h3 className="mb-4">CYOBeauty</h3>
              <p id="footerAbout">
                Located in the center of Plantation, FL, our salon offers top of
                the line hair care products and features premier, cutting-edge
                procedures.{" "}
                <a href="https://squareup.com/appointments/book/e6463a96-6afc-4b72-95c1-8ad6befe5544/1BPPJP6VCHYSN/start">
                  Book an appointment now
                </a>{" "}
                and create your own beauty!
              </p>

              <p className="my-3">
                <a
                  href="https://www.facebook.com/cyobeauty/"
                  target="_blank"
                  rel="noopener noreferrer" className='hvr-grow'
                >
                  <FontAwesomeIcon
                    title="Facebook"
                    icon={faFacebookSquare}
                    className="mx-2"
                    size="2x"
                  />
                </a>
                <a
                  href="https://www.instagram.com/cyobeauty/"
                  target="_blank"
                  rel="noopener noreferrer" className='hvr-grow'
                >
                  <FontAwesomeIcon
                    title="Instagram"
                    icon={faInstagram}
                    className="mx-2"
                    size="2x"
                  />
                </a>
                <a
                  href="https://www.yelp.com/biz/cyobeauty-plantation-2"
                  target="_blank"
                  rel="noopener noreferrer" className='hvr-grow'
                >
                  <FontAwesomeIcon
                    title="Yelp"
                    icon={faYelp}
                    className="mx-2"
                    size="2x"
                  />
                </a>
              </p>

              <h4 className="mb-3">Contact</h4>
              <a href="tel:954-529-5774" className="hvr-float">
                <p className="mb-1">
                  <FontAwesomeIcon title="Call" icon="phone" className="mr-3" />
                  (954) 529 - 5774
                </p>
              </a>
              <a href="mailto:cyobeauty@gmail.com" className="hvr-float">
                <p className="mb-1">
                  <FontAwesomeIcon
                    title="Email"
                    icon="envelope"
                    className="mr-3"
                  />
                  cyobeauty@gmail.com
                </p>
              </a>
              <a
                href="https://goo.gl/maps/9jSkmYFU1FK2"
                target="_blank"
                rel="noopener noreferrer"
                className="hvr-float"
              >
                <p>
                  <FontAwesomeIcon
                    title="Visit"
                    icon="map-marker-alt"
                    className="mr-3"
                  />
                  1531 S University Dr #113, Plantation FL
                </p>
              </a>
            </Col>
            <Col className="footerLinks" lg={4} md={4} sm={12}>
              <h3 className="mb-4">Navigate</h3>
              <ul className="pl-0">
                <li className="mb-3">
                  <a href="#header" className="hvr-float">
                    Home
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#intro" className="hvr-float">
                    About
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#testimonials" className="hvr-float">
                    Testimonials
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#services" className="hvr-float">
                    Services
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#igFeed" className="hvr-float">
                    Portfolio
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <h3 className="mb-4">Salon Hours</h3>
              <ul className="pl-0">
                <li className="mb-3">
                  <strong className="mr-2">Sun:</strong> Closed
                </li>
                <li className="mb-3">
                  <strong className="mr-2">Mon:</strong> Closed
                </li>
                <li className="mb-3">
                  <strong className="mr-2">Tue:</strong> 1:00 pm - 8:00 pm
                </li>
                <li className="mb-3">
                  <strong className="mr-2">Wed:</strong> 9:00 am - 6:00 pm
                </li>
                <li className="mb-3">
                  <strong className="mr-2">Thu:</strong> Closed
                </li>
                <li className="mb-3">
                  <strong className="mr-2">Fri:</strong> 9:00 am - 6:00 pm
                </li>
                <li className="mb-3">
                  <strong className="mr-2">Sat:</strong> 9:00 am - 6:00 pm
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div id="bottomFooter" className="m-0 p-4">
          <p className="text-center mb-0 text-muted footerLinks">
            &copy; CYOBeauty 2019 by{" "}
            <a
              href="https://madelinejones.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              St Lucie Web Design
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
