/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./HeroSection.css";
// import RoHs from "../../../assets/RoHs.png";
// import NonToxic from "../../../assets/NonToxic.png";
// import CALIFORNIA from "../../../assets/CALIFORNIA.png";
// import A01 from "../../../assets/A01.png";
import airInk from "../../../assets/AlR-INK Flexographic.png";
import ScrollAnimation from "react-animate-on-scroll";

export default class HeroSection extends Component {
  render() {
    return (
      <div className="hero-product-container">
        
        <img className="hero-air-ink-img" src={airInk} alt="air-ink-img" />
        <ScrollAnimation
          className="hero-product-right-subcontainer"
          animateIn="fadeIn"
        >
          <h1>AIR-INK<sup>®</sup></h1>
          <p>
          The perfect substitute.
          </p>
          {/* <div className = "img-sub-container">
            <div>
              <img src = {RoHs} alt = "RoHs"/>
              <img src = {NonToxic} alt = "NonToxic"/>
            </div>
            <div>
              <img src = {CALIFORNIA} alt = "CALIFORNIA"/>
              <img src = {A01} alt = "A01"/>
            </div>
          </div> */}
        </ScrollAnimation>
      </div>
    );
  }
}
