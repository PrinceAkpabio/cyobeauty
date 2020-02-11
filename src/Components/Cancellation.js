import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Cancellation extends Component {
  render() {
    return (
      <section id="cancellation" className="py-5 bg-dark text-light">
        <div
        data-aos="zoom-in-up"
        data-aos-duration="1400"
        data-aos-once="true"
        className="my-auto cancellationSection"
      >
          <Container className='px-lg-5'>
            <Row>
              <Col className='mx-lg-5 px-lg-5 px-4'>
                <h4 className='mb-3'>Cancellation Policy</h4>
                <p>
                  Your appointment is very important to CYOBeauty and reserved especially for you! However, we understand that things happen and sometimes appointment cancellations are necessary.
                </p>
                <p>
                    Please let us know 24 hours before your scheduled appointment time if you need to cancel. Last minute cancellations, and those who are more than 10 minutes late to their appointments, will be charged a $50 cancellation fee.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Cancellation;
