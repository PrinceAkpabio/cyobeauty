import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LuminousGallery } from 'luminous-lightbox';
import One from "../1.jpg";
import Two from "../2.jpg";
import Three from "../3.png";
import Four from "../4.jpg";
import Five from "../5.png";
import Six from "../6.jpg";
import Seven from "../7.png";
import Eight from "../8.jpg";
import Nine from "../9.jpg";
import Ten from "../10.jpg";
import Eleven from "../11.jpg";
import Twelve from "../12.jpg";

class Igfeed extends Component {
  componentDidMount() {
    new LuminousGallery(
      document.querySelectorAll(".gallery-demo"),
      {
        arrowNavigation: true
      }
    );
    }

  render() {
    return (
      
      <section id="igFeed">
        <div
      data-aos="zoom-in-up"
      data-aos-duration="1600"
      data-aos-once="true"
      className="my-auto igFeedSection"
    >
          <Container className="p-5">
            <Row>
              <Col lg={3} md={6} className="py-3">
                <a href={One} className="gallery-demo">
                  <img
                    className="img-fluid hvr-grow"
                    src={One}
                    alt="Blonde ombre hair"
                  />
                </a>
              </Col>
              <Col lg={3} md={6} className="py-3">
                <a href={Two} className="gallery-demo">
                  <img
                    className="img-fluid hvr-grow"
                    src={Two}
                    alt="Red balayage hair"
                  />
                </a>
              </Col>
              <Col lg={3} md={6} className="py-3">
                <a href={Three} className="gallery-demo">
                  <img
                    className="img-fluid hvr-grow"
                    src={Three}
                    alt="Honey blonde hair"
                  />
                </a>
              </Col>
              <Col lg={3} md={6} className="py-3">
                <a href={Four} className="gallery-demo">
                  <img
                    className="img-fluid hvr-grow"
                    src={Four}
                    alt="Blonde babylights"
                  />
                </a>
              </Col>
              <Col lg={3} md={6} className="py-3">
                <a href={Five} className="gallery-demo">
                  <img
                    className="img-fluid hvr-grow"
                    src={Five}
                    alt="Honey blonde balayage hair"
                  />
                </a>
              </Col>
              <Col lg={3} md={6} className="py-3">
                <a href={Six} className="gallery-demo">
                  <img
                    className="img-fluid hvr-grow"
                    src={Six}
                    alt="Golden blonde hair"
                  />
                </a>
              </Col>
              <Col lg={3} md={6} className="py-3">
                <a href={Seven} className="gallery-demo">
                  <img
                    className="img-fluid hvr-grow"
                    src={Seven}
                    alt="White hair with lowlights"
                  />
                </a>
              </Col>
              <Col lg={3} md={6} className="py-3">
                <a href={Eight} className="gallery-demo">
                  <img
                    className="img-fluid hvr-grow"
                    src={Eight}
                    alt="Platinum blonde balayage with silver"
                  />
                </a>
              </Col>
              <Col lg={3} md={6} className="py-3">
                <a href={Nine} className="gallery-demo">
                  <img
                    className="img-fluid hvr-grow"
                    src={Nine}
                    alt="Red copper hair"
                  />
                </a>
              </Col>
              <Col lg={3} md={6} className="py-3">
                <a href={Ten} className="gallery-demo">
                  <img
                    className="img-fluid hvr-grow"
                    src={Ten}
                    alt="Dark red hair"
                  />
                </a>
              </Col>
              <Col lg={3} md={6} className="py-3">
                <a href={Eleven} className="gallery-demo">
                  <img
                    className="img-fluid hvr-grow"
                    src={Eleven}
                    alt="Blonde updo for wedding"
                  />
                </a>
              </Col>
              <Col lg={3} md={6} className="py-3">
                <a href={Twelve} className="gallery-demo">
                  <img
                    className="img-fluid hvr-grow"
                    src={Twelve}
                    alt="Caramel balayage hair"
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Igfeed;
