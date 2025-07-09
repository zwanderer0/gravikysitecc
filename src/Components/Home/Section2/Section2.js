/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Section2.css";

export default class Section2 extends Component {
  state = {
    scrolled: true,
    currentSlide: 0,
  };

  componentDidMount() {
    // Auto-advance slider
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  componentWillUnmount() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide:
        prevState.currentSlide === 1 ? 0 : prevState.currentSlide + 1,
    }));
  };

  goToSlide = (slideIndex) => {
    this.setState({ currentSlide: slideIndex });
  };

  render() {
    return (
      <div className="section2-container">
        <div className="content-layout">
          <div className="left-content">
            <ScrollAnimation animateIn="fadeInLeft">
              <div className="problem-section">
                <h3 className="section-label">The problem</h3>
                <div className="problem-stats">
                  <div className="problem-stat">
                    <h4 className="problem-number">18 M t</h4>
                    <p className="problem-desc">
                      carbon black made each year by burning fossil fuels
                    </p>
                  </div>
                  <div className="problem-stat">
                    <h4 className="problem-number">95 %</h4>
                    <p className="problem-desc">from virgin sources</p>
                  </div>
                  <div className="problem-stat">
                    <h4 className="problem-number">2.5 t CO₂</h4>
                    <p className="problem-desc">
                      released for every ton produced
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="center-content">
            <ScrollAnimation animateIn="fadeIn">
              <div className="solution-section">
                <h3 className="section-label">Our answer</h3>
                <p className="solution-text">
                  We capture exhaust particles, refine them, and supply
                  high-grade recycled pigment — no new fossil input, same
                  performance.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="right-content">
            <ScrollAnimation animateIn="fadeInRight">
              <div className="transformation-slider">
                <h3 className="section-label">Transformation Process</h3>
                <div className="slider-container">
                  <div
                    className={`slide ${this.state.currentSlide === 0 ? "active" : ""}`}
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fd98dba7543f447d6a176ed1d02f49cd5?format=webp&width=800"
                      alt="Raw PM2.5 carbon samples from emission sources"
                      className="slider-image"
                    />
                    <p className="slide-caption">
                      Raw PM2.5 emissions captured
                    </p>
                  </div>
                  <div
                    className={`slide ${this.state.currentSlide === 1 ? "active" : ""}`}
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Ff8c7a715eb974075976f3d389c831f09?format=webp&width=800"
                      alt="Processed carbon black pigments ready for use"
                      className="slider-image"
                    />
                    <p className="slide-caption">
                      Safe, non-virgin pigments ready for use
                    </p>
                  </div>
                </div>
                <div className="slider-dots">
                  <span
                    className={`dot ${this.state.currentSlide === 0 ? "active" : ""}`}
                    onClick={() => this.goToSlide(0)}
                  ></span>
                  <span
                    className={`dot ${this.state.currentSlide === 1 ? "active" : ""}`}
                    onClick={() => this.goToSlide(1)}
                  ></span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}
