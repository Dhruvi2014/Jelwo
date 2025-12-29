import React, { useEffect, useState, useRef } from "react";
import "./Style.css";
import n6 from "./assets/newsside1.avif"
import n7 from "./assets/newsside2.avif"
import n8 from "./assets/newsside3.webp"

import n1 from "./assets/news1.webp";
import n2 from "./assets/news2.jpg";
import n3 from "./assets/news3.webp";
import n4 from "./assets/news4.webp";
import n5 from "./assets/news5.webp";

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";

function Blog({ onBack }) {

    const blogSliderRef = useRef(null);
    const [blogIndex, setBlogIndex] = useState(0);


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
                    – NEWS
                </p>

                <h1>NEWS</h1>
            </div>

            <section className="blog-section">

                <div className="blog-carousel">
                    <div className="blog-inner" ref={blogSliderRef}>

                        <div className="blog-item">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={n6} />
                                    <div
                                        className="blog-hover-arrow"
                                        onClick={() => openNews({ image: n1 })}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>

                                <div className="blog-content">
                                    <p className="blog-meta">02, MAR 2025 | By Andrew Johns</p>
                                    <p className="blog-desc">
                                        As part of our mission create space for women to express their sensuality...
                                    </p>
                                    <button
                                        className="blog-btn"
                                        onClick={() => openNews({ image: n1 })}
                                    >
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="blog-item">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={n7} />
                                    <div
                                        className="blog-hover-arrow"
                                        onClick={() => openNews({ image: n2 })}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>

                                <div className="blog-content">
                                    <p className="blog-meta">02, MAR 2025 | By Andrew Johns</p>
                                    <p className="blog-desc">
                                        As part of our mission create space for women to express their sensuality...
                                    </p>
                                    <button
                                        className="blog-btn"
                                        onClick={() => openNews({ image: n2 })}
                                    >
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="blog-item">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={n8} />
                                    <div
                                        className="blog-hover-arrow"
                                        onClick={() => openNews({ image: n3 })}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>

                                <div className="blog-content">
                                    <p className="blog-meta">02, MAR 2025 | By Andrew Johns</p>
                                    <p className="blog-desc">
                                        As part of our mission create space for women to express their sensuality...
                                    </p>
                                    <button
                                        className="blog-btn"
                                        onClick={() => openNews({ image: n3 })}
                                    >
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="blog-item">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={n1} />
                                    <div
                                        className="blog-hover-arrow"
                                        onClick={() => openNews({ image: n4 })}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>

                                <div className="blog-content">
                                    <p className="blog-meta">02, MAR 2025 | By Andrew Johns</p>
                                    <p className="blog-desc">
                                        As part of our mission create space for women to express their sensuality...
                                    </p>
                                    <button
                                        className="blog-btn"
                                        onClick={() => openNews({ image: n4 })}
                                    >
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="blog-item">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={n3} />
                                    <div
                                        className="blog-hover-arrow"
                                        onClick={() => openNews({ image: n5 })}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>

                                <div className="blog-content">
                                    <p className="blog-meta">02, MAR 2025 | By Andrew Johns</p>
                                    <p className="blog-desc">
                                        As part of our mission create space for women to express their sensuality...
                                    </p>
                                    <button
                                        className="blog-btn"
                                        onClick={() => openNews({ image: n5 })}
                                    >
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="blog-section">
                <div className="blog-carousel">
                    <div className="blog-inner" ref={blogSliderRef}>

                        <div className="blog-item">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={n1} />
                                    <div
                                        className="blog-hover-arrow"
                                        onClick={() => openNews({ image: n1 })}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>

                                <div className="blog-content">
                                    <p className="blog-meta">02, MAR 2025 | By Andrew Johns</p>
                                    <p className="blog-desc">
                                        As part of our mission create space for women to express their sensuality...
                                    </p>
                                    <button
                                        className="blog-btn"
                                        onClick={() => openNews({ image: n1 })}
                                    >
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="blog-item">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={n4} />
                                    <div
                                        className="blog-hover-arrow"
                                        onClick={() => openNews({ image: n2 })}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>

                                <div className="blog-content">
                                    <p className="blog-meta">02, MAR 2025 | By Andrew Johns</p>
                                    <p className="blog-desc">
                                        As part of our mission create space for women to express their sensuality...
                                    </p>
                                    <button
                                        className="blog-btn"
                                        onClick={() => openNews({ image: n2 })}
                                    >
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="blog-item">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={n2} />
                                    <div
                                        className="blog-hover-arrow"
                                        onClick={() => openNews({ image: n3 })}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>

                                <div className="blog-content">
                                    <p className="blog-meta">02, MAR 2025 | By Andrew Johns</p>
                                    <p className="blog-desc">
                                        As part of our mission create space for women to express their sensuality...
                                    </p>
                                    <button
                                        className="blog-btn"
                                        onClick={() => openNews({ image: n3 })}
                                    >
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-section">
                <div className="blog-carousel">
                    <div className="blog-inner" ref={blogSliderRef}>

                        <div className="blog-item">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={n4} />
                                    <div
                                        className="blog-hover-arrow"
                                        onClick={() => openNews({ image: n1 })}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>

                                <div className="blog-content">
                                    <p className="blog-meta">02, MAR 2025 | By Andrew Johns</p>
                                    <p className="blog-desc">
                                        As part of our mission create space for women to express their sensuality...
                                    </p>
                                    <button
                                        className="blog-btn"
                                        onClick={() => openNews({ image: n1 })}
                                    >
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="blog-item">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <img src={n5} />
                                    <div
                                        className="blog-hover-arrow"
                                        onClick={() => openNews({ image: n2 })}
                                    >
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>

                                <div className="blog-content">
                                    <p className="blog-meta">02, MAR 2025 | By Andrew Johns</p>
                                    <p className="blog-desc">
                                        As part of our mission create space for women to express their sensuality...
                                    </p>
                                    <button
                                        className="blog-btn"
                                        onClick={() => openNews({ image: n2 })}
                                    >
                                        READ MORE
                                    </button>
                                </div>
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

                        {/* PRIVACY */}
                        <div className="col-md-2">
                            <h5>Privacy & terms</h5>
                            <ul>
                                <li>Privacy policy</li>
                                <li>Refund policy</li>
                                <li>Shipping & return</li>
                                <li>Terms & condition</li>
                            </ul>
                        </div>

                        {/* CATEGORY */}
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

                        {/* VISIT STORE */}
                        <div className="col-md-3">
                            <h5>Visit store</h5>
                            <p>Mon - sat : 10am - 11pm</p>
                            <p>Sun : 10am - 4pm</p>
                            <p>7 Days a week</p>
                        </div>
                    </div>

                    {/* SOCIAL + SUBSCRIBE */}
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
}

export default Blog;

