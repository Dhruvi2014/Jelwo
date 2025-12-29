import React from "react";
import "./Style.css";
import aboutImg from "./assets/about-us1.webp";

const AboutUs2 = ({ onBack }) => {
  return (
    <div className="about2-page">

      <section className="mission-section container">
        <div className="row text-center">

          <div className="col-md-4">
            <div className="icon-circle"><i className="fa-regular fa-circle-dot"></i></div>
            <h5>OUR MISSION</h5>
            <p>
              The most extraordinary people in the world today don’t have a career.
              They have a mission.
            </p>
          </div>

          <div className="col-md-4">
            <div className="icon-circle"><i className="fa-regular fa-clock"></i></div>
            <h5>OUR VISION</h5>
            <p>
              Create the highest vision possible for your life,
              because you become what you believe.
            </p>
          </div>

          <div className="col-md-4">
            <div className="icon-circle"><i className="fa-solid fa-headphones"></i></div>
            <h5>YOUR SUPPORT</h5>
            <p>
              Create the highest vision possible for your life,
              because you become what you believe.
            </p>
          </div>

        </div>
      </section>

      {/* ===== Story Section ===== */}
      <section className="story-section container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <img src={aboutImg} alt="about" className="img-fluid" />
          </div>

          <div className="col-md-6">
            <h3>Story about us</h3>
            <p>
              As part of our mission create space for women to express their sensuality
              without shame fear or the patriarchal gaze we’re asking women to invite
              us into their most intimate space.
            </p>
            <h4 className="founder-name">Harlie puth</h4>
          </div>

        </div>
      </section>

      {/* ===== Rotating Circle Section ===== */}
      <section className="circle-section text-center">

        <div className="circle-wrapper">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  // 🔗 hidden play link
            target="_blank"
            rel="noreferrer"
            className="circle"
          >
            <span className="circle-text">
              OUR BIG COLLECTIONS • ESTD 1982 •
            </span>

            <span className="play-btn">
              <i className="fa-solid fa-play"></i>
            </span>
          </a>
        </div>

      </section>

    </div>
  );
};

export default AboutUs2;
