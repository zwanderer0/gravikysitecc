/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Psection6.css";

export default class Psection6 extends Component {
  render() {
    return (
      <div id="SilkScreen" className="psection6-container">
        <ScrollAnimation
          animateIn="fadeIn"
          className="psection6-right-container"
        >
          <h1>Silk screen Ink</h1>
          <p>For apparel, plastics, automotive interiors</p>
          <h4>
            Water based
            <br />
            ROHS, A-01 compliant
            <br />
            Undergoing ASTM - D 6400 (compostability)
            <br />
            Certified for apparel
          </h4>
          <a className="contact-sales-button" href="#contact-form">
            Contact Sales
          </a>
        </ScrollAnimation>
      </div>
    );
  }
}
