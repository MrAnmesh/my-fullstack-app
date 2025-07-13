import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landing_page/home/HomePage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import AboutPage from "./landing_page/about/AboutPage";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/support" element={<SupportPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
