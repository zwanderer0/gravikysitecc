import React, { Component } from "react";
import Header from "../Home/Header/Header";
import AboutUsSection1 from "./AboutUsSection1/AboutUsSection1";
import AboutUsSection2 from "./AboutUsSection2/AboutUsSection2";
import AboutUsSection3 from "./AboutUsSection3/AboutUsSection3";
import Footer from "../Home/Footer/Footer";
import Section9 from "../Home/Section9/Section9";
import { connect } from "react-redux";
import { getNav } from "../../action/actions";

class AboutUs extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.getNav("ABOUT US");
  };

  render() {
    return (
      <div>
        <Header />
        <AboutUsSection1 />
        <AboutUsSection2 />
        <AboutUsSection3 />
        <Section9 />
        <Footer />
      </div>
    );
  }
}

export default connect(null, { getNav })(AboutUs);
