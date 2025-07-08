/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Section2.css";

export default class Section2 extends Component {
  state = {
    scrolled: true
  };

  render() {
    return (
      <div className="section2-container">
        <ScrollAnimation animateIn="fadeIn">
          <p
            className={
              this.state.scrolled === false
                ? "transparent light-text"
                : "light-text"
            }
          >
            Most products/materials around us are made by burning fossil fuels which adds to a significant amount of C02 in the environment.
          </p>
          <p
            className={
              this.state.scrolled === false
                ? "transparent medium-text"
                : "medium-text"
            }
          >
            We mitigate these carbon emissions by turning them into industrial materials.
          </p>
        </ScrollAnimation>
        <div className="learn-more-button">
          <a href="/product">Learn more</a>
        </div>
      </div>
    );
  }
}
