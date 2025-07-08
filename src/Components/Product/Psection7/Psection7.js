/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Psection7.css";
import arrow from '../../../assets/arrow.png';
import pen from "../../../assets/pen.png";

export default class Psection7 extends Component {
  render() {
    return (
      <div id = "WritingInstruments" className="psrction7-container">
        <img className="pen-img" src={pen} alt="pen" />
        <ScrollAnimation
          animateIn="fadeIn"
          className="psection7-right-container"
        >
          <h1>Writing Instruments</h1>
          <p>Art and office supplies</p>
          <h4>
            Water based
            <br />
            Licensable to pen manufacturers
            <br />
            Available as 0.7mm and 2mm round tip pens
            <br />
            Available as 15mm chisel tip pens and 50mm wide tip pens
            <br />
            ASTM - D 4236 and California Prop 65 compliant
          </h4>
          <a className = "artists-link" href = "https://www.instagram.com/air.ink/" target = "_blank">See how artists used our pens <img src = {arrow} alt = "arrow"/></a>
        </ScrollAnimation>
      </div>
    );
  }
}
