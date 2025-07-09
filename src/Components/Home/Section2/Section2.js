/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Section2.css";

export default class Section2 extends Component {
  state = {
    scrolled: true,
  };

  render() {
    return (
      <div className="section2-container">
        <div className="content-layout">
          <div className="left-content">
            <ScrollAnimation animateIn="fadeInLeft">
              <div className="impact-section">
                <h3 className="section-label">The Conventional Problem</h3>
                <div className="impact-stats">
                  <div className="impact-stat">
                    <h4 className="impact-number">18M tons</h4>
                    <p className="impact-desc">
                      of carbon black produced annually by burning fossil fuels
                    </p>
                  </div>
                  <div className="impact-stat">
                    <h4 className="impact-number">95%</h4>
                    <p className="impact-desc">
                      of commercial carbon black comes from virgin fossil fuel
                      combustion
                    </p>
                  </div>
                  <div className="impact-stat">
                    <h4 className="impact-number">2.5 tons CO₂</h4>
                    <p className="impact-desc">
                      emitted per ton of conventional carbon black
                    </p>
                  </div>
                </div>
                <p className="citation">
                  Source: International Carbon Black Association, 2023
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="center-content">
            <ScrollAnimation animateIn="fadeIn">
              <div className="main-message">
                <h2 className="headline-text">
                  Instead of letting them enter the environment, we capture,
                  classify and transform them into useful, safe non-virgin
                  pigments
                </h2>
                <p className="subtext">
                  While conventional carbon black is made by burning more fossil
                  fuels, we intercept existing emissions to create the same
                  high-quality pigments without additional environmental impact.
                </p>
                <div className="process-highlight">
                  <div className="process-step">
                    <span className="step-number">1</span>
                    <span className="step-text">Capture</span>
                  </div>
                  <div className="process-arrow">→</div>
                  <div className="process-step">
                    <span className="step-number">2</span>
                    <span className="step-text">Classify</span>
                  </div>
                  <div className="process-arrow">→</div>
                  <div className="process-step">
                    <span className="step-number">3</span>
                    <span className="step-text">Transform</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="right-content">
            <ScrollAnimation animateIn="fadeInRight">
              <div className="transformation-slider">
                <h3 className="section-label">Transformation Process</h3>
                <div className="slider-container">
                  <div className="slide active">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fd98dba7543f447d6a176ed1d02f49cd5?format=webp&width=800"
                      alt="Raw PM2.5 carbon samples from emission sources"
                      className="slider-image"
                    />
                    <p className="slide-caption">
                      Raw PM2.5 emissions captured
                    </p>
                  </div>
                  <div className="slide">
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
                  <span className="dot active" data-slide="0"></span>
                  <span className="dot" data-slide="1"></span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}
