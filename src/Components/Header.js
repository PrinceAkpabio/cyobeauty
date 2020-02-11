import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
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
  }

  render() {
    return (
      <div id="header">
        <Jumbotron className="d-flex align-items-center mb-0">
          <Container className='text-center'>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
              className="my-auto introSection"
            >
              <Row>
                <Col className='p-0'>
                  <h1 className='display-3 text-center'>Be your own kind of beautiful</h1>
                  <p className='text-center'>
                    Full service South Florida beauty salon where you can "Create
                    Your Own Beauty"
                  </p>
                </Col>
              </Row>
            </div>
            <div className='text-center'>
            <FontAwesomeIcon
              id="scrollBtn"
              icon="arrow-circle-down"
              size="3x"
              className="downArrow animated infinite bounce slow"
            />
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
