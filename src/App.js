import React, { Component } from "react";
import Navigation from "./Components/Navigation.js";
import Header from "./Components/Header.js";
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYelp } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

library.add(faArrowCircleDown, faCalendarAlt, faMapMarkerAlt, faPhone, faEnvelope, faStar, faFacebookSquare, faInstagram, faYelp);

class App extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div id='wrapper'>
        <Navigation />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
