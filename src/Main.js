import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Main extends Component {
  componentDidMount() {
    // Adds scrolling when button is clicked
    (function() {
      const button = document.querySelector("#scrollBtn");
      // Add functionality later to remove scroll animations on scroll/click
      const scrollTo = () => {
        const firstContainer = document.querySelector("#intro");

        firstContainer.scrollIntoView({
          behavior: "smooth",
          block: "end"
        });
      };
      button.addEventListener("click", scrollTo);
    })();

    //These functions add the required IG widget scripts
    const script = document.createElement("script");

    script.src = "https://snapwidget.com/js/snapwidget.js";
    script.async = true;

    document.body.appendChild(script);

    const script2 = document.createElement("script");

    script2.src = "https://snapwidget.com/js/snapwidget-lightbox.js";
    script2.async = true;

    document.body.appendChild(script2);
  }

  render() {
    return (
      <main>
        <Jumbotron className="d-flex align-items-center mb-0">
          <Container className="text-center text-black">
            <h1>Be your own kind of beautiful</h1>
            <p>
              Full service, South Florida beauty salon where you can "Create
              Your Own Beauty"
            </p>
            <FontAwesomeIcon
              id="scrollBtn"
              icon="arrow-circle-down"
              size="3x"
              className="downArrow animated infinite bounce slow"
            />
          </Container>
        </Jumbotron>
        <Container id="intro" className="p-5">
          <Row className="h-100">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1200"
              data-aos-once="true"
              className="my-auto introSection"
            >
              <h2>Hello</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                lobortis justo et ornare mattis. Nam placerat ex vel bibendum
                tempor. Curabitur nec pharetra tortor. Nullam non risus et eros
                sagittis eleifend. Phasellus vitae augue mauris. Praesent
                placerat eleifend blandit. Suspendisse potenti.{" "}
              </p>
              <p>
                Pellentesque lobortis ligula et quam malesuada feugiat.
                Pellentesque condimentum, felis et eleifend suscipit, dui purus
                viverra velit, eu laoreet lorem nisl a libero. Phasellus eros
                tortor, rutrum malesuada ex id, viverra vehicula est. Curabitur
                ac tincidunt libero, a laoreet eros. Praesent in ante a nulla
                eleifend lobortis. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Sed sit amet arcu quam. Etiam facilisis
                nulla in arcu dictum ornare. Nulla cursus dignissim magna in
                finibus. Maecenas ipsum nulla, aliquam at pulvinar quis, gravida
                id tortor.
              </p>
              <p>
                Nulla vulputate ipsum at pretium vulputate. Nulla facilisi.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Proin ut dapibus orci, quis
                maximus sem. Suspendisse potenti. Nullam sed malesuada elit.
                Vestibulum id neque ac urna bibendum feugiat sed eget nisl.
                Vestibulum porta nunc nibh, vel ultricies est cursus vitae.
                Phasellus ac gravida massa. Morbi suscipit mattis justo quis
                ornare. In et lorem a eros euismod mollis in at mauris.
                Curabitur in lectus placerat nisl posuere cursus nec a massa.
              </p>
            </div>
          </Row>
        </Container>
          <section id="testimonials" className="p-5">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="node_modules/holderjs/holder.js/800x400&bh=282c34"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Third slide"
                />
  
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />
  
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </section>
        <section id="services" className="p-5">
          <Container>
            <Row>
              <div className="col mb-4">
                <h3>Services</h3>
              </div>
            </Row>
            <Row className="justify-content-center">
              <Col sm={6} lg={4} className="mb-4 justify-content-center">
                <Card className="box text-center py-4">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Consultation</h5>
                    <p className="card-text text-muted">
                      <strong>Free</strong> &#8901; 15 minutes
                    </p>
                  </div>
                </Card>
              </Col>
              <Col sm={6} lg={4} className="mb-4 justify-content-center">
                <Card className="box text-center py-4">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Haircut</h5>
                    <p className="card-text text-muted">
                      <strong>$35</strong> &#8901; 30 minutes
                    </p>
                  </div>
                </Card>
              </Col>
              <Col sm={6} lg={4} className="mb-4 justify-content-center">
                <Card className="box text-center py-4">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Haircut &amp; Blowdry</h5>
                    <p className="card-text text-muted">
                      <strong>$50</strong> &#8901; 1 hour
                    </p>
                  </div>
                </Card>
              </Col>
              <Col sm={6} lg={4} className="mb-4 justify-content-center">
                <Card className="box text-center py-4">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Full Color</h5>
                    <p className="card-text text-muted">
                      <strong>$85</strong> &#8901; 45 minutes
                    </p>
                  </div>
                </Card>
              </Col>
              <Col sm={6} lg={4} className="mb-4 justify-content-center">
                <Card className="box text-center py-4">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Partial Highlights</h5>
                    <p className="card-text text-muted">
                      <strong>$80</strong> &#8901; 1 hour
                    </p>
                  </div>
                </Card>
              </Col>
              <Col sm={6} lg={4} className="mb-4 justify-content-center">
                <Card className="box text-center py-4">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Full Highlights</h5>
                    <p className="card-text text-muted">
                      <strong>$125</strong> &#8901; 1.25 hours
                    </p>
                  </div>
                </Card>
              </Col>
              <Col sm={6} lg={4} className="mb-4 justify-content-center">
                <Card className="box text-center py-4">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Full Balayge</h5>
                    <p className="card-text text-muted">
                      <strong>$200</strong> &#8901; 2 hours
                    </p>
                  </div>
                </Card>
              </Col>
              <Col sm={6} lg={4} className="mb-4 justify-content-center">
                <Card className="box text-center py-4">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Balayge Ombre</h5>
                    <p className="card-text text-muted">
                      <strong>$250</strong> &#8901; 2.5 hours
                    </p>
                  </div>
                </Card>
              </Col>
              <Col sm={6} lg={4} className="mb-4 justify-content-center">
                <Card className="box text-center py-4">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Root Touch-up</h5>
                    <p className="card-text text-muted">
                      <strong>$65</strong> &#8901; 45 minutes
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="col text-center">
                <a
                  className="btn btn-success btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://squareup.com/appointments/book/e6463a96-6afc-4b72-95c1-8ad6befe5544/1BPPJP6VCHYSN/start"
                >
                  Book an Appointment
                </a>
              </Col>
            </Row>
          </Container>
        </section>
        <div id="igFeed" className="d-flex align-items-center mb-0">
          <Container className="p-5">
            <Row className="justify-content-center">
              <iframe
                src="https://snapwidget.com/embed/671108"
                title="IG widget"
                className="snapwidget-widget"
                allowtransparency="true"
                frameBorder="0"
                scrolling="no"
                style={{ border: "none", overflow: "hidden", width: "100%" }}
              />
            </Row>
          </Container>
        </div>
      </main>
    );
  }
}

export default Main;
