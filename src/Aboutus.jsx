import React from "react";
import "./Style.css";
import team1 from "./assets/team1.webp";
import team2 from "./assets/team2.webp";
import team3 from "./assets/team3.webp";
import team4 from "./assets/team4.webp";
import aboutImg from "./assets/about-us1.webp";

const AboutUs = () => {
  return (
    <div className="about-page">

      
      {/* STORY */}
      <div className="container text-center my-5">
        <span className="small-title">SINCE 1982 OUR STORY</span>
        <h2>Our about story</h2>
        <img src={aboutImg} alt="about" className="img-fluid mt-4" />
      </div>

      {/* TEAM */}
      <div className="container text-center my-5">
        <span className="small-title">HIGHLY SKILLED</span>
        <h2>Meet our teams</h2>

        <div className="row mt-4">
          <div className="col-md-3">
            <img src={team1} alt="" />
            <h6>HARVEY JONES</h6>
            <p>CEO & Founder</p>
          </div>
          <div className="col-md-3">
            <img src={team2} alt="" />
            <h6>MORY ORLANDO</h6>
            <p>Marketing</p>
          </div>
          <div className="col-md-3">
            <img src={team3} alt="" />
            <h6>HARLIE PUTH</h6>
            <p>Designer</p>
          </div>
          <div className="col-md-3">
            <img src={team4} alt="" />
            <h6>TRISTIN CHINEZE</h6>
            <p>Distribution</p>
          </div>
        </div>
      </div>

      <div className="container about-icons text-center py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="icon-circle">
              <i className="fa-solid fa-truck"></i>
            </div>
            <h6>FAST SHIPPING</h6>
            <p>Free Shipping starts now! No minimums.</p>
          </div>

          <div className="col-md-4">
            <div className="icon-circle">
              <i className="fa-solid fa-rotate"></i>
            </div>
            <h6>EASY RETURNS</h6>
            <p>Do everything with a good heart.</p>
          </div>

          <div className="col-md-4">
            <div className="icon-circle">
              <i className="fa-solid fa-dollar-sign"></i>
            </div>
            <h6>100% MONEY SECURE</h6>
            <p>100% Money secure</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default AboutUs;
