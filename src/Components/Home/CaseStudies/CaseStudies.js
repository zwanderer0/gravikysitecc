import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./CaseStudies.css";

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
              Building Trust Through Innovation
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
                  <h3>Dell Technologies Partnership</h3>
                  <p>
                    Graviky Labs collaborated with Dell Technologies to
                    implement sustainable printing solutions using AIR-INK
                    technology. This partnership demonstrates how
                    enterprise-level companies can integrate environmental
                    responsibility into their core operations.
                  </p>
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
                  <h3>Mastercard Sustainable Payments Initiative</h3>
                  <p>
                    Mastercard and Doconomy launched innovative sustainable
                    payment solutions, with Graviky Labs providing the
                    sustainable materials technology. This groundbreaking
                    initiative connects financial technology with environmental
                    impact.
                  </p>
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
                  <h3>Doconomy Mastercard Innovation</h3>
                  <p>
                    The collaboration between Doconomy and Mastercard showcases
                    how Graviky's technology enables the creation of payment
                    cards made from recycled materials, setting new standards
                    for sustainable financial products.
                  </p>
                  <div className="case-study-stats">
                    <div className="stat">
                      <h4>First</h4>
                      <p>Sustainable payment card</p>
                    </div>
                    <div className="stat">
                      <h4>100%</h4>
                      <p>Recycled materials used</p>
                    </div>
                  </div>
                  <a
                    href="https://youtu.be/rqlQd-vfOTk?si=HFEfNL2p0Ki2535B&t=18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-study-link"
                  >
                    Watch Innovation Video
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
