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
              <div className="carbon-samples-section">
                <h3 className="section-label">PM2.5 Carbon Samples</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fd98dba7543f447d6a176ed1d02f49cd5?format=webp&width=800"
                  alt="PM2.5 carbon samples from various sources - taxi, truck, motorcycle, diesel generator"
                  className="carbon-samples-image"
                />
                <p className="sample-caption">
                  Raw carbon particulates captured from vehicles and generators
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="center-content">
            <ScrollAnimation animateIn="fadeIn">
              <div className="main-message">
                <h2 className="headline-text">
                  We capture and recycle carbon emissions before they enter the
                  environment
                </h2>
                <p className="subtext">
                  Every time fossil fuels burn, they produce PM2.5 carbon
                  particles. Instead of letting them pollute our air, we capture
                  and transform them into useful carbon black materials.
                </p>
                <div className="stats-highlight">
                  <div className="stat-item">
                    <span className="stat-number">1 hour</span>
                    <span className="stat-label">
                      of exhaust = 30ml AIR-INK®
                    </span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="right-content">
            <ScrollAnimation animateIn="fadeInRight">
              <div className="processed-samples-section">
                <h3 className="section-label">Processed Carbon Black</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Ff8c7a715eb974075976f3d389c831f09?format=webp&width=800"
                  alt="Processed carbon black samples from Mumbai, London, Boston, Delhi, Hong Kong"
                  className="processed-samples-image"
                />
                <p className="sample-caption">
                  Refined carbon black from cities worldwide
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="learn-more-button">
          <a href="/product">Learn more</a>
        </div>
      </div>
    );
  }
}
