import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ssmith from "../ssmith.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

class Intro extends Component {
  render() {
    return (
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1400"
        data-aos-once="true"
        className="my-auto introSection"
      >
        <Container id="intro" className="px-5 h-100">
          <Row className="mb-4">
            <Col lg={7} md={6}>
              <h2 className="mb-3">Hi, I'm Stephanie.</h2>
              <h5 className="mb-5 font-weight-light">
                Creator and Stylist of CYOBeauty.
              </h5>

              <p>
                <span className="font-weight-bold">Founded in 2015</span>,
                CYOBeauty is a one-woman operation located in Plantation,
                Florida, making the salon experience far more special and
                personalized than what you'll usually find elsewhere. I am
                passionate about hair care and color care which means I use only
                top of the line hair products with minimal ingredients,
                including exclusives like OLAPLEX and Matrix Biolage RAW.
              </p>
              <p>
                I specalize in <strong>Balayage</strong>, a technique popular
                among celebrities resulting in low-maintenance hair color that
                looks naturally painted from root to tip. I offer both complete
                hair transformations and maintenance services. I'm familiar with
                a range of the latest styles in both long hair and short hair
                cuts, and would love to work with you to create your own custom
                look.
              </p>
            </Col>
            <Col
              id="photoMedia"
              lg={5}
              md={6}
              sm={9}
              className="align-self-center text-center mx-auto"
            >
              <img
                className="w-75 rounded-circle"
                src={Ssmith}
                alt="Stephanie Smith, CYOBeauty"
              />
              <div className="my-3">
                <a
                  href="https://www.facebook.com/cyobeauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hvr-grow"
                >
                  <FontAwesomeIcon
                    title="CYOBeauty Facebook"
                    icon={faFacebookSquare}
                    className="mx-2"
                    size="2x"
                  />
                </a>
                <a
                  href="https://www.instagram.com/cyobeauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hvr-grow"
                >
                  <FontAwesomeIcon
                    title="CYOBeauty Instagram"
                    icon={faInstagram}
                    className="mx-2"
                    size="2x"
                  />
                </a>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <a
                className="btn btn-info btn-lg hvr-grow p-3 text-white"
                target="_blank"
                rel="noopener noreferrer"
                href="https://squareup.com/appointments/book/e6463a96-6afc-4b72-95c1-8ad6befe5544/1BPPJP6VCHYSN/start"
              >
                Schedule a free consultation
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Intro;
