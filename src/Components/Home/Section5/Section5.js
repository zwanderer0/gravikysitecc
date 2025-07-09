import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Ng from "../../../assets/ng.png";
import Ted from "../../../assets/TED.png";
import Mit from "../../../assets/Mit.png";
import Guard from "../../../assets/guard.png";
import Smith from "../../../assets/smith.png";
import "./Section5.css";

export default class Section5 extends Component {
  render() {
    return (
      <div className="section5-container">
        <ScrollAnimation animateIn="fadeIn" className="logo-containers">
          <a
            href="https://www.nationalgeographic.com/environment/article/air-pollution-recycled-into-ink"
            target="_blank"
            rel="noopener noreferrer"
            className="media-link"
          >
            <img
              className="logo-img"
              src={Ng}
              alt="National Geographic article"
            />
          </a>
          <a
            href="https://www.ted.com/talks/anirudh_sharma_ink_made_from_air_pollution"
            target="_blank"
            rel="noopener noreferrer"
            className="media-link"
          >
            <img className="logo-img" src={Ted} alt="TED Talk" />
          </a>
          <a
            href="https://www.technologyreview.com/2017/08/16/149478/startup-turns-air-pollution-into-ink/"
            target="_blank"
            rel="noopener noreferrer"
            className="media-link"
          >
            <img
              className="logo-img"
              src={Mit}
              alt="MIT Technology Review article"
            />
          </a>
          <a
            href="https://www.smithsonianmag.com/innovation/startup-captures-air-pollution-turns-it-ink-180967949/"
            target="_blank"
            rel="noopener noreferrer"
            className="media-link"
          >
            <img
              className="logo-img"
              src={Smith}
              alt="Smithsonian Magazine article"
            />
          </a>
          <a
            href="https://www.theguardian.com/environment/2017/aug/13/indian-startup-captures-air-pollution-to-make-ink"
            target="_blank"
            rel="noopener noreferrer"
            className="media-link"
          >
            <img className="logo-img" src={Guard} alt="The Guardian article" />
          </a>
        </ScrollAnimation>
      </div>
    );
  }
}
