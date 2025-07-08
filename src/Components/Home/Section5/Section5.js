import React, { Component } from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import Ng from '../../../assets/ng.png';
import Ted from '../../../assets/TED.png';
import Mit from '../../../assets/Mit.png';
import Guard from '../../../assets/guard.png';
import Smith from '../../../assets/smith.png';
import './Section5.css'

export default class Section5 extends Component {
    render() {
        return (
            <div className = "section5-container">
                <h4>MEDIA COVERAGE</h4>
                <ScrollAnimation animateIn="fadeIn" className = "logo-containers">
                    <img className = "logo-img" src = {Ng} alt = "ng" />
                    <img className = "logo-img" src = {Ted} alt = "ted" />
                    <img className = "logo-img" src = {Mit} alt = "mit" />
                    <img className = "logo-img" src = {Smith} alt = "smith" />
                    <img className = "logo-img" src = {Guard} alt = "guard" />
                </ScrollAnimation>
            </div>
        )
    }
}
