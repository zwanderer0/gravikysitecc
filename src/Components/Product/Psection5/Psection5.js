/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Psection5.css";
import Flexo from "../../../assets/airinkIndustrial.png";

export default class Psection extends Component {
  render() {
    return (
      <div id="Flexographic" className="psection5-container">
        <img className="flexo-img" src={Flexo} alt="flexo" />
        <ScrollAnimation
          animateIn="fadeIn"
          className="psection5-right-container"
        >
          <h1>Flexographic Ink</h1>
          <p>For commercial packaging</p>
          <h4>
            Water based
            <br />
            Commercially corrugated packaging
            <br />
            ROHS compliant
            <br />
            Undergoing ASTM - D 6400 (compostability)
            <br />
            Magnetically sortable
          </h4>
          <a className = "contact-sales-button" href = "#contact-form">Contact Sales</a>
        </ScrollAnimation>
      </div>
    );
  }
}
