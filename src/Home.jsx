// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useEffect, useState, useRef } from "react";
import CartPage from "./CartPage";
import Collection from "./Collection";

import "./Style.css";
import Logo from "./assets/logo.png";
import heroBg from "./assets/bg.png";
import sinceLogo from "./assets/since.png";
import shopImg from "./assets/shop.webp";
import banner1 from "./assets/banner1.webp";
import banner2 from "./assets/banner2.webp";
import rings from "./assets/c5.webp";
import earrings from "./assets/c1.webp";
import bracelets from "./assets/c4.webp";
import necklace from "./assets/c2.webp";
import pendant from "./assets/c3.webp";
import products from "./products";
import banner3 from "./assets/banner3.webp";
import banner4 from "./assets/banner4.webp";

import CartDrawer from "./CartDrawer";
import kristen from "./assets/kristen.avif";
import smith from "./assets/smith.webp";

import n1 from "./assets/news1.webp";
import n2 from "./assets/news2.jpg";
import n3 from "./assets/news3.webp";
import n4 from "./assets/news4.webp";
import n5 from "./assets/news5.webp";

import v1 from "./assets/video1.mp4";
import v2 from "./assets/video2.mp4";
import v3 from "./assets/video3.mp4";
import v4 from "./assets/video4.mp4";
import v5 from "./assets/video5.mp4";
import v6 from "./assets/video6.mp4";

import i1 from "./assets/j2.webp";
import i2 from "./assets/j3.webp";
import i3 from "./assets/p4.webp";
import i4 from "./assets/j1-2.webp";
import i5 from "./assets/j3.webp";
import i6 from "./assets/j1.webp";

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";

