/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import shirtImage from "../../../assets/shirt.png";
import packageImg from "../../../assets/package.png";
import markerImage from "../../../assets/markerImage.jpg";
import { Slide } from "react-slideshow-image";
import "./Partnersection2.css";

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  // pauseOnHover: true,
  arrows: false,
//   scale: 0.4,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`fade transition from ${oldIndex} to ${newIndex}`);
//   }
};

export default class Partnersection2 extends Component {
  render() {
    return (
      <div className="partnersection2-container">
        <Slide {...fadeProperties}>
          <div className="partnersection2-subcontainer">
            <div>
              <h1>
                Use AIR–INK<sup className = "register">®</sup><br/> <span className = "blue">on packaging</span>
              </h1>
              <a href = "#contact-form">Contact sales</a>
            </div>
            <img src={packageImg} alt="shirt" />
          </div>
          <div className="partnersection2-subcontainer">
          <div>
              <h1>
                Use AIR–INK<sup className = "register">®</sup><br/> <span className = "blue">on apparel</span>
              </h1>
              <a href = "#contact-form">Contact sales</a>
            </div>
            <img src={shirtImage} alt="shirt" />
          </div>
          <div className="partnersection2-subcontainer">
          <div>
              <h1>
                Use AIR–INK<sup className = "register">®</sup><br/> <span className = "blue">in markers</span>
              </h1>
              <a href = "#contact-form">Contact sales</a>
            </div>
            <img src={markerImage} alt="shirt" />
          </div>
        </Slide>
      </div>
    );
  }
}
