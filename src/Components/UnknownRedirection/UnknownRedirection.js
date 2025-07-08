import React, { Component } from "react";
import "./UnknownRedirection.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getNav } from "../../action/actions";
import gravikyLogo from '../../assets/graviky-removebg.png'

class UnknownRedirection extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.getNav("UNKNOWN");
  };
  render() {
    // console.log(this.props.location.pathname)
    if (this.props.location.pathname === "/air-inktrade.html") {
      return <Redirect to="/" />;
    }
    if (this.props.location.pathname === "/products.html") {
      return <Redirect to="/product/" />;
    }
    if (this.props.location.pathname === "/contact-us.html") {
      return <Redirect to="/#contact-form" />;
    }
    if (this.props.location.pathname === "/kaalink.html") {
      return <Redirect to="/product/" />;
    }
    if (this.props.location.pathname === "/join-us.html") {
      return <Redirect to="/" />;
    }
    if (this.props.location.pathname === "/the-team.html") {
      return <Redirect to="/about-us" />;
    }
    if (this.props.location.pathname === "/awards.html") {
      return <Redirect to="/" />;
    }
    if (this.props.location.pathname === "/blog") {
      return <Redirect to="/" />;
    }
    if (this.props.location.pathname === "/partnerships.html") {
      return <Redirect to="/partners/" />;
    }
    return (
      <div className="unknown-container">
        <div className="unknown-sub-container">
          {/* <div className="err">4</div>
          <i className="far fa-question-circle fa-spin"></i>
          <div className="err2">4</div> */}
          <h1>404</h1>
          <div className
          ="msg">
            Maybe this page moved? Got deleted? Is hiding out in quarantine?
            Never existed in the first place?
            <p>
              Let's go <a href="/">home</a> and try from there.
            </p>
          </div>
        </div>
        <img className = "floating-img" src = {gravikyLogo} alt = "gravikyLogo"/>
      </div>
    );
  }
}

export default connect(null, { getNav })(UnknownRedirection);
