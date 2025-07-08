/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import arrow from "../../../assets/arrow.png";
import recycle1 from "../../../assets/RectangleCopy5.png";
import recycle2 from "../../../assets/RectangleCopy6.png";
import recycle3 from "../../../assets/RectangleCopy7.png";
import recycle4 from "../../../assets/RectangleCopy8.png";
import ScrollAnimation from "react-animate-on-scroll";
import Lightbox from "fslightbox-react";
import "./Partnersection8.css";

export default class Partnersection8 extends Component {
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
      <div className="partnersection8-container">
          <Lightbox
          toggler={this.state.isVisible}
          slide={this.state.slide}
          sources={[
            require('../../../assets/RectangleCopy6.png'),
            require('../../../assets/RectangleCopy8.png'),
            require('../../../assets/RectangleCopy5.png'),
            require('../../../assets/RectangleCopy7.png'),
          ]}
        />
        <div className="partnersection8-text-block">
          <h1>How artists use our products</h1>
          <ScrollAnimation
            animateIn="fadeIn"
            className="partnersection8-image-block-responsive"
          >
            <img src={recycle2} alt="recycle2" onClick={() => this.showSlide(1)}/>
            <img src={recycle4} alt="recycle4" onClick={() => this.showSlide(2)}/>
            <img src={recycle1} alt="recycle1" onClick={() => this.showSlide(3)}/>
            <img src={recycle3} alt="recycle3" onClick={() => this.showSlide(4)}/>
          </ScrollAnimation>
          <a className="artists-link" href="https://www.instagram.com/air.ink/" target = "_blank">
            Check out more on our instagram <img src={arrow} alt="arrow" />
          </a>
        </div>
        <ScrollAnimation
          animateIn="fadeIn"
          className="partnersection8-image-block"
        >
          <img src={recycle2} alt="recycle2" onClick={() => this.showSlide(1)}/>
          <img src={recycle4} alt="recycle4" onClick={() => this.showSlide(2)}/>
          <img src={recycle1} alt="recycle1" onClick={() => this.showSlide(3)}/>
          <img src={recycle3} alt="recycle3" onClick={() => this.showSlide(4)}/>
        </ScrollAnimation>
      </div>
    );
  }
}
