import React, { Component } from "react";
import "./Partnersection7.css";
import ReactPlayer from "react-player";
var url = "https://vimeo.com/196497265"

export default class Partnersection7 extends Component {
  state = {
    innerWidth: window.innerWidth
  }
  render() {
    return (
      <div className="partnersection7-sontainer">
        <div className="sacestudies-sub-container">
          <div className="video-section">
            <ReactPlayer
              url= {url}
              controls
              width="100%"
              height={this.state.innerWidth >= 500 ?'300px': '200px'} playing
              light
            />
          </div>
          <div className="partner-right-section">
            <h1>Heineken</h1>
            <p>
            Tiger beer brought art made with AIR-INK<sup>®</sup> to 12 different countries
            </p>
          </div>
        </div>
      </div>
    );
  }
}
