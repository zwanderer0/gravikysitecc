import React, { Component } from "react";
import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import Section2 from "./Section2/Section2";

import Section4 from "./Section4/Section4";
import CaseStudies from "./CaseStudies/CaseStudies";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import Section7 from "./Section7/Section7";

import Section9 from "./Section9/Section9";
import Footer from "./Footer/Footer";
import { connect } from "react-redux";
import { getNav } from "../../action/actions";

class Home extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.getNav("HOME");
  };
  render() {
    return (
      <div>
        <Header />
        <LandingPage />
        <Section5 />
        <Section2 />
        <Section4 />
        <CaseStudies />
        <Section6 />
        <Section7 />
        <Section9 />
        <Footer />
      </div>
    );
  }
}

export default connect(null, { getNav })(Home);
