import React, { Component } from 'react'
import './AboutUsSection4.css'
import Oval from '../../../assets/image1.png';
import OvalCopy from '../../../assets/image2.png';
import OvalCopy2 from '../../../assets/image3.png';
import OvalCopy3 from '../../../assets/image4.png';
import OvalCopy4 from '../../../assets/image5.png';
import OvalCopy5 from '../../../assets/image6.png';
import OvalCopy6 from '../../../assets/image7.png';
import OvalCopy7 from '../../../assets/image8.png';

import ScrollAnimation from "react-animate-on-scroll";

export default class AboutUsSection4 extends Component {
    render() {
        return (
            <div className = "aboutus-section4-container">
                <h1>The Team</h1>
                <ScrollAnimation animateIn="fadeIn" className = "aboutus-section4-team-block">
                    <div className = "team-block-section">
                        <img src = {Oval} alt = "oval"/>
                        <p>CTO</p>
                        <h4>Anirudh Sharma</h4>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy} alt = "OvalCopy"/>
                        <p>CEO</p>
                        <h4>Nikhil Kaushik</h4>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy2} alt = "OvalCopy2"/>
                        <p>Head of R&D</p>
                        <h4>Dr. Ishan Fursule</h4>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy3} alt = "OvalCopy3"/>
                        <p>Engineering</p>
                        <h4>Yash Sharma</h4>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy4} alt = "OvalCopy4"/>
                        <p>Head of Strategy & Partnerships</p>
                        <h4>Aishwarya Das</h4>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy5} alt = "OvalCopy5"/>
                        <p>Advisor</p>
                        <h4>Dr. Pattie Maes</h4>
                        <p>Director - Fluid Interfaces</p>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy6} alt = "OvalCopy6"/>
                        <p>Advisor</p>
                        <h4>Dr. Terry Clayton</h4>
                        <p>Director - EFI Imaging</p>
                    </div>
                    <div className = "team-block-section">
                        <img src = {OvalCopy7} alt = "OvalCopy7"/>
                        <p>Advisor</p>  
                        <h4>Dr. Christine Ortiz</h4>
                        <p>Head of Material Science Department, MIT</p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}
