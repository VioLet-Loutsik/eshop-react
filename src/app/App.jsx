import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SingleProduct from "../products/SingleProduct";
import Basket from "../pages/Basket";
import DescriptionProduct from "../pages/DescriptionProduct";
import { RegistrationForm } from "../pages/RegistrationForm";
import { Login } from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/forgot_password' element={<ForgotPassword />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/product/:category" element={<SingleProduct />} />
          <Route path="/product/:category/:id" element={<DescriptionProduct />} />          
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
