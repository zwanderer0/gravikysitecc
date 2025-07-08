import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Section8.css";

export default class Section8 extends Component {
  render() {
    return (
      <div className="section8-container">
        <ScrollAnimation className = "section8-text" animateIn="fadeIn">
          Helping businesses meet their sustainability and climate goals.
        </ScrollAnimation>
      </div>
    );
  }
}
