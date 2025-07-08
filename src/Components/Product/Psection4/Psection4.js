import React, { Component } from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import './Psection4.css'
import pangaia from '../../../assets/Pangaia.png';
// import OnePlus from '../../../assets/OnePlus.png';
import mastercard from '../../../assets/mastercard.png';
import dell from '../../../assets/dell.png';

export default class Psection4 extends Component {
    render() {
        return (
            <div className = "psection-container">
                <h4>TRUSTED BY</h4>
                <ScrollAnimation animateIn="fadeIn" className = "logo-containers">
                    <img className = "product-logo-img" src = {pangaia} alt = "pangaia" />
                    {/* <img className = "product-logo-img" src = {OnePlus} alt = "OnePlus" /> */}
                    <img className = "product-logo-img custom-master-size" src = {mastercard} alt = "mastercard" />
                    <img className = "product-logo-img custom-dell-size" src = {dell} alt = "dell" />
                </ScrollAnimation>
            </div>
        )
    }
}
