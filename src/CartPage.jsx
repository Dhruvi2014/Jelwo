import React from "react";
import "./Style.css";

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";
function CartPage({ cart, updateQty, removeItem, onBack }) {
    const FREE_SHIPPING_LIMIT = 200;

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    const remaining = Math.max(FREE_SHIPPING_LIMIT - subtotal, 0);
    const progressPercent = Math.min(
        (subtotal / FREE_SHIPPING_LIMIT) * 100,
        100
    );

    return (
        <div className="cart-page">

            <div className="cart-hero">
                <p className="breadcrumb">
                    <span
                        className="breadcrumb-link"
                        onClick={onBack}
                        style={{ cursor: "pointer" }}
                    >
                        HOME
                    </span>{" "}
                    – YOUR SHOPPING CART
                </p>

                <h1>Your Shopping Cart</h1>
            </div>

            <div className="container my-5">
                <p className="text-center fw-semibold">
                    {remaining > 0
                        ? `SPEND RS. ${remaining.toFixed(2)} MORE AND GET FREE SHIPPING!`
                        : "🎉 YOU GOT FREE SHIPPING!"}
                </p>

                <div className="progress-wrapper">
                    <div className="progress-bar">
                        <span style={{ width: `${progressPercent}%` }} />
                    </div>
                    <i
                        className="fa-solid fa-truck"
                        style={{ left: `${progressPercent}%` }}
                    ></i>
                </div>
            </div>

            <div className="container cart-content">
                <div className="row">

                    <div className="col-md-8">
                        <div className="cart-table-header">
                            <span>Product</span>
                            <span>Quantity</span>
                            <span>Total</span>
                        </div>

                        {cart.map((item) => (
                            <div className="cart-row" key={item.id}>
                                <div className="cart-product">
                                    <img src={item.image[0]} alt="" />
                                    <div>
                                        <h6>{item.name}</h6>
                                        <p>
                                            Rs. {item.price} <del>Rs. {item.oldPrice}</del>
                                        </p>
                                        <small>Color: {item.color}</small>
                                    </div>
                                </div>

                                <div className="qty-box">
                                    <button onClick={() => updateQty(item.id, item.qty - 1)}>
                                        −
                                    </button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => updateQty(item.id, item.qty + 1)}>
                                        +
                                    </button>
                                    <i
                                        className="fa-regular fa-trash-can"
                                        onClick={() => removeItem(item.id)}
                                    ></i>
                                </div>

                                <strong>Rs. {item.price * item.qty}</strong>
                            </div>
                        ))}

                        <button className="return-btn" onClick={onBack}>
                            RETURN TO STORE
                        </button>

                        <div className="cart-extra">

                            <div className="discount-box">
                                <label>Discount code</label>
                                <div className="discount-input">
                                    <input type="text" placeholder="Discount code" />
                                    <button>→</button>
                                </div>
                            </div>

                            <div className="instruction-box">
                                <label>Order special instructions</label>
                                <textarea placeholder="Order special instructions"></textarea>
                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="summary-box">
                            <h5>Subtotal</h5>
                            <h4>Rs. {subtotal.toFixed(2)}</h4>
                            <p>Taxes, discounts and shipping calculated at checkout.</p>
                            <button className="checkout-btn">CHECKOUT</button>
                        </div>
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
        </div>
    );
}

export default CartPage;
