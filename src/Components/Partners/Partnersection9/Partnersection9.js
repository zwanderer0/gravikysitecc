import React, { Component } from "react";
import "./Partnersection9.css";
import ReactPlayer from "react-player";
var url = "https://www.youtube.com/watch?v=LRZedVsNulk";

export default class Partnersection6 extends Component {
  state = {
    innerWidth: window.innerWidth
  };
  render() {
    return (
      <div className="partnersection9-container">
        <h1>Featured case studies</h1>
        <div className="sacestudies-sub-container">
          <div className="partner-left-section">
            <h1>Pangaia x AIR-INK®</h1>
            <p>
              Problem-solving Science that you can wear. We <a href="https://thepangaia.com/pages/airink">partnered with Pangaia</a> to make water-based black ink which can be printed on their latest capsule.
            </p>
          </div>
          <div className="video-section">
            <ReactPlayer
              url={url}
              light
              controls
              playing
              width="100%"
              height={this.state.innerWidth >= 500 ? "300px" : "200px"}
            />
          </div>
        </div>
      </div>
    );
  }
}
