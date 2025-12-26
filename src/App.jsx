import React, { useState } from "react";
import Home from "./Home";
import Wishlist from "./Wishlist";
import News from "./News";
import Blog from "./Blog";


function App() {
  const [page, setPage] = useState("home");
  const [wishlist, setWishlist] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);


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
          openBlog={() => setPage("blog")}
          openNews={(newsData) => {
            setSelectedNews(newsData);
            setPage("news");
          }} />
      )}

      {page === "wishlist" && (
        <Wishlist
          wishlist={wishlist}
          goHome={() => setPage("home")}
        />
      )}

      
      {page === "news" && (
        <News
          news={selectedNews}             
          goHome={() => setPage("home")}
        />
      )}

      {page === "blog" && <Blog goHome={() => setPage("home")} />}


    </>
  );
}

export default App;

