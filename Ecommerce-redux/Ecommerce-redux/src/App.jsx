import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./components/Cart";
// import { useNavigate } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Toaster} from "react-hot-toast"
const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
      </Routes>
      <Toaster/>
    </Router>
  );
};

export default App;
