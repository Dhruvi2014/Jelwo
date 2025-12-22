import React, { useState } from "react";
import Home from "./Home";
import Wishlist from "./Wishlist";

function App() {
  const [page, setPage] = useState("home");
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  return (
    <>
      {page === "home" && (
        <Home
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
          openWishlist={() => setPage("wishlist")}
        />
      )}

      {page === "wishlist" && (
        <Wishlist
          wishlist={wishlist}
          goHome={() => setPage("home")}
        />
      )}
    </>
  );
}

export default App;

