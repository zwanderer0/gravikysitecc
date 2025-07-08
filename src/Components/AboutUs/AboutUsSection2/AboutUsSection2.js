/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./AboutUsSection2.css";
import arrow from "../../../assets/arrow.png";
import aboutus0 from "../../../assets/aboutus0.png";
import aboutus1 from "../../../assets/aboutus1.png";
import aboutus2 from "../../../assets/aboutus2.png";
import aboutus3 from "../../../assets/aboutus3.png";
import aboutus4 from "../../../assets/aboutus4.png";
import aboutus5 from "../../../assets/aboutus5.png";
import aboutus6 from "../../../assets/aboutus6.png";
import aboutus7 from "../../../assets/aboutus7.png";
import aboutus8 from "../../../assets/aboutus8.png";

import ScrollAnimation from "react-animate-on-scroll";
import Lightbox from "fslightbox-react";

export default class AboutUsSection2 extends Component {
  state = {
    isVisible: false,
    slide: 0
  };

  showSlide = slide => {
    this.setState({
      isVisible: !this.state.isVisible,
      slide: slide
    });
  };

  render() {
    return (
      <div className="aboutus-section2-container">
        <Lightbox
          toggler={this.state.isVisible}
          slide={this.state.slide}
          sources={[
            require("../../../assets/aboutus0.png"),
            require("../../../assets/aboutus1.png"),
            require("../../../assets/aboutus2.png"),
            require("../../../assets/aboutus3.png"),
            require("../../../assets/aboutus4.png"),
            require("../../../assets/aboutus5.png"),
            require("../../../assets/aboutus6.png"),
            require("../../../assets/aboutus7.png"),
            require("../../../assets/aboutus8.png"),
          ]}
        />
        <ScrollAnimation
            animateIn="fadeIn"
            className="aboutus-section2-img-container"
          >
            <img src={aboutus0} alt="aboutus0" onClick={() => this.showSlide(1)}/>
            <img src={aboutus1} alt="aboutus1" onClick={() => this.showSlide(2)}/>
            <img src={aboutus2} alt="aboutus2" onClick={() => this.showSlide(3)}/>
            <img src={aboutus3} alt="aboutus3" onClick={() => this.showSlide(4)}/>
            <img src={aboutus4} alt="aboutus4" onClick={() => this.showSlide(5)}/>
            <img src={aboutus5} alt="aboutus5" onClick={() => this.showSlide(6)}/>
            <img src={aboutus6} alt="aboutus6" onClick={() => this.showSlide(7)}/>
            <img src={aboutus7} alt="aboutus7" onClick={() => this.showSlide(8)}/>
            <img src={aboutus8} alt="aboutus8" onClick={() => this.showSlide(9)}/>
          </ScrollAnimation>
          <a className="insta-link" href="https://www.instagram.com/air.ink/" target = "_blank">
            Check out more on our instagram <img src={arrow} alt="arrow" />
          </a>
      </div>
    );
  }
}
