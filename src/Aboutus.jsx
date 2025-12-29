import React from "react";
import "./Style.css";
import team1 from "./assets/team1.webp";
import team2 from "./assets/team2.webp";
import team3 from "./assets/team3.webp";
import team4 from "./assets/team4.webp";
import aboutImg from "./assets/about-us1.webp";

import heroBg from "./assets/jelwobg.jpeg";

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";

const AboutUs = (onBack,goHome) => {
    return (
        <>
            <section
                className="hero wishlist-hero"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="hero-overlay"></div>

                <div className="hero-text center-text">
                    <p className="breadcrumb">
                        <span
                            className="breadcrumb-link"
                            onClick={goHome}
                        >
                            HOME
                        </span>{" "}
                        – WISHLIST
                    </p>
                    <h1>Wishlist</h1>
                </div>
            </section>

            <div className="about-page">
                <div className="container text-center my-5">
                    <span className="small-title">SINCE 1982 OUR STORY</span>
                    <h2>Our about story</h2>
                    <img src={aboutImg} alt="about" className="img-fluid mt-4" />
                </div>

                <div className="about-stats py-5">
                    <div className="container">
                        <div className="row text-center">

                            <div className="col-md-4">
                                <h4>5,000+ HAPPY CUSTOMER</h4>
                                <p>
                                    The customer's perception is your reality.
                                    <br />
                                    Your most unhappy customers are your greatest source of learning
                                </p>
                            </div>

                            <div className="col-md-4">
                                <h4>40 YEARS OF EXPERIENCES</h4>
                                <p>
                                    Awards can give you a tremendous amount of encouragement to keep
                                    getting better, no matter how young or old you are.
                                </p>
                            </div>

                            <div className="col-md-4">
                                <h4>40 YEARS OF EXPERIENCES</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text printing and typesetting
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="testimonial-section py-5">
                    <div className="container text-center">

                        <div className="testimonial-avatar-wrapper">
                            <div className="testimonial-avatar">
                                <img src={team2} alt="client" />
                            </div>
                        </div>


                        <span className="small-title">WE LOVE OUR CLIENTS</span>

                        <h3 className="testimonial-text">
                            It is a long established fact that a reader
                            <br />
                            will be distracted when looking at its layout.
                        </h3>

                        <h6 className="testimonial-name">MIRANDA JOY</h6>

                        <div className="testimonial-arrows">
                            <button><i className="fa-solid fa-arrow-left"></i></button>
                            <button><i className="fa-solid fa-arrow-right"></i></button>
                        </div>

                    </div>
                </div>


                <div className="container text-center my-5">
                    <span className="small-title">HIGHLY SKILLED</span>
                    <h2>Meet our teams</h2>

                    <div className="row mt-4">
                        <div className="test col-md-3">
                            <img src={team1} alt="" />
                            <h6>HARVEY JONES</h6>
                            <p>CEO & Founder</p>
                        </div>
                        <div className="test col-md-3">
                            <img src={team2} alt="" />
                            <h6>MORY ORLANDO</h6>
                            <p>Marketing</p>
                        </div>
                        <div className="test col-md-3">
                            <img src={team3} alt="" />
                            <h6>HARLIE PUTH</h6>
                            <p>Designer</p>
                        </div>
                        <div className="test col-md-3">
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

        </>


    );
};

export default AboutUs;
