import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/NotFound/Notfound';
import Review from './components/Review/Review';
import Product from './components/Product/Product';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
         <Route path="/" element={<Shop/>}/>
         <Route path="/shop" element={<Shop/>}/>
         <Route path="/review" element={<Review/>}/>
         <Route path="/inventory" element={<Inventory/>}/>
         <Route path="/product" element={<Product/>}/>
         <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  );
};

export default App;
