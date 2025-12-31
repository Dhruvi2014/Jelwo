import React, { useState } from "react";
import "./Style.css";

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";

const Privacy = ({ onBack }) => {

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
                    – PRIVACY POLICY
                </p>

                <h1>PRIVACY POLICY</h1>
            </div>

            <div className="container privacy-page">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Collecting personal information</h2>
                        <p>
                            When you visit the Site, we collect certain information about your
                            device, your interaction with the Site, and information necessary
                            to process your purchases.
                        </p>

                        <h5>Device information</h5>
                        <ul>
                            <li>
                                <strong>Examples of personal information collected:</strong>{" "}
                                Browser version, IP address.
                            </li>
                            <li>
                                <strong>Purpose of collection:</strong> To load the Site
                                accurately.
                            </li>
                            <li>
                                <strong>Source of collection:</strong> Collected automatically.
                            </li>
                        </ul>

                        <h5>Order information</h5>
                        <ul>
                            <li>
                                <strong>Examples:</strong> Name, billing address, payment details.
                            </li>
                            <li>
                                <strong>Purpose:</strong> To fulfill orders and provide customer
                                support.
                            </li>
                        </ul>

                        <h5>Customer support information</h5>
                        <p>
                            We collect information provided when contacting customer support.
                        </p>

                        <h2>Your rights</h2>
                        <p>
                            You have the right to access personal information we hold about you
                            and request corrections or deletion.
                        </p>
                    </div>

                    <div className="col-md-6">
                        <h2>Sharing personal information</h2>
                        <p>
                            We share your personal information with service providers to help
                            us provide our services.
                        </p>

                        <h5>Behavioural advertising</h5>
                        <p>
                            We use your personal information to provide targeted
                            advertisements.
                        </p>

                        <h2>Selling personal information</h2>
                        <p>
                            We do not sell your personal information as defined by applicable
                            laws.
                        </p>

                        <h2>Cookies</h2>
                        <p>
                            Cookies are small data files placed on your device to enhance your
                            browsing experience.
                        </p>

                        <h5>Cookies necessary for the functioning of the store</h5>

                        <table className="table privacy-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>_secure</td>
                                    <td>Used for secure checkout</td>
                                </tr>
                                <tr>
                                    <td>cart_st</td>
                                    <td>Stores cart information</td>
                                </tr>
                                <tr>
                                    <td>_shopify_u</td>
                                    <td>Stores customer account info</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>Changes</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect
                            changes in our practices.
                        </p>
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

export default Privacy;
