import React from 'react';
import './PsectionLogos.css'
import RoHs from "../../../assets/RoHs.png";
import NonToxic from "../../../assets/NonToxic.png";
import CALIFORNIA from "../../../assets/CALIFORNIA.png";
import A01 from "../../../assets/A01.png";
import ScrollAnimation from "react-animate-on-scroll";

const PsectionLogos = () => {
    return (
        <div className = "PsectionLogos-container">
            <ScrollAnimation animateIn="fadeIn" className = "img-sub-container">
            <div>
              <img src = {RoHs} alt = "RoHs"/>
              <img src = {NonToxic} alt = "NonToxic"/>
            </div>
            <div>
              <img src = {CALIFORNIA} alt = "CALIFORNIA"/>
              <img src = {A01} alt = "A01"/>
            </div>
          </ScrollAnimation>
        </div>
    );
}

export default PsectionLogos;
