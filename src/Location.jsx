import React, { useState } from "react";
import "./Style.css";

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";

import store1 from "./assets/location1.webp";
import store2 from "./assets/location2.webp";
import store3 from "./assets/location3.webp";



const Location = ({ onBack }) => {

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
                    – LOCATION
                </p>

                <h1>LOCATION</h1>
            </div>

            <div className="container my-5">
                <div className="row align-items-center flex-md-row-reverse">
                    <div className="col-md-6 store-text">
                        <h2>Valsone shop</h2>

                        <div className="info">
                            <i className="bi bi-telephone"></i>
                            <div>
                                <h6>LET'S TALK</h6>
                                <p>+999 3222 000 388</p>
                            </div>
                        </div>

                        <div className="info">
                            <i className="bi bi-envelope"></i>
                            <div>
                                <h6>SAY HI!</h6>
                                <p>store@domain.com</p>
                            </div>
                        </div>

                        <div className="info">
                            <i className="bi bi-geo-alt"></i>
                            <div>
                                <h6>STORE ADDRESS</h6>
                                <p>27 Eden walk eden centre, Broadway, United States</p>
                            </div>
                        </div>

                        <div className="info">
                            <i className="bi bi-clock"></i>
                            <div>
                                <h6>OPENING HOURS</h6>
                                <p>Mon - Fri : 9:00am - 6:00pm</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img src={store1} alt="store" className="img-fluid store-img" />
                    </div>
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-md-6 store-text">
                        <h2>Melbourne place</h2>

                        <div className="info">
                            <i className="bi bi-telephone"></i>
                            <div>
                                <h6>LET'S TALK</h6>
                                <p>+999 3222 000 388</p>
                            </div>
                        </div>

                        <div className="info">
                            <i className="bi bi-envelope"></i>
                            <div>
                                <h6>SAY HI!</h6>
                                <p>store@domain.com</p>
                            </div>
                        </div>

                        <div className="info">
                            <i className="bi bi-geo-alt"></i>
                            <div>
                                <h6>STORE ADDRESS</h6>
                                <p>27 Eden walk eden centre, Broadway, United States</p>
                            </div>
                        </div>

                        <div className="info">
                            <i className="bi bi-clock"></i>
                            <div>
                                <h6>OPENING HOURS</h6>
                                <p>Mon - Fri : 9:00am - 6:00pm</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img src={store2} alt="store" className="img-fluid store-img" />
                    </div>
                </div>

                <div className="row align-items-center flex-md-row-reverse">
                    <div className="col-md-6 store-text">
                        <h2>Valsone shop</h2>

                        <div className="info">
                            <i className="bi bi-telephone"></i>
                            <div>
                                <h6>LET'S TALK</h6>
                                <p>+999 3222 000 388</p>
                            </div>
                        </div>

                        <div className="info">
                            <i className="bi bi-envelope"></i>
                            <div>
                                <h6>SAY HI!</h6>
                                <p>store@domain.com</p>
                            </div>
                        </div>

                        <div className="info">
                            <i className="bi bi-geo-alt"></i>
                            <div>
                                <h6>STORE ADDRESS</h6>
                                <p>27 Eden walk eden centre, Broadway, United States</p>
                            </div>
                        </div>

                        <div className="info">
                            <i className="bi bi-clock"></i>
                            <div>
                                <h6>OPENING HOURS</h6>
                                <p>Mon - Fri : 9:00am - 6:00pm</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img src={store3} alt="store" className="img-fluid store-img" />
                    </div>
                </div>

            </div>


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
    )
}

export default Location;
