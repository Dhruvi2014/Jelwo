import React from "react";

function CartDrawer({ open, onClose, cart, updateQty, removeItem, setShowCartPage
 }) {
    const FREE_SHIPPING_LIMIT = 200;

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    const remaining = Math.max(FREE_SHIPPING_LIMIT - subtotal, 0);
    const progressPercent = Math.min((subtotal / FREE_SHIPPING_LIMIT) * 100, 100);

    return (
        <div className={`cart-drawer ${open ? "open" : ""}`}>

            <div className="cart-progress-wrapper">
                {remaining > 0 ? (
                    <p>
                        Spend <strong>Rs. {remaining.toFixed(2)}</strong> more and get free
                        shipping!
                    </p>
                ) : (
                    <p className="free-ship-success">🎉 You got free shipping!</p>
                )}

                <div className="progress-bar">
                    <span
                        className="progress-fill"
                        style={{ width: `${progressPercent}%` }}
                    ></span>

                    <i
                        className="fa-solid fa-truck progress-truck"
                        style={{ left: `calc(${progressPercent}% - 10px)` }}
                    ></i>
                </div>

            </div>

            <div className="cart-header">
                <h4>My shopping cart</h4>
                <span onClick={onClose}>✕</span>
            </div>

            {cart.length === 0 ? (
                <div className="empty-cart-box">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <p>Your cart is empty</p>
                    <button onClick={onClose}>CONTINUE SHOPPING</button>
                </div>
            ) : (
                <>
                    <div className="cart-items-wrapper">
                        {cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image[0]} alt="" />

                                <div className="cart-info">
                                    <h6>{item.name}</h6>
                                    <p className="cart-color">Color: {item.color}</p>

                                    <div className="cart-price-qty">
                                        <span className="price">
                                            Rs. {item.price} <del>Rs. {item.oldPrice}</del>
                                        </span>

                                        <div className="qty-box">
                                            <button onClick={() => updateQty(item.id, item.qty - 1)}>
                                                −
                                            </button>
                                            <span>{item.qty}</span>
                                            <button onClick={() => updateQty(item.id, item.qty + 1)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <i
                                    className="fa-regular fa-trash-can delete"
                                    onClick={() => removeItem(item.id)}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="cart-footer">
                        <div className="cart-subtotal">
                            <span>Subtotal</span>
                            <strong>Rs. {subtotal}</strong>
                        </div>

                        <div className="cart-actions">
                            <button
                                className="view-cart-btn"
                                onClick={() => {
                                    onClose();
                                    setShowCartPage(true);
                                }}

                            >
                                VIEW CART
                            </button>
                            <button className="checkout-btn">CHECKOUT</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartDrawer;
