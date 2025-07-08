import React, { Component } from "react";
import "./Partnersection10.css";
import ReactPlayer from "react-player";
var url = "https://www.youtube.com/watch?v=Ug5k1j5CfM8"

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
            <h1>Mastercard & Doconomy</h1>
            <p>
            How we helped make the world’s first credit card with a carbon
              limit
            </p>
          </div>
        </div>
      </div>
    );
  }
}
