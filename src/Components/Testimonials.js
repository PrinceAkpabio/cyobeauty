import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1600"
          data-aos-once="true"
          className="testimonialsSection"
        >
          <Container className="p-5 text-center">
            <h2 className="text-center mt-5">Testimonials</h2>
            <Row className="justify-content-center mb-5">
              <Col lg={7} md={9} sm={12}>
                <Carousel controls={false}>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <p>
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                      </p>
                      <p className="lead mb-3">
                        "Stephanie is amazing. She's been doing my hair for
                        about two years now and I couldn't be happier. I've
                        never had a bad experience."
                      </p>
                      <h4 className="mb-5">- Heather T.</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <p>
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                      </p>
                      <p className="lead mb-3">
                        "Stephanie has been doing my hair for years. She is
                        always up to date on the newest styles and only uses the
                        best hair coloring products."
                      </p>
                      <h4 className="mb-5">- Brenda S.</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <p>
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                      </p>
                      <p className="lead mb-3">
                        "If you want top of the line results, service and cost
                        this is your place. There is a difference between
                        profession and passion, come and find out for yourself."
                      </p>
                      <h4 className="mb-5">- Anahi R.</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <p>
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                      </p>
                      <p className="lead mb-3">
                        "Stephanie honestly is one of the best hair dressers
                        I've ever been to... she ALWAYS does a very lovely &
                        professional job! Would definitely recommend her!"
                      </p>
                      <h4 className="mb-5">- Crystal B.</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <p>
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                      </p>
                      <p className="lead mb-3">
                        "I love Stephanie, I always leave loving my hair. She is
                        always on time, her studio is beautiful and she always
                        has a great attitude. I have seen her for a few years
                        now."
                      </p>
                      <h4 className="mb-5">- Maria M.</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <p>
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                        <FontAwesomeIcon
                          title="Stars"
                          icon={faStar}
                          className="mx-1"
                          size="1x"
                        />
                      </p>
                      <p className="lead mb-3">
                        "Stephanie is the greatest! She's very helpful, used
                        excellent hair care products, and I even learned how
                        manage my naturally curly hair better."
                      </p>
                      <h4 className="mb-5">- Whitney B.</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Testimonials;
