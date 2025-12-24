import React, { useEffect, useState } from "react";
import products from "./products";
import CartDrawer from "./CartDrawer";
import "./Style.css";
import banner5 from "./assets/banner5.webp";

function Collection({
    wishlist,
    toggleWishlist,
    onBack,
}) {
    // ================= STATES =================
    const [quickViewProduct, setQuickViewProduct] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const [qty, setQty] = useState(1);

    const [cart, setCart] = useState([]);
    const [openCart, setOpenCart] = useState(false);

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
                                    <li><label><input type="checkbox" /> 14K</label><span>(12)</span></li>
                                    <li><label><input type="checkbox" /> 18K</label><span>(12)</span></li>
                                    <li><label><input type="checkbox" /> 22K</label><span>(12)</span></li>
                                    <li><label><input type="checkbox" /> 24K</label><span>(12)</span></li>
                                    <li><label><input type="checkbox" /> Bangles</label><span>(12)</span></li>
                                    <li><label><input type="checkbox" /> Bracelets</label><span>(12)</span></li>
                                    <li><label><input type="checkbox" /> Brooch</label><span>(12)</span></li>
                                </ul>
                            </div>

                            <div className="filter-block">
                                <h4>Availability</h4>
                                <label><input type="checkbox" /> In stock (12)</label>
                                <label><input type="checkbox" /> Out of stock (1)</label>
                            </div>

                            <div className="filter-block">
                                <h4>Price</h4>
                                <input type="range" min="0" max="28" />
                                <div className="price-range">
                                    <input value="₹0" disabled />
                                    <input value="₹28" disabled />
                                </div>
                            </div>

                            <div className="filter-block">
                                <h4>Color</h4>
                                <div className="color-filter">
                                    <span className="beige"></span>
                                    <span className="bronze"></span>
                                    <span className="brown"></span>
                                    <span className="gold"></span>
                                    <span className="silver"></span>
                                    <span className="yellow"></span>
                                </div>
                            </div>

                            <div className="filter-block special-product">
                                <h4>Special product</h4>
                                <div className="sp-item">
                                    <img src={products[0].image[0]} alt="" />
                                    <div>
                                        <p>Glitter diamond ring</p>
                                        <strong>Rs. 10.00</strong>
                                    </div>
                                </div>
                            </div>

                        </aside>
                    </div>

                    <div className="col-lg-9 col-md-8">

                        {/* ===== COLLECTION TOP IMAGE ===== */}
                        <div className="collection-top">

                            <div className="collection-banner">
                                <img
                                    src={banner5}
                                    alt="Chain Collection"
                                />

                                {/* <div className="banner-content">
                                    <small>GET A 30% DISCOUNT</small>
                                    <h2>
                                        Shine with our <br /> new collection
                                    </h2>
                                </div> */}
                            </div>

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



                        <div className="row">
                            {products.map((p) => {
                                const isWishlisted = wishlist.some(
                                    (item) => item.id === p.id
                                );

                                return (
                                    <div className="col-md-3" key={p.id}>
                                        <div className="product-card">

                                            <span className="discount">{p.discount}%</span>

                                            <div className="img-wrap">
                                                <img src={p.image[0]} alt={p.name} />

                                                {/* TIMER */}
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
                        <span className="close-btn" onClick={() => setQuickViewProduct(null)}>✕</span>

                        <div className="row">
                            <div className="col-md-6">
                                <img src={quickViewProduct.image[activeImage]} alt="" />
                            </div>

                            <div className="col-md-6">
                                <h3>{quickViewProduct.name}</h3>
                                <p>Rs. {quickViewProduct.price}</p>

                                <div className="qty-box">
                                    <button onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
                                    <span>{qty}</span>
                                    <button onClick={() => setQty(q => q + 1)}>+</button>
                                </div>

                                <button
                                    className="add-cart"
                                    onClick={() => addToCart(quickViewProduct, "Gold", qty)}
                                >
                                    ADD TO CART
                                </button>
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

export default Collection;