function Home({ wishlist = [], toggleWishlist, openWishlist, openNews, openBlog, openAbout, openAbout2,openContact,openContact2,openFaqs,openPrivacy,openRefund,openLocation,openShipping,openTerms}) {
    const [quickViewProduct, setQuickViewProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState("gold");
    const [qty, setQty] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    const [cart, setCart] = useState([]);
    const [openCart, setOpenCart] = useState(false);
    const [showCartPage, setShowCartPage] = useState(false);
    const [showCollection, setShowCollection] = useState(false);

    const [timeLeft, setTimeLeft] = useState({
        days: 1,
        hours: 16,
        minutes: 5,
        seconds: 43,
    });

    const updateQty = (id, qty) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty: Math.max(1, qty) } : item
            )
        );
    };

    const removeItem = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };


    const addToCart = (product, color = "Gold", qty = 1) => {
        setCart((prev) => {
            const exist = prev.find(
                (item) => item.id === product.id && item.color === color
            );

            if (exist) {
                return prev.map((item) =>
                    item.id === product.id && item.color === color
                        ? { ...item, qty: item.qty + qty }
                        : item
                );
            }

            return [...prev, { ...product, qty, color }];
        });

        setOpenCart(true);
    };

    const blogSliderRef = useRef(null);
    const [blogIndex, setBlogIndex] = useState(0);

    const visibleBlogs = 3;
    const totalBlogs = 5;
    const maxBlogIndex = totalBlogs - visibleBlogs;

    const videos = [
        {
            video: v1,
            title: "Chic diamond ring",
            price: "Rs. 22.00",
            img: i1,
        },
        {
            video: v2,
            title: "Flower jhumka",
            price: "Rs. 18.00",
            img: i2,
        },
        {
            video: v3,
            title: "Sherbi ring",
            price: "Rs. 26.00",
            img: i3,
        },
        {
            video: v4,
            title: "Drop gold earrings",
            price: "Rs. 14.00",
            img: i4,
        },
        {
            video: v5,
            title: "Flower pendant",
            price: "Rs. 22.00",
            img: i5,
        },
        {
            video: v6,
            title: "Diamond studs",
            price: "Rs. 30.00",
            img: i6,
        },
    ];

    const [startIndex, setStartIndex] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const inner = document.querySelector("#categorySlider .category-inner");
        if (!inner) return;

        let index = 0;
        const total = 5;

        const interval = setInterval(() => {
            index++;
            if (index > total - 3) index = 0;
            inner.style.transform = `translateX(-${index * 33.3333}%)`;
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlogIndex((prev) => (prev >= maxBlogIndex ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (blogSliderRef.current) {
            blogSliderRef.current.style.transform = `translateX(-${blogIndex * 33.3333}%)`;
        }
    }, [blogIndex]);

    if (showCollection) {
        return (
            <Collection
                onBack={() => setShowCollection(false)}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
                setQuickViewProduct={setQuickViewProduct}
                setActiveImage={setActiveImage}
                setQty={setQty}
            />
        );
    }

    return (
        <>
            {showCartPage ? (
                <CartPage
                    cart={cart}
                    updateQty={updateQty}
                    removeItem={removeItem}
                    onBack={() => setShowCartPage(false)}
                />
            ) : (
                <>
                    <div className="top-bar">
                        <div className="container d-flex justify-content-between align-items-center">
                            <div className="logo">
                                <img src={Logo} alt="logo" />
                            </div>

                            <div className="top-text">
                                Free UK standard delivery on all orders.
                            </div>

                            <div className="right-icons d-flex align-items-center gap-3">
                                <div className="search-box">
                                    <input type="text" placeholder="Search product..." />
                                    <i className="fa-solid fa-magnifying-glass"></i>            </div>

                                <i className="fa-regular fa-user"></i>
                                {/* <i class="fa-regular fa-heart"></i> */}
                                <div className="right-icons">
                                    <i
                                        className="fa-solid fa-heart"
                                        onClick={openWishlist}
                                        style={{ cursor: "pointer" }}
                                    >
                                        ({wishlist.length})
                                    </i>
                                </div>

                                <i
                                    className="fa-solid fa-bag-shopping"
                                    onClick={() => setOpenCart(true)}
                                    style={{ cursor: "pointer" }}
                                ></i>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="nav-bar">
                        <div className="container d-flex justify-content-between align-items-center">
                            <div className="phone">
                                <i className="fa-solid fa-headset"></i> (220) 123 456 7890
                            </div>

                            <ul className="menu">
                                <li className="has-caret">
                                    HOME <i className="fa-solid fa-angle-down"></i>
                                </li>

                                <li className="dropdown has-caret">
                                    SHOP <i className="fa-solid fa-angle-down"></i>

                                    <div className="mega-dropdown">
                                        <div className="row">
                                            <div className="col">
                                                <h5>Earrings</h5>
                                                <p>Diamond ring</p>
                                                <p>Gold bangle</p>
                                                <p>Stud earrings</p>
                                                <p>Floral Gol</p>
                                                <p>Stud earrings</p>
                                                <p>Stud earrings</p>

                                            </div>

                                            <div className="col">
                                                <h5>Necklace</h5>
                                                <p>Rose gold rings</p>
                                                <p>Simple pearl</p>
                                                <p>Classic chain</p>
                                                <p>Floral Gold</p>
                                                <p>Classic chain</p>
                                                <p>Simple Pearl</p>

                                            </div>

                                            <div className="col">
                                                <h5>Rings</h5>
                                                <p>Engagement rings</p>
                                                <p>Wedding bands</p>
                                                <p>Designer rings</p>
                                                <p>Rose Gold Ring</p>
                                                <p>Gold rose pin</p>
                                                <p>Designer rings</p>

                                            </div>

                                            <div className="col">
                                                <h5>Bracelets</h5>
                                                <p>Engagement rings</p>
                                                <p>Wedding bands</p>
                                                <p>Designer rings</p>
                                                <p>Designer rings</p>
                                                <p>Designer rings</p>
                                                <p>Designer rings</p>

                                            </div>

                                            <div className="col image-col">
                                                <img src={shopImg} alt="Shop" />
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="dropdown has-caret">
                                    PRODUCTS <i className="fa-solid fa-angle-down"></i>
                                    <div className="mega-dropdown">
                                        <div className="row">
                                            <div className="col">
                                                <h5>Earrings</h5>
                                                <p>Diamond ring</p>
                                                <p>Gold bangle</p>
                                                <p>Stud earrings</p>
                                                <p>Floral Gol</p>
                                                <p>Stud earrings</p>
                                                <p>Stud earrings</p>

                                            </div>

                                            <div className="col">
                                                <h5>Necklace</h5>
                                                <p>Rose gold rings</p>
                                                <p>Simple pearl</p>
                                                <p>Classic chain</p>
                                                <p>Floral Gold</p>
                                                <p>Classic chain</p>
                                                <p>Simple Pearl</p>

                                            </div>

                                            <div className="col">
                                                <h5>Rings</h5>
                                                <p>Engagement rings</p>
                                                <p>Wedding bands</p>
                                                <p>Designer rings</p>
                                                <p>Rose Gold Ring</p>
                                                <p>Gold rose pin</p>
                                                <p>Designer rings</p>

                                            </div>

                                            <div className="col">
                                                <h5>Bracelets</h5>
                                                <p>Engagement rings</p>
                                                <p>Wedding bands</p>
                                                <p>Designer rings</p>
                                                <p>Designer rings</p>
                                                <p>Designer rings</p>
                                                <p>Designer rings</p>

                                            </div>
                                        </div>
                                    </div>

                                </li>

                                <li onClick={openBlog} style={{ cursor: "pointer" }}>
                                    BLOG
                                </li>

                                <li className="dropdown has-caret">

                                    PAGES <i className="fa-solid fa-angle-down"></i>

                                    <div className="simple-dropdown">
                                        <div className="sub-dropdown">
                                            <span>
                                                About Us <i className="fa-solid fa-angle-right"></i>
                                            </span>

                                            <div className="child-dropdown">
                                                <p onClick={openAbout} style={{ cursor: "pointer" }}>
                                                    About Us
                                                </p>
                                                <p onClick={openAbout2} style={{ cursor: "pointer" }}>
                                                    About Us 2
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sub-dropdown">
                                            <span>
                                                Contact Us <i className="fa-solid fa-angle-right"></i>
                                            </span>

                                            <div className="child-dropdown">
                                                <p onClick={openContact} style={{ cursor: "pointer" }}>
                                                    Contact Us
                                                </p>
                                                <p onClick={openContact2} style={{ cursor: "pointer" }}>
                                                    Contact Us 2
                                                </p>
                                            </div>
                                        </div>

                                        <p onClick={openFaqs} style={{cursor:"pointer"}}>Faq's</p>
                                        <p onClick={openPrivacy} style={{cursor:"pointer"}}>Privacy policy</p>
                                        <p onClick={openRefund} style={{cursor:"pointer"}}>Refund policy</p>
                                        <p onClick={openLocation} style={{cursor:"pointer"}}>Store location</p>
                                        <p onClick={openShipping} style={{cursor:"pointer"}}>Shipping & return</p>
                                        <p onClick={openTerms} style={{cursor:"pointer"}}>Terms & condition</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="try-home">
                                <i className="fa-solid fa-house"></i> FREE TRY AT HOME
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <section
                        className="hero"
                        style={{ backgroundImage: `url(${heroBg})` }}
                    >
                        <div className="slider-arrow left">
                            <i className="fa-solid fa-angle-left"></i>
                        </div>

                        <div className="slider-arrow right">
                            <i className="fa-solid fa-angle-right"></i>
                        </div>

                        <img src={sinceLogo} alt="Since 1991" className="since-logo" />

                        <div className="hero-text">
                            <br></br><br></br><br></br>
                            <h1>
                                Jewelry is our <br /> passion
                            </h1>
                            <button>SHOP NOW</button>
                        </div>
                    </section>

                    <div className="container banner-section">

                        <div className="offer-pill">
                            DIAMONDS FOR EVERY EXCUSE 1500+ DESIGNS UNDER
                            <span className="blink">$200</span>
                        </div>

                        <div className="row g-4 mt-4">

                            <div className="col-md-6">
                                <div className="banner-card">
                                    <img src={banner1} alt="Exquisite collection" />

                                    <div className="banner-content0">
                                        <span className="small-text">GET A 30% DISCOUNT</span>
                                        <h2>Exquisite<br />collection</h2>
                                        <button className="shop-btn">SHOP NOW</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="banner-card">
                                    <img src={banner2} alt="Diamond necklace" />

                                    <div className="banner-content">
                                        <span className="small-text">20% OFF ON WASTAGE</span>
                                        <h2>Diamond<br />necklace</h2>
                                        <button className="shop-btn">SHOP NOW</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <section className="popular-category">
                        <h2 className="text-center mb-5">Popular category</h2>

                        <div id="categorySlider" className="category-carousel">
                            <div className="category-inner">

                                <div className="category-item">
                                    <div className="category-card">
                                        <img src={earrings} />
                                        <div className="text-box">
                                            <span>10 + ITEMS</span>
                                            <h3>Earrings</h3>
                                            <p>SHOP NOW</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="category-item">
                                    <div className="category-card">
                                        <img src={bracelets} />
                                        <div className="text-box">
                                            <span>12 + ITEMS</span>
                                            <h3>Bracelets</h3>
                                            <p>SHOP NOW</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="category-item">
                                    <div className="category-card">
                                        <img src={necklace} />
                                        <div className="text-box">
                                            <span>12 + ITEMS</span>
                                            <h3>Necklace</h3>
                                            <p>SHOP NOW</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="category-item">
                                    <div className="category-card">
                                        <img src={pendant} />
                                        <div className="text-box">
                                            <span>12 + ITEMS</span>
                                            <h3>Pendants</h3>
                                            <p>SHOP NOW</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="category-item">
                                    <div className="category-card">
                                        <img src={rings} />
                                        <div className="text-box">
                                            <span>8 + ITEMS</span>
                                            <h3>Rings</h3>
                                            <p>SHOP NOW</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="features-bar container my-5">
                        <div className="row text-start">

                            <div className="col-md-3 d-flex align-items-center feature-item">
                                <i className="fa-solid fa-truck feature-icon"></i>
                                <div>
                                    <h6>Free shipping</h6>
                                    <p>Free shipping all order</p>
                                </div>
                            </div>

                            <div className="col-md-3 d-flex align-items-center feature-item">
                                <i className="fa-solid fa-headset feature-icon"></i>
                                <div>
                                    <h6>Qualiy support</h6>
                                    <p>Contact us anytime</p>
                                </div>
                            </div>

                            <div className="col-md-3 d-flex align-items-center feature-item">
                                <i className="fa-solid fa-rotate-left feature-icon"></i>
                                <div>
                                    <h6>Money return</h6>
                                    <p>30 days for free return</p>
                                </div>
                            </div>

                            <div className="col-md-3 d-flex align-items-center feature-item">
                                <i className="fa-solid fa-shield-halved feature-icon"></i>
                                <div>
                                    <h6>Secured payment</h6>
                                    <p>Payment cards accepted</p>
                                </div>
                            </div>

                        </div>
                    </section>

                    <div className="container my-5">
                        <h2 className="text-center mb-4">New jewelrys</h2>

                        <div className="row">
                            {products.slice(0, 4).map((p) => {
                                const isWishlisted = wishlist.some(
                                    (item) => item.id === p.id
                                );

                                return (
                                    <div className="col-md-3" key={p.id}>
                                        <div className="product-card">
                                            <span className="discount">{p.discount}%</span>

                                            <div className="img-wrap">
                                                <img src={p.image[0]} alt={p.name} />

                                                <div className="countdown">
                                                    <div>
                                                        <strong>{timeLeft.days}</strong>
                                                        <span>DAY</span>
                                                    </div>
                                                    <div>
                                                        <strong>{timeLeft.hours}</strong>
                                                        <span>HRS</span>
                                                    </div>
                                                    <div>
                                                        <strong>{timeLeft.minutes}</strong>
                                                        <span>MIN</span>
                                                    </div>
                                                    <div>
                                                        <strong>{timeLeft.seconds}</strong>
                                                        <span>SEC</span>
                                                    </div>
                                                </div>

                                                <div className="image-overlay">
                                                    <button onClick={() => toggleWishlist(p)}>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setQuickViewProduct(p);
                                                            setActiveImage(0);
                                                            setQty(1);
                                                        }}

                                                    >
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>

                                                </div>
                                            </div>

                                            <div className="product-info">
                                                <div className="deal-timer">JEWELRY</div>
                                                <h6>{p.name}</h6>
                                                <p>Rs. {p.price} <del>Rs. {p.oldPrice}</del></p>
                                            </div>
                                            <div className="hover-info">

                                                <div className="option-row">
                                                    <select className="color-select">
                                                        <option>Gold</option>
                                                        <option>Brown</option>
                                                        <option>Silver</option>
                                                    </select>

                                                    <div className="qty">
                                                        <button>-</button>
                                                        <span>1</span>
                                                        <button>+</button>
                                                    </div>
                                                </div>

                                                <button
                                                    className="add-cart"
                                                    onClick={() => addToCart(p, "Gold", 1)}
                                                >
                                                    ADD TO CART
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {quickViewProduct && (
                        <div className="quickview-backdrop">
                            <div className="quickview-modal">

                                <span
                                    className="close-btn"
                                    onClick={() => setQuickViewProduct(null)}
                                >
                                    ✕
                                </span>

                                <div className="row">

                                    <div className="col-md-6">

                                        <div className="quickview-image">
                                            <img
                                                src={quickViewProduct.image[activeImage]}
                                                alt=""
                                            />

                                            <button
                                                className="nav left"
                                                onClick={() =>
                                                    setActiveImage(
                                                        activeImage === 0
                                                            ? quickViewProduct.image.length - 1
                                                            : activeImage - 1
                                                    )
                                                }
                                            >
                                                ‹
                                            </button>

                                            <button
                                                className="nav right"
                                                onClick={() =>
                                                    setActiveImage(
                                                        activeImage === quickViewProduct.image.length - 1
                                                            ? 0
                                                            : activeImage + 1
                                                    )
                                                }
                                            >
                                                ›
                                            </button>
                                        </div>

                                        <div className="thumbs">
                                            {quickViewProduct.image.map((img, index) => (
                                                <img
                                                    key={index}
                                                    src={img}
                                                    className={activeImage === index ? "active-thumb" : ""}
                                                    onClick={() => setActiveImage(index)}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-md-6">

                                        <h3>{quickViewProduct.name}</h3>

                                        <div className="rating">★★★★★</div>

                                        <p className="price">
                                            Rs. {quickViewProduct.price}
                                            <del> Rs. {quickViewProduct.oldPrice}</del>
                                            <span className="sale-badge">
                                                Sale {quickViewProduct.discount}%
                                            </span>
                                        </p>

                                        <p className="stock">🟢 16 in stock</p>

                                        <p className="desc">
                                            Care for fiber: 30% more recycled polyester.
                                            Environment friendly product.
                                        </p>

                                        <label>Color</label>
                                        <div className="color-dots">
                                            <span className="gold"></span>
                                            <span className="brown"></span>
                                            <span className="silver"></span>
                                        </div>

                                        <div className="qty-box">
                                            <button onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
                                            <span>{qty}</span>
                                            <button onClick={() => setQty(q => q + 1)}>+</button>
                                        </div>


                                        <div className="action-btns">
                                            <button
                                                className="add-cart"
                                                onClick={() =>
                                                    addToCart(quickViewProduct, selectedColor, qty)
                                                }
                                            >
                                                ADD TO CART
                                            </button>
                                            <button className="buy-now">BUY IT NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="container text-center my-5">
                        <button onClick={() => setShowCollection(true)} className="view-collection-btn">
                            VIEW COLLECTION
                        </button>
                    </div>

                    <div className="container my-5">
                        <div className="row g-4">

                            <div className="col-md-7">
                                <div
                                    className="collection-banner left-banner"
                                    style={{ backgroundImage: `url(${banner3})` }}
                                >
                                    <div className="banner-content-wrap">
                                        <div className="banner-text">
                                            <h2>Unleash your<br />inner shine</h2>
                                            <p>It is a long established fact that a reader will<br></br>
                                                be distracted by the readable content of a<br></br>
                                                page when looking at its layout.</p>
                                            <button className="shop-now-btn">SHOP NOW</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-5">
                                <div
                                    className="collection-banner right-banner"
                                    style={{ backgroundImage: `url(${banner4})` }}
                                >
                                    <div className="play-btn">
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="container my-5">
                        <h2 className="text-center mb-4">Trending Products</h2>

                        <div className="row">
                            {products.slice(4, 8).map((p) => {
                                const isWishlisted = wishlist.some(
                                    (item) => item.id === p.id
                                );

                                return (
                                    <div className="col-md-3" key={p.id}>
                                        <div className="product-card">
                                            <span className="discount">{p.discount}%</span>

                                            <div className="img-wrap">
                                                <img src={p.image[0]} alt={p.name} />
                                                <div className="countdown">
                                                    <div>
                                                        <strong>{timeLeft.days}</strong>
                                                        <span>DAY</span>
                                                    </div>
                                                    <div>
                                                        <strong>{timeLeft.hours}</strong>
                                                        <span>HRS</span>
                                                    </div>
                                                    <div>
                                                        <strong>{timeLeft.minutes}</strong>
                                                        <span>MIN</span>
                                                    </div>
                                                    <div>
                                                        <strong>{timeLeft.seconds}</strong>
                                                        <span>SEC</span>
                                                    </div>
                                                </div>

                                                <div className="image-overlay">
                                                    <button onClick={() => toggleWishlist(p)}>
                                                        <i className="fa-regular fa-heart"></i>
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setQuickViewProduct(p);
                                                            setActiveImage(0);
                                                            setQty(1);
                                                        }}

                                                    >
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>

                                                </div>
                                            </div>

                                            <div className="product-info">
                                                <div className="deal-timer">JEWELRY</div>
                                                <h6>{p.name}</h6>
                                                <p>Rs. {p.price} <del>Rs. {p.oldPrice}</del></p>
                                            </div>
                                            <div className="hover-info">

                                                <div className="option-row">
                                                    <select className="color-select">
                                                        <option>Gold</option>
                                                        <option>Brown</option>
                                                        <option>Silver</option>
                                                    </select>

                                                    <div className="qty">
                                                        <button>-</button>
                                                        <span>1</span>
                                                        <button>+</button>
                                                    </div>
                                                </div>

                                                <button
                                                    className="add-cart"
                                                    onClick={() => addToCart(p, "Gold", 1)}
                                                >
                                                    ADD TO CART
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="container text-center my-5">
                        <button onClick={() => setShowCollection(true)} className="view-collection-btn">
                            VIEW COLLECTION
                        </button>
                    </div>

                    <hr></hr>

                    <section className="testimonial-section py-5">
                        <div className="container">
                            <h2 className="text-center mb-5">Happy customer</h2>

                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="testimonial-card p-4 h-100">
                                        <div className="star-rating mb-3">
                                            <span>⭐️⭐️⭐️⭐️⭐️</span>
                                            <span className="reviews-text">( 4.0 Reviews )</span>
                                        </div>
                                        <p className="testimonial-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea consequat.
                                        </p>
                                        <div className="testimonial-footer d-flex align-items-center mt-4">
                                            <img
                                                src={kristen}
                                                alt="Kristen"
                                                className="testimonial-img me-3"
                                            />
                                            <div>
                                                <h6 className="mb-0 testimonial-name">Kristen brown</h6>
                                                <small className="testimonial-role">Company CEO</small>
                                            </div>
                                            <div className="quote ms-auto">❝</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="testimonial-card p-4 h-100">
                                        <div className="star-rating mb-3">
                                            <span>⭐️⭐️⭐️⭐️⭐️</span>
                                            <span className="reviews-text">( 4.0 Reviews )</span>
                                        </div>
                                        <p className="testimonial-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea consequat.
                                        </p>
                                        <div className="testimonial-footer d-flex align-items-center mt-4">
                                            <img
                                                src={smith}
                                                alt="Michael"
                                                className="testimonial-img me-3"
                                            />
                                            <div>
                                                <h6 className="mb-0 testimonial-name">Michael smith</h6>
                                                <small className="testimonial-role">Customer</small>
                                            </div>
                                            <div className="quote ms-auto">❝</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <CartDrawer
                        open={openCart}
                        onClose={() => setOpenCart(false)}
                        cart={cart}
                        updateQty={updateQty}
                        removeItem={removeItem}
                        setShowCartPage={setShowCartPage}
                    />

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

                    <section className="reels-section container">
                        <h2 className="text-center mb-5">Watch & shop reels</h2>

                        <div className="position-relative">
                            <div className="row flex-nowrap reels-wrapper">
                                {videos.slice(startIndex, startIndex + 5).map((item, index) => (
                                    <div className="col reels-card" key={index}>
                                        <div className="video-box">
                                            <video autoPlay muted loop>
                                                <source src={item.video} type="video/mp4" />
                                            </video>

                                            <div className="overlay">
                                                <div className="product-box">
                                                    <img src={item.img} alt="" />
                                                    <div>
                                                        <p className="title">{item.title}</p>
                                                        <p className="price">{item.price}</p>
                                                    </div>
                                                </div>

                                                <button className="btn add-cart-btn">
                                                    ADD TO CART
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                className="nav-btn prev"
                                disabled={startIndex === 0}
                                onClick={() => setStartIndex(startIndex - 1)}
                            >
                                ❮
                            </button>

                            <button
                                className="nav-btn next"
                                disabled={startIndex + 5 >= videos.length}
                                onClick={() => setStartIndex(startIndex + 1)}
                            >
                                ❯
                            </button>
                        </div>
                    </section>

                    <br></br><br></br><br></br>
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
            )}
        </>
    );

}
export default Home;


