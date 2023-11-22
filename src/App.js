import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { default as Home } from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Media from "./pages/Media";
import Products from "./pages/Products";
import Sustainability from "./pages/Sustainability";
import Error from "./pages/Error";
import ScrollTop from "./components/ScrollTop";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Router>
        <ScrollTop>
          <Routes>
            <Route path="/*" element={<MainContent />} />
          </Routes>
        </ScrollTop>
      </Router>
    </>
  );
}

const MainContent = () => {
  const location = useLocation();

  const getPageTitle = () => {
    const pathname = location.pathname;

    switch (true) {
      case pathname === "/":
        return "Home";
      case pathname === "/about":
        return "About Us";
      case pathname === "/contact":
        return "Contact Us";
      case pathname === "/faq":
        return "FAQ";
      case pathname === "/media":
        return "Media";
      case pathname === "/products":
        return "Products";
      case pathname.includes("/product/"):
        return "Product Details";
      case pathname === "/sustainability":
        return "Sustainability";
      default:
        return "Error 404";
    }
  };

  return (
    <>
      {/* Content for the specific page routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/media" element={<Media />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productName" element={<ProductDetails />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Title dynamically set based on the route */}
      <title>Afri Foods | {getPageTitle()}</title>
    </>
  );
};

export default App;
