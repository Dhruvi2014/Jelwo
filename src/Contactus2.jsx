import React, { useEffect, useState } from "react";
import "./Style.css";
import contact3 from "./assets/contact3.webp";

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";

const ContactUs = ({ onBack }) => {
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
                    – CONTACTUS2
                </p>

                <h1>CONTACTUS2</h1>
            </div>
            <br></br>

            <section className="contact-section">
                <div className="container-fluid">
                    <div className="row g-0 align-items-stretch">

                        <div className="col-lg-6">
                            <div className="contact-image">
                                <img src={contact3} alt="Contact" />
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="contact-content">
                                <span className="contact-subtitle">
                                    WE'D LOVE TO HEAR FROM YOU
                                </span>

                                <h2 className="contact-title">Contact us</h2>

                                <div className="contact-info">
                                    <div className="info-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div>
                                            <h6>ADDRESS</h6>
                                            <p>
                                                70 Washington square south new york, NY 10012,
                                                <br /> united states
                                            </p>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <i className="fas fa-phone"></i>
                                        <div>
                                            <h6>PHONE</h6>
                                            <p>+1 234 567 8910</p>
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <i className="fas fa-envelope"></i>
                                        <div>
                                            <h6>EMAIL</h6>
                                            <p>info@yourdomain.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="social-icons">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-x-twitter"></i>
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-pinterest-p"></i>
                                    <i className="fab fa-youtube"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <br></br>
            <div className="container about-icons text-center py-5">
                <div className="row">
                    <div className="col-md-4">
                        <h6>STORE ADDRESS</h6>
                        <p>The quickest way to know a womanis to go <br></br>shopping with her</p>
                    </div>

                    <div className="col-md-4">
                        <h6>SAVE PAYMENTS</h6>
                        <p>Wealth consists not in having<br></br>greatpossessions but in having few wants</p>
                    </div>

                    <div className="col-md-4">
                        <h6>24/7 SUPPORT</h6>
                        <p>Successful people are always lookingfor opportunities to help others.</p>
                    </div>
                </div>
            </div>

            <section className="keep-touch-section">
                <div className="container">
                    <h2 className="keep-touch-title">Keep in touch with us</h2>

                    <div className="row mt-5">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control custom-input"
                                placeholder="Your full name"
                            />

                            <input
                                type="email"
                                className="form-control custom-input"
                                placeholder="Your email address"
                            />

                            <input
                                type="text"
                                className="form-control custom-input"
                                placeholder="Your mobile number"
                            />
                        </div>

                        <div className="col-md-6">
                            <textarea
                                className="form-control custom-textarea"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-8 d-flex align-items-start gap-2">
                            <input type="checkbox" className="custom-checkbox" />
                            <p className="terms-text">
                                I accept the terms & conditions and I understand that my data will
                                be hold securely in accordance with the privacy policy.
                            </p>
                        </div>

                        <div className="col-md-4 text-md-end">
                            <button className="send-btn">SEND MESSAGE</button>
                        </div>
                    </div>
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

export default ContactUs;

 