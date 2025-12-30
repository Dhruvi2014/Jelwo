import React, { useEffect, useState } from "react";
import "./Style.css";

import girlImg from "./assets/contact1.webp";
import girlImg2 from "./assets/contact2.webp";

import france from "./assets/France.webp";
import canada from "./assets/Canada.avif";
import england from "./assets/England.webp";
import uk from "./assets/London.avif";
import germany from "./assets/London.avif";


import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";

const locations = [
    {
        img: france,
        address: "27 Eden walk eden centre orchard view, paris, France",
        phone: "+91 123 456 7890",
        email: "support@store.com",
        country: "France",
    },
    {
        img: canada,
        address: "523 North stockport road bridge, toronto, Canada",
        phone: "+91 123 456 7890",
        email: "support@store.com",
        country: "Canada",
    },
    {
        img: england,
        address: "048 Holburn street 20th floor camberley, England",
        phone: "+91 123 456 7890",
        email: "support@store.com",
        country: "England",
    },
    {
        img: uk,
        address: "425 Broadway, 20th floor parchard view, London",
        phone: "+91 123 456 7890",
        email: "support@store.com",
        country: "London",
    },
    {
        img: uk,
        address: "425 Broadway, 20th floor parchard view, London",
        phone: "+91 123 456 7890",
        email: "support@store.com",
        country: "London",
    },
];

const ContactUs = ({ onBack }) => {

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % locations.length);
    };

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? locations.length - 1 : prev - 1
        );
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
                    – CONTACTUS
                </p>

                <h1>CONTACTUS</h1>
            </div>

            <div className="container about-icons text-center py-5">
                <div className="row">
                    <h5>Quick Support</h5><br></br>
                    <div className="col-md-4">
                        <div className="icon-circle">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <h6>STORE LOCATION</h6>
                        <p>14 Ringe lane, las vegas, nv, 89156 united states</p>
                    </div>

                    <div className="col-md-4">
                        <div className="icon-circle">
                            <i className="fa-solid fa-phone-volume"></i>
                        </div>
                        <h6>CONTACT CALL</h6>
                        <p>+00-1234567890</p>
                    </div>

                    <div className="col-md-4">
                        <div className="icon-circle">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <h6>Contact mail</h6>
                        <p>demo@support.com</p>
                    </div>
                </div>
            </div>

            <section className="contact-slider-section">
                <img src={girlImg} alt="contact" className="contact-banner-img" />

                <div className="contact-slider-box container">
                    <h2 className="text-center mb-5">Get in touch</h2>

                    <div className="slider-wrapper">
                        <button className="slider-btn left" onClick={prevSlide}>
                            ❮
                        </button>

                        <div className="slider-window">
                            <div
                                className="slider-track"
                                style={{
                                    transform: `translateX(-${index * 25}%)`,
                                    width: `${locations.length * 25}%`
                                }}

                            >
                                {locations.map((item, i) => (
                                    <div className="location-card" key={i}>
                                        <img src={item.img} alt={item.country} />
                                        <p>{item.address}</p>
                                        <p>{item.phone}</p>
                                        <p>{item.email}</p>
                                        <h6>{item.country}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="slider-btn right" onClick={nextSlide}>
                            ❯
                        </button>
                    </div>
                </div>
            </section>

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

            <section className="contact-section">
                <div className="container-fluid">
                    <div className="row g-0 align-items-stretch">

                        <div className="col-lg-6">
                            <div className="contact-image">
                                <img src={girlImg2} alt="Contact" />
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
