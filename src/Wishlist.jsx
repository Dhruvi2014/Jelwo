
import React from "react";
import "./Style.css";
import heroBg from "./assets/jelwobg.jpeg";

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";



function Wishlist({ wishlist, goHome }) {
  return (
    <>
      <section
        className="hero wishlist-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-text center-text">
          <p className="breadcrumb">
            <span
              className="breadcrumb-link"
              onClick={goHome}
              
            >
              HOME
            </span>{" "}
            – WISHLIST
          </p>
          <h1>Wishlist</h1>
        </div>
      </section>

      <div className="container my-5">
        {wishlist.length === 0 ? (
          <p className="text-center">Your wishlist is empty</p>
        ) : (
          <div className="row">
            {wishlist.map((item) => (
              <div className="col-md-3" key={item.id}>
                <div className="product-card">

                  {item.discount && (
                    <span className="discount">{item.discount}%</span>
                  )}

                  <div className="img-wrap">
                    <img src={item.image[0]} alt={item.name} />

                    <div className="hover-overlay">
                      <button>
                        <i className="fa-solid fa-heart text-danger"></i>
                      </button>
                    </div>
                  </div>

                  <div className="product-info">
                    <h6>{item.name}</h6>
                    <p>
                      Rs. {item.price}
                      {item.oldPrice && (
                        <del> Rs. {item.oldPrice}</del>
                      )}
                    </p>
                  </div>

                  <button className="cart-btn">ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
        )}
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
            <img src={discover}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
