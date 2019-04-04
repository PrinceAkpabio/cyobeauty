import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class Services extends Component {
  render() {
    return (
          <section id="services" className="p-5">
          <div
      data-aos="zoom-in-up"
      data-aos-duration="1600"
      data-aos-once="true"
      className="my-auto servicesSection"
    >
            <Container>
              <Row>
               <Col className='mb-4'>
                  <h3>Services</h3>
                </Col>
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
                    className="btn btn-warning btn-lg hvr-grow"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://squareup.com/appointments/book/e6463a96-6afc-4b72-95c1-8ad6befe5544/1BPPJP6VCHYSN/start"
                  >
                    Book an Appointment
                  </a>
                </Col>
              </Row>
            </Container>
            </div>
          </section>
    );
  }
}

export default Services;