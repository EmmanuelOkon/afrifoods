import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { default as Home } from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Media from "./pages/Media";
import Products from "./pages/Products";
import Sustainability from "./pages/Sustainability";
import Error from "./pages/Error";
import { PrimeReactProvider } from "primereact/api";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/media" element={<Media />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sustainability" element={<Sustainability />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
