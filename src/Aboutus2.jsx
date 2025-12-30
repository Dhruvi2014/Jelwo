import React from "react";
import "./Style.css";
import aboutImg from "./assets/about-us1.webp";

import team1 from "./assets/team1.webp";
import team2 from "./assets/team2.webp";
import team3 from "./assets/team3.webp";
import team4 from "./assets/team4.webp";
import team5 from "./assets/team5.webp";

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";

const AboutUs2 = ({ onBack }) => {
  const openYoutube = () => {
    window.open("https://www.youtube.com", "_blank");
  };

  return (
    <>
      <div className="cart-hero">
        <p className="breadcrumb">
          <span
            className="breadcrumb-link"
            onClick={onBack}
            style={{ cursor: "pointer" }}
          >
            HOME
          </span>{" "}
          – ABOUT US 2
        </p>

        <h1>ABOUT US 2</h1>
      </div>
      <br></br><br></br>
      <section className="container abouttext">
        <h5>SINCE 1982 OUR STORY</h5>
        <h6>In early 1982, founder and creative director had the idea to design a
          bag collection where comfort,<br></br> fashion, and distinction are key.
          was born a bag brand that believes fashion should go hand<br></br> in hand with comfort.</h6>
      </section>


      <section className="rotating-section">
        <div className="rotating-wrapper" onClick={openYoutube}>

          <svg viewBox="0 0 200 200" className="rotating-svg">
            <defs>
              <path
                id="circlePath"
                d="M 100,100
                   m -75,0
                   a 75,75 0 1,1 150,0
                   a 75,75 0 1,1 -150,0"
              />
            </defs>

            <text>
              <textPath href="#circlePath">
                OUR BIG COLLECTIONS • ESTD 1982 • OUR BIG COLLECTIONS •
              </textPath>
            </text>
          </svg>

          <div className="play-icon">
            <i className="fa-solid fa-play"></i>
          </div>

        </div>
      </section>

      <section className="story-about">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="story-img">
                <img src={team5} alt="About us" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="story-content">
                <h2>Story about us</h2>

                <p>
                  As part of our mission create space for women to express their
                  sensuality without shame fear or the patriarchal gaze we’re
                  asking women to invite us into their most intimate space.
                </p>

                <h3>Harlie puth</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="about-features">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-4">
              <div className="icon-circle">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h5>OUR MISSION</h5>
              <p>
                The most extraordinary people in the world today don’t have a
                career. They have a mission.
              </p>
            </div>

            <div className="col-md-4">
              <div className="icon-circle">
                <i className="fa-regular fa-clock"></i>
              </div>
              <h5>OUR VISION</h5>
              <p>
                Create the highest vision possible for your life, because you
                become what you believe.
              </p>
            </div>

            <div className="col-md-4">
              <div className="icon-circle">
                <i className="fa-solid fa-headphones"></i>
              </div>
              <h5>YOUR SUPPORT</h5>
              <p>
                Create the highest vision possible for your life, because you
                become what you believe.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container text-center">
          <span className="small-title">HIGHLY SKILLED</span>
          <h2 className="main-title">Meet our teams</h2>

          <div className="row mt-5">
            <div className="col-md-3">
              <div className="team-card">
                <img src={team1} alt="team" />
                <h6>JOHNNY WALKER</h6>
                <p>Web designer</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="team-card">
                <img src={team2} alt="team" />
                <h6>JOHNNY WALKER</h6>
                <p>Web designer</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="team-card">
                <img src={team3} alt="team" />
                <h6>JOHNNY WALKER</h6>
                <p>Web designer</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="team-card">
                <img src={team4} alt="team" />
                <h6>JOHNNY WALKER</h6>
                <p>Web designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container text-center position-relative">
          <span className="small-title">WE LOVE OUR CLIENTS</span>

          <p className="testimonial-font">
            The best thing about shopping is that one can return the purchase
            if something does not work the way it should.
          </p>

          <h6 className="author">MIRANDA JOY</h6>

          <button className="arrow left-arrow">
            <i className="fa-solid fa-arrow-left"></i>
          </button>

          <button className="arrow right-arrow">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>

      <br></br>

      <footer className="footer-section">
        <div className="container">
          <div className="row gy-4">

            <div className="col-md-3">
              <h4 className="footer-logo">JELWO</h4>
              <p>
                <i className="fa-solid fa-location-dot"></i>
                &nbsp;55 East 10th street, new york,<br />
                ny 10003, united states
              </p>
              <p>
                <i className="fa-solid fa-phone"></i>
                &nbsp;+ (220) 123 456 7890
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i>
                &nbsp;demo123546@gmail.com
              </p>
            </div>

            <div className="col-md-2">
              <h5>Information</h5>
              <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>Faq's</li>
                <li>News</li>
              </ul>
            </div>

            <div className="col-md-2">
              <h5>Privacy & terms</h5>
              <ul>
                <li>Privacy policy</li>
                <li>Refund policy</li>
                <li>Shipping & return</li>
                <li>Terms & condition</li>
              </ul>
            </div>

            <div className="col-md-2">
              <h5>Category</h5>
              <ul>
                <li>Rings</li>
                <li>Earring</li>
                <li>Pendant</li>
                <li>Necklaces</li>
                <li>Bracelets</li>
              </ul>
            </div>

            <div className="col-md-3">
              <h5>Visit store</h5>
              <p>Mon - sat : 10am - 11pm</p>
              <p>Sun : 10am - 4pm</p>
              <p>7 Days a week</p>
            </div>
          </div>

          <div className="row align-items-center mt-4">
            <div className="col-md-4 social-icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-pinterest-p"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>

            <div className="col-md-8 subscribe-box">
              <span>Subscribe and get 15% discount.</span>
              <input type="email" placeholder="Enter your email" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <p>Copyright © 2025 by spacingtech</p>
          <div className="payment-icons">
            <img src={visa} />
            <img src={mastercard} />
            <img src={paypal} />
            <img src={discover} />
          </div>
        </div>
      </div>




    </>
  );
};

export default AboutUs2;
