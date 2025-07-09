import React, { Component } from "react";
import "./AboutUsSection1.css";
import ReactPlayer from "react-player";
import ScrollAnimation from "react-animate-on-scroll";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

var url = "https://www.youtube.com/watch?v=Dig_QFPPPtE";

export default class AboutUsSection1 extends Component {
  state = {
    innerWidth: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleParallax);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleParallax);
  }

  handleParallax = () => {
    const scrolled = window.pageYOffset;
    const parallax1 = document.querySelector(".ink-brush-1");
    const parallax2 = document.querySelector(".ink-brush-2");
    const parallax3 = document.querySelector(".ink-brush-3");
    const parallax4 = document.querySelector(".ink-brush-4");
    const parallax5 = document.querySelector(".ink-brush-5");
    const parallax6 = document.querySelector(".ink-brush-6");

    if (parallax1) {
      parallax1.style.transform = `rotate(15deg) translateY(${scrolled * 0.1}px)`;
    }
    if (parallax2) {
      parallax2.style.transform = `rotate(-25deg) translateY(${scrolled * -0.05}px)`;
    }
    if (parallax3) {
      parallax3.style.transform = `rotate(45deg) translateY(${scrolled * 0.08}px)`;
    }
    if (parallax4) {
      parallax4.style.transform = `rotate(-35deg) translateY(${scrolled * -0.07}px)`;
    }
    if (parallax5) {
      parallax5.style.transform = `rotate(55deg) translateY(${scrolled * 0.06}px)`;
    }
    if (parallax6) {
      parallax6.style.transform = `rotate(-15deg) translateY(${scrolled * -0.04}px)`;
    }
  };

  render() {
    return (
      <div className="aboutus-section1-container">
        <div className="ink-brush-background ink-brush-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fe05c741da71c4411b5bd7bf3c54e5094?format=webp&width=800"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="ink-brush-background ink-brush-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F7cdf399c3c524e40a5ff5c25caeb76f8?format=webp&width=800"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="ink-brush-background ink-brush-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fe05c741da71c4411b5bd7bf3c54e5094?format=webp&width=800"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="ink-brush-background ink-brush-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F7cdf399c3c524e40a5ff5c25caeb76f8?format=webp&width=800"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="ink-brush-background ink-brush-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fe05c741da71c4411b5bd7bf3c54e5094?format=webp&width=800"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="ink-brush-background ink-brush-6">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F7cdf399c3c524e40a5ff5c25caeb76f8?format=webp&width=800"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="video-section">
          <ReactPlayer
            url={url}
            light
            controls
            playing
            width="100%"
            height={this.state.innerWidth >= 500 ? "300px" : "200px"}
          />
        </div>
        <ScrollAnimation
          animateIn="fadeIn"
          className="aboutus-section1-textblock"
        >
          <h1>Our Story</h1>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#333",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(9, 92, 229, 0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #095CE5" }}
              iconStyle={{ background: "#095CE5", color: "#fff" }}
              icon={
                <div style={{ fontSize: "20px" }}>
                  <span role="img" aria-label="microscope">
                    🔬
                  </span>
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title">
                MIT Media Lab Origins
              </h3>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F79b3dc6167af4351b13de0f0f3dd85f1?format=webp&width=800"
                alt="MIT Media Lab candle soot experiment device"
                className="timeline-image"
              />
              <p>
                Graviky began as an MIT Media Lab experiment when we hacked
                together a tool to capture soot from a burning candle and used
                the closest available solvents - vodka and vegetable oil - to
                produce a rough version of what is now AIR–INK®.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#333",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(9, 92, 229, 0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #095CE5" }}
              iconStyle={{ background: "#095CE5", color: "#fff" }}
              icon={
                <div style={{ fontSize: "20px" }}>
                  <span role="img" aria-label="beer">
                    🍺
                  </span>
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title">
                2016: Heineken Collaboration
              </h3>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F23614e7658c54d8ab38b1b497cdb7857?format=webp&width=800"
                alt="Street art with AIR-INK - This art is painted with air pollution"
                className="timeline-image"
              />
              <p>
                In 2016, with the idea of turning carbon emissions into variety
                of inks and paints we collaborated with Heineken. AIR-INK® was
                born out of this collaboration.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#333",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(9, 92, 229, 0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #095CE5" }}
              iconStyle={{ background: "#095CE5", color: "#fff" }}
              icon={
                <div style={{ fontSize: "20px" }}>
                  <span role="img" aria-label="art palette">
                    🎨
                  </span>
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title">
                Global Art Movement
              </h3>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F650b986f0e2f4b5f8f91d3d9ce0e50ab?format=webp&width=800"
                alt="Artist creating mural with AIR-INK"
                className="timeline-image"
              />
              <p>
                Since then, AIR-INK® has kickstarted a public art movement
                spanning cities as diverse as Hong Kong, London, New York,
                Mumbai, Berlin, Singapore, Delhi and many more. Carbon emissions
                which could have been in the lungs of millions of people are now
                resting as art created by over a thousand artists like Doodle
                Man, Christian Furr, Kristoes and Imagine.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#333",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(9, 92, 229, 0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #095CE5" }}
              iconStyle={{ background: "#095CE5", color: "#fff" }}
              icon={
                <div style={{ fontSize: "20px" }}>
                  <span role="img" aria-label="science">
                    🔬
                  </span>
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title">
                Safety & Innovation
              </h3>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fddfa66a83401431f86784c12b5b7e5cb?format=webp&width=800"
                alt="Laboratory testing and research"
                className="timeline-image"
              />
              <p>
                The carbon emissions are sequestered as usable pigments and ink.
                We further test the inks for safety and cleanliness, constantly
                looking for ways to improve and advance this research.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#333",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(9, 92, 229, 0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #095CE5" }}
              iconStyle={{ background: "#095CE5", color: "#fff" }}
              icon={
                <div style={{ fontSize: "20px" }}>
                  <span role="img" aria-label="trophy">
                    🏆
                  </span>
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title">
                Global Standards
              </h3>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fb920b3e69fd6467d858bd2c279b8e135?format=webp&width=800"
                alt="Lab worker with carbon tank equipment"
                className="timeline-image"
              />
              <p>
                With the help of third party global accredited labs we analyse
                and further segregate the carbon emissions as re-viable to
                ensure that the AIR-INK® formulations are safe for consumer
                use.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#333",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(9, 92, 229, 0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #095CE5" }}
              iconStyle={{ background: "#095CE5", color: "#fff" }}
              icon={
                <div style={{ fontSize: "20px" }}>
                  <span role="img" aria-label="factory">
                    🏭
                  </span>
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title">
                Industry Integration
              </h3>
              <img
                src="https://cdn.builder.io/o/assets%2F2891faa92b574a07a8369948a9a1f207%2Fdb26c67b0850473fa21320f841181d2d?alt=media&token=b098222f-b3de-4ba0-9e40-f26175176059&apiKey=2891faa92b574a07a8369948a9a1f207"
                alt="Industrial printing progression with AIR-INK"
                className="timeline-image"
              />
              <p>
                Over the last few years, we have developed different grades of
                AIR-INK® that are classified and used by our printing partners
                across industry to reduce the carbon footprint of their printing
                processes.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </ScrollAnimation>
      </div>
    );
  }
}
