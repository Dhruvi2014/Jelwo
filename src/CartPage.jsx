import React from "react";

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
        </div>
    );
}

export default CartPage;
