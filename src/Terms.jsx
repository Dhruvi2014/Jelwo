import React, { useState } from "react";
import "./Style.css";

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";

const Terms = ({ onBack }) => {

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
                    – Terms & Conditions
                </p>

                <h1>Terms & Conditions</h1>
            </div>


            <section className="terms-section">
                <div className="container">
                    <div className="row gy-5">

                        {/* LEFT COLUMN */}
                        <div className="col-md-6">
                            <div className="terms-block">
                                <h3>TERM & CONDITION OVERVIEW</h3>
                                <p>
                                    The Green to Wear 2.0 standard aims to minimize the environmental
                                    impact of textile production. To this end, we have developed
                                    Inditex’s The List program.
                                </p>
                            </div>

                            <div className="terms-block">
                                <h3>ONLINE STORE TERMS</h3>
                                <p>
                                    The Green to Wear 2.0 standard aims to minimize the environmental
                                    impact of textile production.
                                </p>
                                <p>
                                    The Green to Wear 2.0 standard aims to minimize the environmental
                                    impact of textile production. To this end, we have developed
                                    Inditex’s The List program.
                                </p>
                            </div>

                            <div className="terms-block">
                                <h3>COMPLETENESS AND TIMELINESS OF INFORMATION</h3>
                                <p>
                                    The Green to Wear 2.0 standard aims to minimize the environmental
                                    impact of textile production. To this end, we have developed
                                    Inditex’s The List program.
                                </p>
                                <p>
                                    The Green to Wear 2.0 standard aims to minimize the environmental
                                    impact of textile production. To this end, we have developed
                                    Inditex’s The List program.
                                </p>
                            </div>

                            <div className="terms-block">
                                <h3>PRODUCTS OR SERVICES (IF APPLICABLE)</h3>
                                <p>
                                    The Green to Wear 2.0 standard aims to minimize the environmental
                                    impact of textile production.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="col-md-6">
                            <div className="terms-block">
                                <h3 className="updated">
                                    LAST UPDATED: <span>MARCH 25, 2023</span>
                                </h3>
                                <p>
                                    The Green to Wear 2.0 standard aims to minimize the environmental
                                    impact of textile production. To this end, we have developed
                                    Inditex’s The List program.
                                </p>
                            </div>

                            <div className="terms-block">
                                <h3>GENERAL CONDITIONS</h3>
                                <p>
                                    The Green to Wear 2.0 standard aims to minimize the environmental
                                    impact of textile production. To this end, we have developed
                                    Inditex’s The List program.
                                </p>
                                <p>
                                    The Green to Wear 2.0 standard aims to minimize the environmental
                                    impact of textile production. To this end, we have developed
                                    Inditex’s The List program.
                                </p>
                            </div>

                            <div className="terms-block">
                                <h3>MODIFICATIONS TO THE SERVICE AND PRICES</h3>
                                <p>
                                    The Green to Wear 2.0 standard aims to minimize the environmental
                                    impact of textile production. To this end, we have developed
                                    Inditex’s The List program.
                                </p>
                                <p>
                                    The Green to Wear 2.0 standard aims to minimize the environmental
                                    impact of textile production. To this end, we have developed
                                    Inditex’s The List program.
                                </p>
                            </div>

                            <div className="terms-block">
                                <h3>ACCURACY OF BILLING AND ACCOUNT INFORMATION</h3>
                                <p>
                                    The Green to Wear 2.0 standard aims to minimize the environmental
                                    impact of textile production. To this end, we have developed
                                    Inditex’s The List program.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


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

export default Terms;