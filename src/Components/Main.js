import React, { Component } from "react";
import Intro from './Intro.js';
import Testimonials from './Testimonials.js';
import Services from './Services.js';
import Igfeed from './Igfeed.js';
import Cancellation from './Cancellation.js';
import Gift from './Gift.js';
import ScrollUpButton from "react-scroll-up-button";

class Main extends Component {

  render() {
    return (
      <main>
        <Intro />
        <ScrollUpButton ContainerClassName="toTop" style={{height: '40px', backgroundColor: 'rgba(50, 50, 50, 0.2)'}} />
        <Testimonials />
        <Gift />
        <Services />
        <Cancellation />
        <Igfeed />
      </main>
    );
  }
}

export default Main;
