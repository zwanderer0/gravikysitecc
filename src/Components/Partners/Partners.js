import React, { Component } from 'react'
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import PartnersHero from './PartnersHero/PartnersHero';
import Partnersection1 from './Partnersection1/Partnersection1';
import Partnersection2 from './Partnersection2/Partnersection2';
import Partnersection3 from './Partnersection3/Partnersection3';
import Partnersection6 from './Partnersection6/Partnersection6';
import Partnersection7 from './Partnersection7/Partnersection7';
import Partnersection8 from './Partnersection8/Partnersection8';
import Partnersection9 from './Partnersection9/Partnersection9';
import Partnersection10 from './Partnersection10/Partnersection10';
import Section9 from '../Home/Section9/Section9';
import Psection9 from '../Product/Psection9/Psection9';
import {connect} from 'react-redux';
import {getNav} from '../../action/actions';

class Partners extends Component {
    componentDidMount = () => {
        window.scrollTo(-10,0);
        this.props.getNav("PARTNERSHIP")
      }

    render() {
        return (
            <div>
                <Header/>
                <PartnersHero/>
                <Partnersection1/>
                <Partnersection2/>
                <Partnersection3/>
                <Psection9/>
                <Partnersection9/>
                <Partnersection10/>
                <Partnersection6/>
                <Partnersection7/>
                <Partnersection8/>
                <Section9/>
                <Footer/>
            </div>
        )
    }
}

export default connect (null, {getNav})(Partners)