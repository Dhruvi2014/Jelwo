import React, { useState } from "react";
import "./Style.css";

import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import discover from "./assets/discover.png";

const Location = ({ onBack }) => {

    return (
        <>
            <div className="cart-hero">
                <p className="breadcrumb">
                    <span
                        className="breadcrumb-link"
                        onClick={onBack}
                        style={{ cursor: "pointer" }}
                    >
                        HOME
                    </span>{" "}
                    – LOCATION
                </p>

                <h1>LOCATION</h1>
            </div>
        </>
    )
}

export default Location;
