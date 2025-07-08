import React, { Component } from 'react'
import VizSensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

import './Section3.css'

export default class Section3 extends Component {
    state = {
        scrolled: true,
        imgViz: false
      };
    
    render() {
        return (
            <VizSensor
            partialVisibility
        onChange={(isVisible) => {
          this.setState({imgViz: isVisible})
        }}
            >
            <div className = "section3-container">
                <div className = {this.state.scrolled === false ? "section3-subcontainer transparent":"section3-subcontainer"}>
                    <h4>{this.state.imgViz === true ? <CountUp duration={3} start={0} end={3} />:0}</h4>
                    <p><span>Fortune 500</span><br/> Clients</p>
                </div>
                <div className = {this.state.scrolled === false ? "section3-subcontainer transparent":"section3-subcontainer"}>
                    <h4>20,{this.state.imgViz === true ? <CountUp duration={3} start={490} end={500} />:490}</h4>
                    <p>Liters of <br/><span>AIR-INK<sup>®</sup></span> produced</p>
                </div>
                <div className = {this.state.scrolled === false ? "section3-subcontainer transparent":"section3-subcontainer"}>
                    <h4>{this.state.imgViz === true ? <CountUp duration={3} start={690} end={700} />:690}</h4>
                    <p>Tonnes of <br/><span>Carbon offset</span></p>
                </div>
            </div>
            </VizSensor>
        )
    }
}
