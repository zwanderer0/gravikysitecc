/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import circle from "../../../assets/circle.png";
import "./Psection9.css";

export default class Psection9 extends Component {
  render() {
    return (
      <div className="psection9-container">
        <img src={circle} alt="circle" />
        <ScrollAnimation className="psection9-right-section" animateIn="fadeIn">
          <h1>Not just ink.</h1>
          <img src={circle} alt="circle" />
          <h4>
            We turn CO2 emissions into composites like construction material,
            rubber, thermoplastic polyurethanes and more using upcycled carbon emissions.
            Reach out to us to make new materials.
          </h4>
          <a className="rnd-button" href="#contact-form">
            Contact R&D
          </a>
        </ScrollAnimation>
      </div>
    );
  }
}
