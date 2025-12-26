import React, { useEffect, useState, useRef } from "react";
import "./Style.css";
import b1 from "./assets/newsside1.avif"
import b2 from "./assets/newsside2.avif"
import b3 from "./assets/newsside3.webp"

import n1 from "./assets/news1.webp";
import n2 from "./assets/news2.jpg";
import n3 from "./assets/news3.webp";
import n4 from "./assets/news4.webp";
import n5 from "./assets/news5.webp";

function Blog({ onBack }) {
    const blogSliderRef = useRef(null);
    return (
        <>
            <div className="container-fluid cart-hero">
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
                <h2 className="text-center mb-5">Jewelry news</h2>

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
                                    <img src={n2} />
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
                                    <img src={n3} />
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
                                    <img src={n4} />
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
                                    <img src={n5} />
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
                                    <img src={n2} />
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
                                    <img src={n3} />
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
                                    <img src={n4} />
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
                                    <img src={n5} />
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
        </>


    );
}

export default Blog;

