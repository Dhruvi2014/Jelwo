import React from "react";
import products from "./products";
import "./Style.css";

const Collection = ({
    wishlist,
    toggleWishlist,
    addToCart,
    setQuickViewProduct,
    setActiveImage,
    setQty,
}) => {
    return (
        <>
            {/* ===== SHOPIFY COLLECTION HEADER ===== */}
            <div className="shopify-collection-header">
                <p>Home / Chain</p>
                <h1>Chain</h1>
            </div>

            <div className="container shopify-collection">
                <div className="row">

                    {/* ===== SIDEBAR ===== */}
                    <div className="col-lg-3 col-md-4">
                        <aside className="shopify-sidebar">

                            <div className="sb-block">
                                <h4>Categories</h4>
                                <ul>
                                    <li><label><input type="checkbox" /> 14K</label><span>12</span></li>
                                    <li><label><input type="checkbox" /> 18K</label><span>9</span></li>
                                    <li><label><input type="checkbox" /> Bangles</label><span>7</span></li>
                                    <li><label><input type="checkbox" /> Bracelets</label><span>5</span></li>
                                </ul>
                            </div>

                            <div className="sb-block">
                                <h4>Availability</h4>
                                <label><input type="checkbox" /> In stock (12)</label>
                                <label><input type="checkbox" /> Out of stock (1)</label>
                            </div>

                            <div className="sb-block">
                                <h4>Price</h4>
                                <input type="range" min="0" max="25000" />
                                <div className="price-box">
                                    <input value="₹0" disabled />
                                    <input value="₹25000" disabled />
                                </div>
                            </div>

                            <div className="sb-block">
                                <h4>Color</h4>
                                <div className="color-dots">
                                    <span className="gold"></span>
                                    <span className="silver"></span>
                                    <span className="yellow"></span>
                                </div>
                            </div>

                        </aside>
                    </div>

                    {/* ===== PRODUCTS ===== */}
                    <div className="col-lg-9 col-md-8">

                        <div className="shopify-toolbar">
                            <span>{products.length} products</span>
                            <select>
                                <option>Best selling</option>
                                <option>Price, low to high</option>
                                <option>Price, high to low</option>
                            </select>
                        </div>

                        {/* 🔴 YOUR HOME.JSX PRODUCT CARDS (UNCHANGED) 🔴 */}
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
                </div>
            </div>
        </>
    );
};

export default Collection;
