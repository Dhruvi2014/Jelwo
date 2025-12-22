import React from "react";

function CartDrawer({ open, onClose, cart, updateQty, removeItem }) {
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
        <div className={`cart-drawer ${open ? "open" : ""}`}>
            <div className="cart-progress-wrapper">
                {remaining > 0 ? (
                    <p>
                        Spend <strong>Rs. {remaining.toFixed(2)}</strong> more and get free
                        shipping!
                    </p>
                ) : (
                    <p className="free-ship-success">
                        🎉 You got free shipping!
                    </p>
                )}

                <div className="progress-bar">
                    <span
                        className="progress-fill"
                        style={{ width: `${progressPercent}%` }}
                    ></span>
                </div>
            </div>


            <div className="cart-header">
                <h4>My shopping cart</h4>
                <span onClick={onClose}>✕</span>
            </div>

            <div className="cart-progress">
                Spend Rs. 82.00 more and get free shipping!
            </div>

            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image[0]} alt="" />

                            <div className="cart-info">
                                <h6>{item.name}</h6>
                                <p>Color: {item.color}</p>
                                <p>
                                    Rs. {item.price} <del>Rs. {item.oldPrice}</del>
                                </p>

                                <div className="qty">
                                    <button onClick={() => updateQty(item.id, item.qty - 1)}>
                                        -
                                    </button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => updateQty(item.id, item.qty + 1)}>
                                        +
                                    </button>
                                </div>
                            </div>

                            <i
                                className="fa-regular fa-trash-can delete"
                                onClick={() => removeItem(item.id)}
                            ></i>
                        </div>
                    ))}

                    <div className="cart-footer">
                        <h5>Subtotal: Rs. {subtotal}</h5>
                        <button className="checkout-btn">CHECKOUT</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartDrawer;
