import React, { useState } from "react";
import "./Style.css";

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";

const Faqs = ({ onBack }) => {

    const faqData = {
        "Shopping Information": [
            {
                question: "How can I contact you?",
                answer:
                    "You can contact us via email or through our contact form. Our support team will respond within 24 hours."
            },
            {
                question: "Do you have restock notifications?",
                answer:
                    "Yes! Click on the size you want and select 'Notify me when available'."
            },
            {
                question: "How do I care for my items?",
                answer:
                    "Hand wash or gentle machine wash. Avoid bleach and direct heat."
            },
            {
                question: "How do I know what size I am?",
                answer:
                    "Please refer to our size guide available on every product page."
            },
            {
                question: "How do I use a gift card?",
                answer:
                    "Enter the gift card code at checkout to redeem it."
            }
        ],

        "Returns and exchanges": [
            {
                question: "Can I return or exchange something in store?",
                answer:
                    "Yes, returns and exchanges are accepted within 7 days of delivery."
            },
            {
                question: "How do I get a shipping label?",
                answer:
                    "Once your return request is approved, a shipping label will be emailed to you."
            },
            {
                question: "What do I do if I receive a defective item?",
                answer:
                    "Please contact us with photos of the defect and we will arrange a replacement."
            }
        ],

        "Payment information": [
            {
                question: "How much is shipping and how long will it take?",
                answer:
                    "Shipping charges and delivery time depend on your location."
            },
            {
                question: "How long will it take to get my package?",
                answer:
                    "Orders are delivered within 3–7 business days."
            }
        ]



    };


    const [activeCategory, setActiveCategory] = useState("Shopping Information");
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
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
                    – FAQS
                </p>

                <h1>FAQS</h1>
            </div>

            <div className="container faq-page">
                <div className="row">
                    <div className="col-md-3 faq-sidebar">
                        <h6 className="sidebar-title">MOST COMMON</h6>

                        {Object.keys(faqData).map((category) => (
                            <p
                                key={category}
                                className={`sidebar-item ${activeCategory === category ? "active" : ""
                                    }`}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setActiveIndex(null);
                                }}
                            >
                                {category}
                            </p>
                        ))}
                    </div>

                    <div className="col-md-9">
                        <h2 className="faq-heading">{activeCategory}</h2>

                        {faqData[activeCategory].map((item, index) => (
                            <div className="faq-item" key={index}>
                                <div
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span>{item.question}</span>
                                    <span className="icon">
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </div>

                                {activeIndex === index && (
                                    <div className="faq-answer">{item.answer}</div>
                                )}
                            </div>
                        ))}
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
export default Faqs;
