/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-container">
        <h1>Carbon Emissions to <br />Everyday Materials</h1>
        <p>
          We transform carbon emissions into inks and other useful materials
        </p>
        <div className="landing-button-container">
          <a className="blue-button" href="/partners">
            Partner with us
          </a>
          <a className="white-button" href="/product">
            Learn more
          </a>
        </div>
      </div>
    );
  }
}
