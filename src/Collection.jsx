import React, { useEffect, useState } from "react";
import products from "./products";
import CartDrawer from "./CartDrawer";
import "./Style.css";
import banner5 from "./assets/banner5.webp";
import sidebanner from "./assets/sidebanner.webp"

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";

function Collection({
    wishlist,
    toggleWishlist,
    onBack,
}) {
    const [quickViewProduct, setQuickViewProduct] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const [qty, setQty] = useState(1);

    const [cart, setCart] = useState([]);
    const [openCart, setOpenCart] = useState(false);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [availability, setAvailability] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 28]);
    const [selectedColors, setSelectedColors] = useState([]);

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

    const addToCart = (product, color = "Gold", quantity = 1) => {
        setCart((prev) => {
            const exist = prev.find(
                (item) => item.id === product.id && item.color === color
            );

            if (exist) {
                return prev.map((item) =>
                    item.id === product.id && item.color === color
                        ? { ...item, qty: item.qty + quantity }
                        : item
                );
            }

            return [...prev, { ...product, qty: quantity, color }];
        });

        setOpenCart(true);
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

    const toggleCategory = (cat) => {
        setSelectedCategories((prev) =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const toggleAvailability = (type) => {
        setAvailability((prev) =>
            prev.includes(type) ? prev.filter(a => a !== type) : [...prev, type]
        );
    };

    const toggleColor = (color) => {
        setSelectedColors((prev) =>
            prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
        );
    };


    const filteredProducts = products.filter((p) => {
        if (selectedCategories.length && !selectedCategories.includes(p.category)) {
            return false;
        }

        if (availability.length) {
            if (availability.includes("in") && !p.inStock) return false;
            if (availability.includes("out") && p.inStock) return false;
        }

        if (p.price < priceRange[0] || p.price > priceRange[1]) {
            return false;
        }

        if (selectedColors.length && !selectedColors.includes(p.color)) {
            return false;
        }

        return true;
    });

    return (
        <>
            {/* <div className="collection-header">
                <div className="container">
                    <p className="breadcrumb">HOME - Chain</p>
                    <h1>Platinum Ring</h1>
                </div>
            </div> */}

            <div className="cart-hero">
                <p className="breadcrumb">
                    <span
                        className="breadcrumb-link"
                        onClick={onBack}
                        style={{ cursor: "pointer" }}
                    >
                        HOME
                    </span>{" "}
                    – CHAIN
                </p>

                <h1>CHAIN</h1>
            </div>
            <br></br>
            <div className="container collection-page">
                <div className="row">

                    <div className="col-lg-3 col-md-4">
                        <aside className="collection-sidebar">

                            <div className="filter-block">
                                <h4>Categories</h4>
                                <ul>
                                    {["Bangles", "Bracelets", "Brooch", "Chain", "Diamond"].map(cat => (
                                        <li key={cat}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedCategories.includes(cat)}
                                                    onChange={() => toggleCategory(cat)}
                                                />
                                                {cat}
                                            </label>
                                            <span>(12)</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="filter-block">
                                <h4>Filter</h4>
                            </div>

                            <div className="filter-block">
                                <h4>Availability</h4>
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={() => toggleAvailability("in")}
                                    /> In stock (12)
                                </label><br></br>
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={() => toggleAvailability("out")}
                                    /> Out of stock (1)
                                </label>
                            </div>

                            <div className="filter-block">
                                <h4>Price</h4>

                                <input
                                    type="range"
                                    min="0"
                                    max="28"
                                    value={priceRange[1]}
                                    onChange={(e) =>
                                        setPriceRange([0, Number(e.target.value)])
                                    }
                                />

                                <div className="price-range">
                                    <input value={`₹${priceRange[0]}`} disabled />
                                    <input value={`₹${priceRange[1]}`} disabled />
                                </div>
                            </div>

                            <div className="filter-block">
                                <h4>Color</h4>
                                <div className="color-filter">
                                    {["Gold", "Brown", "Silver", "Yellow"].map(color => (
                                        <span
                                            key={color}
                                            className={color.toLowerCase()}
                                            onClick={() => toggleColor(color)}
                                        ></span>
                                    ))}
                                </div>
                            </div>

                            <div className="filter-block special-product">
                                <h4>Special product</h4>

                                <div className="sp-item">
                                    <img src={products[0].image[0]} alt="" />
                                    <div>
                                        <p>{products[0].name}</p>
                                        <strong>Rs. {products[0].price}</strong>
                                    </div>
                                </div>

                                <div className="sp-item">
                                    <img src={products[1].image[0]} alt="" />
                                    <div>
                                        <p>{products[1].name}</p>
                                        <strong>Rs. {products[1].price}</strong>
                                    </div>
                                </div>
                                <br></br>
                                <div className="sidebanner">
                                    <img src={sidebanner}></img>
                                </div>
                            </div>

                        </aside>

                    </div>

                    <div className="col-lg-9 col-md-8">

                        <div className="collection-top">

                            <div className="collection-banner">
                                <img
                                    src={banner5}
                                    alt="Chain Collection"
                                />

                                <p className="collection-desc">
                                    Care for fiber: 30% more recycled polyester. We label garments manufactured
                                    using environmentally friendly technologies and raw materials with the Join
                                    Life label.
                                </p>

                                <div className="collection-meta">
                                    <div className="view-icons">
                                        <i className="fa-solid fa-border-all"></i>
                                        <i className="fa-solid fa-bars"></i>
                                    </div>

                                    <span>{products.length} products</span>

                                    <div className="sort-box">
                                        <label>Sort by:</label>
                                        <select>
                                            <option>Best selling</option>
                                            <option>Price, low to high</option>
                                            <option>Price, high to low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {filteredProducts.map((p) => {
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
                                                    <div><strong>{timeLeft.days}</strong><span>DAY</span></div>
                                                    <div><strong>{timeLeft.hours}</strong><span>HRS</span></div>
                                                    <div><strong>{timeLeft.minutes}</strong><span>MIN</span></div>
                                                    <div><strong>{timeLeft.seconds}</strong><span>SEC</span></div>
                                                </div>

                                                <div className="image-overlay">
                                                    <button onClick={() => toggleWishlist(p)}>
                                                        <i className={`fa-heart ${isWishlisted ? "fa-solid" : "fa-regular"}`}></i>
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
                                                <p>
                                                    Rs. {p.price} <del>Rs. {p.oldPrice}</del>
                                                </p>
                                            </div>

                                            <div className="hover-info">
                                                <div className="option-row">
                                                    <select className="color-select">
                                                        <option>Gold</option>
                                                        <option>Brown</option>
                                                        <option>Silver</option>
                                                    </select>

                                                    <div className="qty">
                                                        <button onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
                                                        <span>{qty}</span>
                                                        <button onClick={() => setQty(q => q + 1)}>+</button>
                                                    </div>
                                                </div>

                                                <button
                                                    className="add-cart"
                                                    onClick={() => addToCart(p, "Gold", qty)}
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
                                        onClick={() => addToCart(quickViewProduct, "Gold", qty)}
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
}

export default Collection;
