import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GiftCard from "../giftcard.png";

class Gift extends Component {
  render() {
    return (
      <section id="giftCard" className="py-5 bg-dark text-light">
        <div
        data-aos="zoom-in-up"
        data-aos-duration="1400"
        data-aos-once="true"
        className="my-auto giftSection"
      >
          <Container className="px-lg-5">
            <Row className="mb-3">
              <Col lg={8} md={6}>
                <h4 className="mb-3">Gift Cards</h4>
                <p>
                  If you have a special occassion fast approaching, or if you need
                  the perfect gift for a friend, family member, or loved one, a
                  CYOBeauty gift card is a great and convenient option.
                </p>
                <p>
                  Fully customizable in any amount of your choosing, a digital
                  CYOBeauty gift card can be instantly sent to the e-mail inbox of
                  your recipient. Take the guesswork out of what to get your
                  special someone, and treat them to a day of pampering at the
                  salon.
                </p>
              </Col>
              <Col lg={4} md={6} sm={6} className="align-self-center text-center mx-auto">
                <a
                  href="https://squareup.com/gift/EGGRSH7H0KN70/order"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="img-fluid hvr-grow rounded"
                    src={GiftCard}
                    alt="Buy a CYOBeauty Giftcard"
                  />
                </a>
              </Col>
            </Row>
            <Row>
              <Col className="col text-center">
                <a
                  className="btn btn-info p-3 btn-lg hvr-grow"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://squareup.com/gift/EGGRSH7H0KN70/order"
                >
                  Buy a Gift Card
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Gift;
