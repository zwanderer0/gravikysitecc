import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import badge from "../../../assets/badge.png";
import analysis from "../../../assets/analysis.png";
import kaalink from "../../../assets/kaalink.png";
import people from "../../../assets/people.png";
import "./Psection8.css";

export default class Psection8 extends Component {
  render() {
    return (
      <div className="psection8-container">
        <h1>How is it made?</h1>
        <p>
          We collaborate with factories to sequester their emissions
          <br />
          as solid carbon so that its never released back into the environment,
          <br />
          turning otherwise harmful emissions into a useful resource.
        </p>
        <ScrollAnimation
          className="product-feature-section8"
          animateIn="fadeIn"
        >
          <div className="psection8-block">
            <img src={kaalink} alt="kaalink" />
            <h4>HARVEST CARBON<br/>EMISSIONS</h4>
            <p>We acquire carbon emissions from various factories</p>
          </div>
          <div className="psection8-block">
            <img src={analysis} alt="analysis" />
            <h4>
              ANALYSIS &<br />
              SORTING
            </h4>
            <p>
              We analyze and sort carbon streams by physical and material
              properties
            </p>
          </div>
          <div className="psection8-block">
            <img src={people} alt="people" />
            <h4>
              TREATMENT
              <br />
              <span>-</span>
            </h4>
            <p>
              With our proprietary treatment method, carbon emissions are turned
              into usable carbon
            </p>
          </div>
          <div className="psection8-block">
            <img src={badge} alt="badge" />
            <h4>
              FORMULATION
              <br />
              <span>-</span>
            </h4>
            <p>
              This carbon is turned into different grades of inks, dispersions
              and coatings
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
