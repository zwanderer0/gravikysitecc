import React, { Component } from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import './Partnersection3.css';
import panagaia from '../../../assets/Pangaia.png';
// import OnePlus from '../../../assets/OnePlus.png';
import mastercard from '../../../assets/mastercard.png';
import dell from '../../../assets/dell.png';

export default class Partnersection3 extends Component {
    render() {
        return (
            <div className = "partnersection3-container">
                <h4>CLIENTS</h4>
                <ScrollAnimation animateIn="fadeIn" className = "logo-containers">
                    <img className = "product-logo-img" src = {panagaia} alt = "pangaia" />
                    {/* <img className = "product-logo-img" src = {OnePlus} alt = "OnePlus" /> */}
                    <img className = "product-logo-img custom-master-size" src = {mastercard} alt = "mastercard" />
                    <img className = "product-logo-img custom-dell-size" src = {dell} alt = "dell" />
                </ScrollAnimation>
            </div>
        )
    }
}
