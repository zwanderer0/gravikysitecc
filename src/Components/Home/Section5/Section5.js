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
            href="https://www.media.mit.edu/posts/airink-wins/"
            target="_blank"
            rel="noopener noreferrer"
            className="media-link"
          >
            <img className="logo-img" src={Mit} alt="MIT SOLVE article" />
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
          <a
            href="https://www.forbes.com/sites/brookerobertsislam/2021/04/20/pangaias-game-changing-collaboration-draws-carbon-from-air-pollution-to-print-textiles/"
            target="_blank"
            rel="noopener noreferrer"
            className="media-link"
          >
            <img
              className="logo-img"
              src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F8f198d5d490f4f378d0a13e5963620f5?format=webp&width=800"
              alt="Forbes article"
            />
          </a>
          <a
            href="https://hypebeast.com/2022/10/johnnie-walker-air-ink-collaboration-unboxing"
            target="_blank"
            rel="noopener noreferrer"
            className="media-link"
          >
            <img
              className="logo-img"
              src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F3c391b7c18ce46e58b171ad4eaf75cc3?format=webp&width=800"
              alt="Hypebeast article"
            />
          </a>
          <a
            href="https://falling-walls.com/foundation/people/graviky-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="media-link"
          >
            <img
              className="logo-img"
              src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F3db609537699485d9a07025d4ec8d5ca?format=webp&width=800"
              alt="Falling Walls Foundation"
            />
          </a>
        </ScrollAnimation>
      </div>
    );
  }
}
