import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navigation extends Component {
  componentDidMount() {
    (function() {
      let scrollPos = window.scrollY;
      const navBar = document.querySelector(".navbar");

      const addClass = () => {
        navBar.classList.remove("navTransparent");
        navBar.classList.add("navWhite");
      };

      const removeClass = () => {
        navBar.classList.remove("navWhite");
        navBar.classList.add("navTransparent");
      };

      window.addEventListener("scroll", function() {
        scrollPos = window.scrollY;
        if (scrollPos > 10) {
          addClass();
        } else {
          removeClass();
        }
      });
    })();
  }

  render() {
    return (
      <header>
        <Navbar id="navBar" collapseOnSelect expand="lg" fixed="top" className='navTransparent'>
          <Container>
            <Navbar.Brand href="#header">CYOBeauty</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#header" className="p-3 mx-3">
                  Home
                </Nav.Link>
                <Nav.Link href="#intro" className="p-3 mx-3">
                  About
                </Nav.Link>
                <Nav.Link href="#testimonials" className="p-3 mx-3">
                  Testimonials
                </Nav.Link>
                <Nav.Link href="#services" className="p-3 mx-3">
                  Services
                </Nav.Link>
                <Nav.Link href="#igFeed" className="p-3 mx-3">
                  Portfolio
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link target="_blank" href="https://squareup.com/appointments/book/e6463a96-6afc-4b72-95c1-8ad6befe5544/1BPPJP6VCHYSN/start">
                  <FontAwesomeIcon title='Schedule an appointment' icon="calendar-alt" size="2x" />
                </Nav.Link>
                <Nav.Link target="_blank" href='https://squareup.com/loyalty/EGGRSH7H0KN70'>
                  <FontAwesomeIcon title='Rewards Program' icon='gift' size='2x' />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Navigation;
