import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./CaseStudies.css";
import dellCS from "../../../assets/dellCS.png";
import packageImg from "../../../assets/package.png";
import shirtImg from "../../../assets/shirt.png";
import markerImg from "../../../assets/markerImage.jpg";
import naomiCampbell from "../../../assets/naomicampbell.jpeg";
import ReactPlayer from "react-player";

export default class CaseStudies extends Component {
  state = {
    activeTab: "dell",
  };

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="case-studies-container">
        <ScrollAnimation animateIn="fadeIn">
          <div className="case-studies-content">
            <h2 className="case-studies-title">
              Our B2B collaborations so far
            </h2>
            <p className="case-studies-subtitle">
              See how leading global brands partner with us to create
              sustainable solutions
            </p>

            <div className="case-studies-tabs">
              <button
                className={`tab-button ${activeTab === "dell" ? "active" : ""}`}
                onClick={() => this.setActiveTab("dell")}
              >
                Dell Technologies
              </button>
              <button
                className={`tab-button ${activeTab === "mastercard" ? "active" : ""}`}
                onClick={() => this.setActiveTab("mastercard")}
              >
                Mastercard Partnership
              </button>
              <button
                className={`tab-button ${activeTab === "doconomy" ? "active" : ""}`}
                onClick={() => this.setActiveTab("doconomy")}
              >
                Doconomy Innovation
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "dell" && (
                <div className="case-study-content">
                  <div className="case-study-visual">
                    <img
                      src={dellCS}
                      alt="Dell Case Study - AIR-INK Integration"
                      className="case-study-image"
                    />
                  </div>
                  <h3>Dell Technologies Partnership</h3>
                  <p>
                    Graviky Labs collaborated with Dell Technologies to
                    implement sustainable printing solutions using AIR-INK
                    technology. This partnership demonstrates how
                    enterprise-level companies can integrate environmental
                    responsibility into their core operations through innovative
                    ink solutions.
                  </p>
                  <div className="printed-materials">
                    <h4>What We Printed:</h4>
                    <div className="materials-gallery">
                      <div className="material-item">
                        <img
                          src={packageImg}
                          alt="Sustainable packaging printed with AIR-INK"
                        />
                        <p>Sustainable Packaging</p>
                      </div>
                      <div className="material-item">
                        <img
                          src={markerImg}
                          alt="Writing instruments with AIR-INK"
                        />
                        <p>Writing Instruments</p>
                      </div>
                    </div>
                  </div>
                  <div className="case-study-stats">
                    <div className="stat">
                      <h4>50+</h4>
                      <p>Million pages printed sustainably</p>
                    </div>
                    <div className="stat">
                      <h4>2.5 tons</h4>
                      <p>Carbon emissions captured</p>
                    </div>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1kK3xgntab6EgcQwUHl6zgr95i5aDYw2o/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-study-link"
                  >
                    View Full Case Study
                  </a>
                </div>
              )}

              {activeTab === "mastercard" && (
                <div className="case-study-content">
                  <div className="case-study-visual">
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=Ug5k1j5CfM8"
                      width="100%"
                      height="300px"
                      controls={true}
                      className="case-study-video"
                    />
                  </div>
                  <h3>Mastercard Sustainable Payments Initiative</h3>
                  <p>
                    Mastercard and Doconomy launched innovative sustainable
                    payment solutions, with Graviky Labs providing the
                    sustainable materials technology. This groundbreaking
                    initiative connects financial technology with environmental
                    impact through the world's first carbon limit credit card.
                  </p>
                  <div className="printed-materials">
                    <h4>What We Created:</h4>
                    <div className="materials-gallery">
                      <div className="material-item">
                        <img
                          src={shirtImg}
                          alt="Sustainable apparel with AIR-INK print"
                        />
                        <p>Sustainable Apparel</p>
                      </div>
                      <div className="material-item">
                        <div className="video-thumbnail">
                          <p>Payment Card Technology</p>
                          <span>Watch the innovation video</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="case-study-stats">
                    <div className="stat">
                      <h4>Global</h4>
                      <p>Reach and implementation</p>
                    </div>
                    <div className="stat">
                      <h4>2019</h4>
                      <p>Partnership launch year</p>
                    </div>
                  </div>
                  <a
                    href="https://www.mastercard.com/news/press/2019/february/mastercard-and-doconomy-launch-the-future-of-sustainable-payments/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-study-link"
                  >
                    Read Press Release
                  </a>
                </div>
              )}

              {activeTab === "doconomy" && (
                <div className="case-study-content">
                  <div className="case-study-visual">
                    <ReactPlayer
                      url="https://youtu.be/rqlQd-vfOTk?si=HFEfNL2p0Ki2535B&t=18"
                      width="100%"
                      height="300px"
                      controls={true}
                      className="case-study-video"
                    />
                  </div>
                  <h3>Pangaia x AIR-INK Fashion Innovation</h3>
                  <p>
                    The collaboration showcases how Graviky's AIR-INK technology
                    revolutionizes fashion printing. From payment cards to
                    high-fashion apparel, our sustainable ink creates products
                    that celebrities and consumers alike can feel good about
                    wearing and using.
                  </p>
                  <div className="printed-materials">
                    <h4>What We Printed:</h4>
                    <div className="materials-gallery">
                      <div className="material-item featured">
                        <img
                          src={naomiCampbell}
                          alt="Naomi Campbell wearing Pangaia x AIR-INK apparel"
                        />
                        <p>Naomi Campbell in Pangaia x AIR-INK</p>
                      </div>
                      <div className="material-item">
                        <img
                          src={shirtImg}
                          alt="Sustainable fashion with AIR-INK"
                        />
                        <p>Sustainable Fashion Collection</p>
                      </div>
                    </div>
                  </div>
                  <div className="case-study-stats">
                    <div className="stat">
                      <h4>Celebrity</h4>
                      <p>Endorsements achieved</p>
                    </div>
                    <div className="stat">
                      <h4>100%</h4>
                      <p>Recycled carbon used</p>
                    </div>
                  </div>
                  <a
                    href="https://thepangaia.com/pages/airink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-study-link"
                  >
                    Explore Pangaia Collection
                  </a>
                </div>
              )}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
