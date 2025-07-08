import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import edison from "../../../assets/edison.png";
import Daco from "../../../assets/Daco.png";
import singapore from "../../../assets/singapore.png";
import TED from "../../../assets/TED.png";
import Mit from "../../../assets/Mit.png";
import forbes from "../../../assets/forbes.png";
import times from "../../../assets/Times.png";
import dandad from "../../../assets/dandad.png";
import fp from "../../../assets/FP.png";
import "./AboutUsSection3.css";

export default class AboutUsSection3 extends Component {
  render() {
    return (
      <div className="aboutus-section3-container">
        <h4>Our Accolades</h4>
        <ScrollAnimation animateIn="fadeIn" className="aboutus-logo-containers">
          <img className="aboutus-logo-img" src={singapore} alt="singapore" />
          <img className="aboutus-logo-img" src={Mit} alt="Mit" />
          <img className="aboutus-logo-img" src={edison} alt="edison" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" className="aboutus-logo-containers">
          <img className="aboutus-logo-img1 ted-aboutus" src={TED} alt="TED" />
          <img className="aboutus-logo-img1 forbes-logo" src={forbes} alt="forbes" />
          <img className="aboutus-logo-img1 Daco-aboutus" src={Daco} alt="Daco" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" className="aboutus-logo-containers">
          <img className="aboutus-logo-img1" src={times} alt="Time" />
          <img className="aboutus-logo-img1 dandad-logo" src={dandad} alt="dandad" />
          <img className="aboutus-logo-img1" src={fp} alt="FP" />
        </ScrollAnimation>
      </div>
    );
  }
}
