import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

class Header extends Component {
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
        <Navbar id="navBar" collapseOnSelect expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">CYOBeauty</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features" className="p-3">
                  Services
                </Nav.Link>
                <Nav.Link href="#pricing" className="p-3">
                  About
                </Nav.Link>
                <Nav.Link href="#igFeed" className="p-3">
                  Portfolio
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
