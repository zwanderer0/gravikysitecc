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
        <ScrollAnimation animateIn="fadeIn">
          <div className="stats-grid">
            <div className="stat-item">
              <h2 className="stat-number">36.7B</h2>
              <p className="stat-label">tons of CO₂ emitted globally in 2022</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-number">80%</h2>
              <p className="stat-label">
                of industrial materials from fossil fuels
              </p>
            </div>
            <div className="stat-item">
              <h2 className="stat-number">1 hour</h2>
              <p className="stat-label">of vehicle exhaust = 30ml AIR-INK®</p>
            </div>
          </div>
          <div className="main-message">
            <p className="headline-text">
              We capture carbon emissions before they pollute our air
            </p>
            <p className="subtext">
              Transforming industrial waste into everyday materials like inks,
              paints, and carbon black pigments
            </p>
          </div>
          <div className="citation">
            <p>Source: Global Carbon Atlas, IEA Energy Statistics</p>
          </div>
        </ScrollAnimation>
        <div className="learn-more-button">
          <a href="/product">Learn more</a>
        </div>
      </div>
    );
  }
}
