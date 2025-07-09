import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Section2.css";

export default class Section2 extends Component {
  state = {
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
        <ScrollAnimation animateIn="fadeIn">
          <div className="section2-content">
            <div className="problem-column">
              <h4>THE PROBLEM</h4>
              <div className="stat-block">
                <h2>18 M t</h2>
                <p>carbon black made each year by burning fossil fuels</p>
              </div>
              <div className="stat-block">
                <h2>95 %</h2>
                <p>from virgin sources</p>
              </div>
              <div className="stat-block">
                <h2>2.5 t CO₂</h2>
                <p>released for every ton produced</p>
              </div>
            </div>

            <div className="answer-column">
              <h4>OUR ANSWER</h4>
              <p>
                We capture exhaust particles, refine them, and supply high-grade
                recycled pigment — no new fossil input, same performance.
              </p>
            </div>

            <div className="image-column">
              <div className="image-wrapper">
                <img
                  src={
                    this.state.currentSlide === 0
                      ? "https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fd98dba7543f447d6a176ed1d02f49cd5?format=webp&width=800"
                      : "https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Ff8c7a715eb974075976f3d389c831f09?format=webp&width=800"
                  }
                  alt={
                    this.state.currentSlide === 0
                      ? "Before: Raw carbon samples"
                      : "After: Processed pigments"
                  }
                  className="main-image"
                />
                <div className="image-label">
                  {this.state.currentSlide === 0 ? "BEFORE" : "AFTER"}
                </div>
              </div>
              <div className="image-dots">
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
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
