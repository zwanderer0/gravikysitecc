/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Header.css";
import times from "../../../assets/FFG.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNav } from "../../../action/actions";

class Header extends Component {
  state = {
    scrolled: false,
    isNav: false
  };

  isNav = () => {
    this.setState({ isNav: !this.state.isNav });
  };

  onClose = () => {
    this.setState({ isNav: false });
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.isScroll);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.isScroll);
  }

  isScroll = () => {
    const isTop = window.scrollY < 50;
    if (isTop !== true) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  linkClicked = value => {
    this.props.getNav(value);
  };

  render() {
    // console.log(window.scrollY);
    return (
      <div
        className={
          this.state.scrolled === false
            ? this.props.navid === "PARTNERSHIP"
              ? "white-header-container"
              : "main-header-container"
            : "main-header-container-1"
        }
      >
        <a
          onClick={() => this.linkClicked("HOME")}
          href="/"
          className="logo-text"
        >
          GRAVIKY LABS
        </a>
        <i
          onClick={this.isNav}
          className={
            this.state.isNav === false
              ? "fa fa-bars nav-icon"
              : "fa fa-close nav-icon"
          }
        ></i>
        <div className={this.state.isNav === true ? "my-links" : "no-height"}>
          <Link onClick={this.onClose} to="/">
            HOME
          </Link>
          <Link onClick={this.onClose} to="/product">
            PRODUCTS
          </Link>
          <Link onClick={this.onClose} to="/partners">
            PARTNERSHIP
          </Link>
          <Link onClick={this.onClose} to="/about-us">
            ABOUT US
          </Link>
          <a onClick={this.onClose} href="#contact-form">
            CONTACT
          </a>
        </div>
        <div className="header-buttons-container">
          <Link
            className={
              this.props.navid !== "HOME"
                ? "link-style"
                : "link-style link-active"
            }
            onClick={() => this.linkClicked("HOME")}
            to="/"
          >
            HOME
          </Link>
          <div className="dropdown-product">
            <Link
              className={
                this.props.navid !== "PRODUCTS"
                  ? "link-style product-link"
                  : "link-style link-active"
              }
              onClick={() => this.linkClicked("PRODUCTS")}
              to="/product/"
            >
              PRODUCTS
            </Link>
            <div className="dropdown-content">
              <a href="/product/#Flexographic">PACKAGING INK</a>
              <a href="/product/#SilkScreen">SILK SCREEN INK</a>
              <a href="/product/#WritingInstruments">WRITING INSTRUMENTS</a>
            </div>
          </div>
          <Link
            className={
              this.props.navid !== "PARTNERSHIP"
                ? "link-style"
                : "link-style link-active"
            }
            onClick={() => this.linkClicked("PARTNERSHIP")}
            to="/partners/"
          >
            PARTNERSHIP
          </Link>
          <Link
            className={
              this.props.navid !== "ABOUT US"
                ? "link-style"
                : "link-style link-active"
            }
            onClick={() => this.linkClicked("ABOUT US")}
            to="/about-us"
          >
            ABOUT US
          </Link>
          <a
            className={
              this.props.navid !== "CONTACT"
                ? "link-style"
                : "link-style link-active"
            }
            // onClick={() => this.linkClicked("CONTACT")}
            href="#contact-form"
          >
            CONTACT
          </a>
          <div className="social-logo-container">
            <i
              onClick={() =>
                window.open("https://www.facebook.com/graviky/", "_blank")
              }
              className="fa fa-facebook"
            ></i>
            <i
              onClick={() =>
                window.open("https://twitter.com/gravikylabs", "_blank")
              }
              className="fa fa-twitter"
            ></i>
            <i
              onClick={() =>
                window.open("https://www.instagram.com/air.ink/", "_blank")
              }
              className="fa fa-instagram"
            ></i>
          </div>
          <img
            className={
              this.state.scrolled === false ? "times-img" : "times-img"
            }
            src={times}
            alt="times"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navid: state.navid
  };
};

export default connect(mapStateToProps, { getNav })(Header);
