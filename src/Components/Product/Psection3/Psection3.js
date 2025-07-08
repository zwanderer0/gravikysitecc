import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Psection3.css";
import factory from "../../../assets/factory1.png";
import firewall from "../../../assets/firewall1.png";
import forest from "../../../assets/forest1.png";
import chart from "../../../assets/chart1.png";
import rocket from "../../../assets/rocket1.png";
import trolley from "../../../assets/trolley1.png";

export default class Psection3 extends Component {
  render() {
    return (
      <div className="psecton3-container">
        <p>
          Conceptualized at MIT, AIR-INK<sup>®</sup> is in adoption pilots by finance,
          apparel, and packaging companies
        </p>
        <ScrollAnimation className="product-feature-section" animateIn="fadeIn">
          <div className="product-feature-block">
            <img src={forest} alt="forest" />
            <h4>Environmental impact</h4>
            <p>100% reduction in carbon footprint</p>
          </div>
          <div className="product-feature-block">
            <img src={firewall} alt="firewall" />
            <h4>
              Compliance
              <br />{" "}
            </h4>
            <p>As safe as any other ink on the market</p>
          </div>
          <div className="product-feature-block">
            <img src={trolley} alt="trolley" />
            <h4>Trusted</h4>
            <p>More than 10,000 individuals and entities use our products</p>
          </div>
          <div className="product-feature-block">
            <img src={chart} alt="chart" />
            <h4>Higher earnings</h4>
            <p>Operational costs reduce in the long term</p>
          </div>
          <div className="product-feature-block">
            <img src={rocket} alt="rocket" />
            <h4>Brand boost</h4>
            <p>
              Alignment to UN SDG is a sales driver and shows a measurable
              increase in Net Promoter Score
            </p>
          </div>
          <div className="product-feature-block">
            <img src={factory} alt="factory" />
            <h4>Built for scale</h4>
            <p>Our products are compatible with existing setups</p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
