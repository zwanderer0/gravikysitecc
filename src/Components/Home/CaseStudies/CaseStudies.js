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
    lightboxOpen: false,
    lightboxImage: null,
    lightboxAlt: "",
  };

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  openLightbox = (imageSrc, altText) => {
    this.setState({
      lightboxOpen: true,
      lightboxImage: imageSrc,
      lightboxAlt: altText,
    });
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  closeLightbox = () => {
    this.setState({
      lightboxOpen: false,
      lightboxImage: null,
      lightboxAlt: "",
    });
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  componentDidMount() {
    // Add keyboard event listener for ESC key
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    // Clean up event listener
    document.removeEventListener("keydown", this.handleKeyDown);
    document.body.style.overflow = "auto"; // Ensure scrolling is restored
  }

  handleKeyDown = (event) => {
    if (event.key === "Escape" && this.state.lightboxOpen) {
      this.closeLightbox();
    }
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="case-studies-container">
        <ScrollAnimation animateIn="fadeIn">
          <div className="case-studies-content">
            <h2 className="case-studies-title">
              How AIR-INK blends into scaled printing
            </h2>
            <p className="case-studies-subtitle">
              See how leading global brands partner with us to create
              sustainable solutions
            </p>

            <div className="case-studies-layout">
              <div className="case-studies-tabs">
                <button
                  className={`tab-button ${activeTab === "dell" ? "active" : ""}`}
                  onClick={() => this.setActiveTab("dell")}
                >
                  Dell Technologies
                  <span className="tab-subtitle">Packaging Solutions</span>
                </button>
                <button
                  className={`tab-button ${activeTab === "mastercard" ? "active" : ""}`}
                  onClick={() => this.setActiveTab("mastercard")}
                >
                  Mastercard
                  <span className="tab-subtitle">Credit Cards</span>
                </button>
                <button
                  className={`tab-button ${activeTab === "pangaia" ? "active" : ""}`}
                  onClick={() => this.setActiveTab("pangaia")}
                >
                  Pangaia
                  <span className="tab-subtitle">T-Shirt Collection</span>
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
                      Graviky Labs collaborated with Dell Technologies and
                      University of Michigan Tauber Institute to implement
                      sustainable printing solutions using AIR-INK technology
                      for laptop packaging. This partnership demonstrates how
                      enterprise-level companies can integrate environmental
                      responsibility into their core operations.
                    </p>

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
                        url="https://youtu.be/rqlQd-vfOTk?si=B7E5GT_J1uvyOiUk&t=16"
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
                      initiative connects financial technology with
                      environmental impact through the world's first carbon
                      limit credit card.
                    </p>
                    <div className="printed-materials">
                      <h4>What We Created:</h4>
                      <div className="materials-gallery">
                        <div className="material-item featured">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fca1817a0309547b2b39c0721066cebaf?format=webp&width=800"
                            alt="Doconomy Mastercard Credit Card with AIR-INK - Click to view details"
                            onClick={() =>
                              this.openLightbox(
                                "https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fca1817a0309547b2b39c0721066cebaf?format=webp&width=1200",
                                "Doconomy Mastercard Credit Card with AIR-INK - Bio-sourced material printed with AIR-INK",
                              )
                            }
                          />
                          <p>Carbon Limit Credit Cards</p>
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

                {activeTab === "pangaia" && (
                  <div className="case-study-content">
                    <div className="case-study-visual">
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=LRZedVsNulk"
                        width="100%"
                        height="300px"
                        controls={true}
                        className="case-study-video"
                      />
                    </div>
                    <h3>Pangaia x AIR-INK T-Shirt Collection</h3>
                    <p>
                      The collaboration showcases how Graviky's AIR-INK
                      technology revolutionizes fashion printing. We worked
                      closely with Pangaia NYC to create a special grade of
                      black ink for Naomi Campbell's launch.
                    </p>
                    <div className="printed-materials">
                      <h4>What We Printed:</h4>
                      <div className="materials-gallery">
                        <div className="material-item featured">
                          <img
                            src={naomiCampbell}
                            alt="Naomi Campbell wearing Pangaia x AIR-INK apparel - Click to enlarge"
                            onClick={() =>
                              this.openLightbox(
                                naomiCampbell,
                                "Naomi Campbell wearing Pangaia x AIR-INK sustainable fashion collection",
                              )
                            }
                          />
                          <p>Naomi Campbell in Pangaia x AIR-INK</p>
                        </div>
                        <div className="material-item">
                          <img
                            src={shirtImg}
                            alt="Sustainable fashion with AIR-INK - Click to enlarge"
                            onClick={() =>
                              this.openLightbox(
                                shirtImg,
                                "Pangaia sustainable fashion collection printed with AIR-INK technology",
                              )
                            }
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
                      href="https://www.forbes.com/sites/brookrobertsislam/2021/04/20/pangaias-game-changing-collaboration-draws-carbon-from-air-pollution-to-print-textiles/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-study-link"
                    >
                      Read Forbes Article
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Lightbox Modal */}
        {this.state.lightboxOpen && (
          <div className="lightbox-overlay" onClick={this.closeLightbox}>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={this.closeLightbox}>
                &times;
              </button>
              <img
                src={this.state.lightboxImage}
                alt={this.state.lightboxAlt}
                className="lightbox-image"
              />
              <p className="lightbox-caption">{this.state.lightboxAlt}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
