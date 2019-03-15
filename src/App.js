import React, { Component } from "react";
import Header from "./Header.js";
import Main from './Main.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

library.add(faArrowCircleDown);

class App extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
