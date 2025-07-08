import React, { Component } from "react";
import "./Partnersection6.css";
import dellCS from '../../../assets/dellCS.png';

export default class Partnersection6 extends Component {
  state = {
    innerWidth: window.innerWidth
  };
  render() {
    return (
      <div className="partnersection6-container">
        <div className="sacestudies-sub-container">
          <div className="partner-left-section">
            <h1>Dell</h1>
            <p>
              We partnered with Dell to print 2 million laptop boxes.
            </p>
          </div>
          <img class="video-section" src = {dellCS} alt="dell" />
        </div>
      </div>
    );
  }
}
