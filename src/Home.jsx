// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useEffect, useState } from "react";

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

import p1 from "./assets/p1.webp";
import p2 from "./assets/p2.webp";
import p3 from "./assets/p3.webp";
import CartDrawer from "./CartDrawer";


function Home({ wishlist = [], toggleWishlist, openWishlist }) {
    const [quickViewProduct, setQuickViewProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState("gold");
    const [qty, setQty] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    const [cart, setCart] = useState([]);
    const [openCart, setOpenCart] = useState(false);

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

        setOpenCart(true); // 🔥 OPEN DRAWER
    };

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

    const [timeLeft, setTimeLeft] = useState({
        days: 1,
        hours: 16,
        minutes: 5,
        seconds: 43,
    });

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

    return (
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
                            <i class="fa-solid fa-magnifying-glass"></i>            </div>

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

                        <li>BLOG</li>

                        <li className="dropdown has-caret">
                            PAGES <i className="fa-solid fa-angle-down"></i>

                            <div className="simple-dropdown">
                                <p>About Us</p>
                                <p>Contact</p>
                                <p>FAQ</p>
                                <p>Privacy Policy</p>
                                <p>Refund Policy</p>
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
                    {products.map((p) => {
                        const isWishlisted = wishlist.some(
                            (item) => item.id === p.id
                        );

                        return (
                            <div className="col-md-3" key={p.id}>
                                <div className="product-card">
                                    <span className="discount">{p.discount}%</span>

                                    {/* IMAGE */}
                                    <div className="img-wrap">
                                        <img src={p.image[0]} alt={p.name} />

                                        <div className="image-overlay">
                                            <button onClick={() => toggleWishlist(p)}>
                                                <i className="fa-regular fa-heart"></i>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setQuickViewProduct(p);
                                                    setActiveImage(0);
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

                            {/* LEFT SIDE */}
                            <div className="col-md-6">

                                <div className="quickview-image">
                                    <img
                                        src={quickViewProduct.image[activeImage]}
                                        alt=""
                                    />

                                    {/* LEFT ARROW */}
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

                                    {/* RIGHT ARROW */}
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

                                {/* THUMBNAILS */}
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

                            {/* RIGHT SIDE */}
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
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
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

            <CartDrawer
                open={openCart}
                onClose={() => setOpenCart(false)}
                cart={cart}
                updateQty={updateQty}
                removeItem={removeItem}
            />

        </>
    );
}
export default Home;
