import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import factory from "../../../assets/factory.png";
import firewall from "../../../assets/firewall.png";
import forest from "../../../assets/forest.png";
import chart from "../../../assets/chart.png";
import rocket from "../../../assets/rocket.png";
import shield from "../../../assets/shield.svg";
import "./Section6.css";

export default class Section6 extends Component {
  render() {
    return (
      <div className="section6-container">
        <h1>Why Partner with Graviky?</h1>
        <p>
          Conceptualized at MIT, AIR-INK<sup>®</sup> is in adoption pilots by
          finance, apparel, and packaging companies
        </p>
        <ScrollAnimation className="feature-section" animateIn="fadeIn">
          <div className="feature-block">
            <img src={forest} alt="forest" />
            <h4>Environmental impact</h4>
            <p>100% reduction in carbon footprint</p>
          </div>
          <div className="feature-block">
            <img src={firewall} alt="firewall" />
            <h4>Compliance</h4>
            <p>
              ROHS and ASTM certified. As safe as any other ink on the market
            </p>
          </div>
          <div className="feature-block">
            <img src={shield} alt="shield" />
            <h4>Trusted</h4>
            <p>By more than 10,000 individuals and entities</p>
          </div>
          <div className="feature-block">
            <img src={chart} alt="chart" />
            <h4>Higher earnings</h4>
            <p>Operational costs reduce in the long term</p>
          </div>
          <div className="feature-block">
            <img src={rocket} alt="rocket" />
            <h4>Brand boost</h4>
            <p>
              Alignment to UN SDG is a sales driver and shows a measurable
              increase in Net Promoter Score
            </p>
          </div>
          <div className="feature-block">
            <img src={factory} alt="factory" />
            <h4>Built for scale</h4>
            <p>Our products are compatible with existing setups</p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
