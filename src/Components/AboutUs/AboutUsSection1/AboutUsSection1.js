import React, { Component } from "react";
import "./AboutUsSection1.css";
import ReactPlayer from "react-player";
import ScrollAnimation from "react-animate-on-scroll";
var url = "https://www.youtube.com/watch?v=Dig_QFPPPtE";
export default class AboutUsSection1 extends Component {
  state = {
    innerWidth: window.innerWidth,
  };
  render() {
    return (
      <div className="aboutus-section1-container">
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
          <div className="story-timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>MIT Media Lab Origins</h3>
                <p>
                  Graviky began as an MIT Media Lab experiment when we hacked
                  together a tool to capture soot from a burning candle and used
                  the closest available solvents - vodka and vegetable oil - to
                  produce a rough version of what is now AIR–INK<sup>®</sup>.
                </p>
              </div>
              <div className="timeline-image">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F79b3dc6167af4351b13de0f0f3dd85f1?format=webp&width=800"
                  alt="MIT Media Lab candle soot experiment device"
                  className="story-image-crop"
                />
              </div>
            </div>

            <div className="timeline-item reverse">
              <div className="timeline-image">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2F23614e7658c54d8ab38b1b497cdb7857?format=webp&width=800"
                  alt="Street art with AIR-INK - This art is painted with air pollution"
                  className="story-image-crop"
                />
              </div>
              <div className="timeline-content">
                <h3>2016: Heineken Collaboration</h3>
                <p>
                  In 2016, with the idea of turning carbon emissions into
                  variety of inks and paints we collaborated with Heineken.
                  AIR-INK<sup>®</sup> was born out of this collaboration.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Global Art Movement</h3>
                <p>
                  Since then, AIR-INK<sup>®</sup> has kickstarted a public art
                  movement spanning cities as diverse as Hong Kong, London, New
                  York, Mumbai, Berlin, Singapore, Delhi and many more.
                </p>
              </div>
              <div className="timeline-image">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fd653fbe13bec4d378750f6416a434d8d?format=webp&width=800"
                  alt="AIR-INK development process"
                  className="story-image-crop"
                  style={{ objectPosition: "0% 0%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="timeline-item reverse">
              <div className="timeline-image">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Faedad2b829c944cea10a4b82ab70d24f?format=webp&width=800"
                  alt="Global art movement gallery exhibition"
                  className="story-image-crop"
                />
              </div>
              <div className="timeline-content">
                <h3>Global Art Movement</h3>
                <p>
                  Since then, AIR-INK<sup>®</sup> has kickstarted a public art
                  movement spanning cities as diverse as Hong Kong, London, New
                  York, Mumbai, Berlin, Singapore, Delhi and many more.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Artists & Impact</h3>
                <p>
                  Carbon emissions which could have been in the lungs of
                  millions of people are now resting as art created by over a
                  thousand artists like Doodle Man, Christian Furr, Kristoes and
                  Imagine.
                </p>
              </div>
              <div className="timeline-image">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fd653fbe13bec4d378750f6416a434d8d?format=webp&width=800"
                  alt="Artist collaborations"
                  className="story-image-crop"
                  style={{ objectPosition: "100% 0%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="timeline-item reverse">
              <div className="timeline-image">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fd653fbe13bec4d378750f6416a434d8d?format=webp&width=800"
                  alt="Testing and research"
                  className="story-image-crop"
                  style={{ objectPosition: "0% 50%", objectFit: "cover" }}
                />
              </div>
              <div className="timeline-content">
                <h3>Safety & Innovation</h3>
                <p>
                  The carbon emissions are sequestered as usable pigments and
                  ink. We further test the inks for safety and cleanliness,
                  constantly looking for ways to improve and advance this
                  research.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Global Standards</h3>
                <p>
                  With the help of third party global accredited labs we analyse
                  and further segregate the carbon emissions as re-viable to
                  ensure that the AIR-INK<sup>®</sup> formulations are safe for
                  consumer use.
                </p>
              </div>
              <div className="timeline-image">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fd653fbe13bec4d378750f6416a434d8d?format=webp&width=800"
                  alt="Lab testing and certification"
                  className="story-image-crop"
                  style={{ objectPosition: "50% 50%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="timeline-item reverse">
              <div className="timeline-image">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2891faa92b574a07a8369948a9a1f207%2Fd653fbe13bec4d378750f6416a434d8d?format=webp&width=800"
                  alt="Industrial applications"
                  className="story-image-crop"
                  style={{ objectPosition: "100% 50%", objectFit: "cover" }}
                />
              </div>
              <div className="timeline-content">
                <h3>Industry Integration</h3>
                <p>
                  Over the last few years, we have developed different grades of
                  AIR-INK<sup>®</sup> that are classified and used by our
                  printing partners across industry to reduce the carbon
                  footprint of their printing processes.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
