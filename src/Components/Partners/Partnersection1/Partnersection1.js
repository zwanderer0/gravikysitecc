import React, { Component } from "react";
import "./Partnersection1.css";
import ScrollAnimation from "react-animate-on-scroll";

export default class Partnersection1 extends Component {
  render() {
    return (
      <div className="partnersection1-container">
        <ScrollAnimation
          animateIn="fadeIn"
          className="partnersection1-top-container"
        >
          <h1>Our Philosophy</h1>
          <p>
            Since the beginning of the industrial revolution, humanity has 
            released 1750 gigatonnes of excess CO2 into the atmosphere. 
            Currently, as the human race, we are about the reach the point
            of no return. At Graviky, we follow a simple dictum: Earth knows
            no waste. We lock these carbon emissions into industrial usable
            and scalable materials.{" "}
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          className="partnersection1-bottom-container"
        >
          <div>
            <h3>AVOID</h3>
            <p>Avoid fossil fuels wherever possible</p>
          </div>
          <div>
            <h3>HARVEST</h3>
            <p>Harvest pollution, recycle carbon</p>
          </div>
          <div>
            <h3>REPLACE</h3>
            <p>Replace conventional production practices</p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
