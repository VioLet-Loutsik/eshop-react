import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MensClothing from '../products/MensClothing';
import Jewelery from '../products/Jewelery';
import WomansClothing from '../products/WomansClothing';
import Electronic from '../products/Electronic';

// import Products from "../pages/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mensclothing/:category" element={<MensClothing />} />
          <Route path="/womansclothing/:category" element={<WomansClothing/>} />
          <Route path="/jewelery/:category" element={<Jewelery />} />
          <Route path="/electronic/:category" element={<Electronic />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
