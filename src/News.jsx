import React from "react";
import "./Style.css";
import side1 from "./assets/newsside1.avif"
import side2 from "./assets/newsside2.avif"
import side3 from "./assets/newsside3.webp"

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";

const News = ({ news, goHome, onBack }) => {
    if (!news) return null;

    return (
        <>
            <div className="cart-hero">
                <p className="breadcrumb">
                    <span
                        className="breadcrumb-link"
                        onClick={goHome}
                        style={{ cursor: "pointer" }}
                    >
                        HOME
                    </span>{" "}
                    – CHAIN
                </p>

                <h1>CHAIN</h1>
            </div>

            <section className="container news-wrapper">
                <div className="row">

                    <div className="col-md-3 news-sidebar">

                        {/* Search */}
                        <input
                            type="text"
                            className="form-control mb-4"
                            placeholder="Search"
                        />

                        <h5>Recent posts</h5>

                        <div className="recent-post-item">
                            <img src={side1} alt="" />
                            <p>Jewels as unique as your journey</p>
                        </div>

                        <div className="recent-post-item">
                            <img src={side2} alt="" />
                            <p>Crafted for moments that matter</p>
                        </div>

                        <div className="recent-post-item">
                            <img src={side3} alt="" />
                            <p>Timeless treasures moments</p>
                        </div>

                        <h5 className="mt-4">Newsletter</h5>
                        <input
                            type="email"
                            className="form-control mb-2"
                            placeholder="Enter your email"
                        />
                        <button className="newsletter-btn">SUBSCRIBE</button>

                        <h5 className="mt-4">Instagram</h5>
                        <div className="instagram-grid">
                            <img src={side1} />
                            <img src={side2} />
                            <img src={side3} />
                            <img src={side1} />
                            <img src={side2} />
                            <img src={side3} />
                        </div>

                        <h5 className="mt-4">Tags</h5>
                        <div className="sidebar-tags">
                            <span>ACCESSORIES</span>
                            <span>BLOG</span>
                            <span>CLOTHING</span>
                            <span>FASHION</span>
                            <span>HANDMAD</span>
                        </div>

                    </div>


                    <div className="col-md-9 news-content">

                        <p className="news-meta">
                            Mar 02, 2025 &nbsp; / &nbsp; By Andrew Johns &nbsp; / &nbsp; 0 Comments
                        </p>

                        <h2>Adorn your moments, elevate your life.</h2>

                        <p>
                            As part of our mission create space for women to express their
                            sensuality without shame fear or the patriarchal gaze.
                        </p>

                        <img src={news.image} className="img-fluid my-4" />

                        <blockquote>
                            I thank you for the recognition of the brilliance.
                            It’s something reflected from our soul.
                        </blockquote>

                        <p>
                            Fashion is what you’re offered four times a year by designers.
                            And style is what you choose.
                        </p>

                        <div className="news-footer">
                            <div className="news-tags">
                                <span>ACCESSORIES</span>
                                <span>BLOG</span>
                                <span>CLOTHING</span>
                                <span>FASHION</span>
                            </div>

                            <div className="news-social">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-x-twitter"></i>
                                <i className="fa-brands fa-pinterest-p"></i>
                            </div>
                        </div>

                        <div className="news-nav">
                            <span>← PREV POST</span>
                            <span>NEXT POST →</span>
                        </div>

                        <hr />

                        <h4>Leave a comment</h4>

                        <input className="form-control mb-3" placeholder="Name*" />
                        <input className="form-control mb-3" placeholder="Email*" />
                        <textarea
                            className="form-control mb-4"
                            rows="5"
                            placeholder="Message*"
                        ></textarea>

                        <button className="news-btn">POST COMMENT</button>
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
    );
};

export default News;
