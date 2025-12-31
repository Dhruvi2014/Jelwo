import React, { useState } from "react";
import Home from "./Home";
import Wishlist from "./Wishlist";
import News from "./News";
import Blog from "./Blog";
import AboutUs from "./AboutUs";
import AboutUs2 from "./AboutUs2";
import ContactUs from "./Contactus";
import ContactUs2 from "./Contactus2";
import Faqs from "./Faqs";
import Privacy from "./Privacy";
import Refund from "./Refund";
import Location from "./Location";
import Shipping from "./Shipping";



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
          openAbout={() => setPage("about")}
          openAbout2={() => setPage("about2")}
          openContact={() => setPage("contact")}
          openContact2={() => setPage("contact2")}
          openFaqs={() => setPage("faqs")}
          openPrivacy={() => setPage("privacy")}
          openRefund={() => setPage("refund")}
          openLocation={() => setPage("location")}
          openShipping={() => setPage("shipping")}
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
      {page === "about" && (
        <AboutUs onBack={() => setPage("home")} />
      )}

      {page === "about2" && <AboutUs2 onBack={() => setPage("home")} />} 
      {page === "contact" && <ContactUs onBack={() => setPage("home")} />} 
      {page === "contact2" && <ContactUs2 onBack={() => setPage("home")} />} 
      {page === "faqs" && <Faqs onBack={() => setPage("home")} />} 
      {page === "privacy" && <Privacy onBack={() => setPage("home")} />}
      {page === "refund" && <Refund onBack={() => setPage("home")} />}
      {page === "location" && <Location onBack={() => setPage("home")} />}
      {page === "shipping" && <Shipping onBack={() => setPage("home")} />}
      
      
    </>
  );
}

export default App;

