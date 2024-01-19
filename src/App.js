import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import ProductDetail from "./Product-details";
import { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import ViewAll from "./ViewAll";
import ContactUs from "./ContactUs";

const App = () => {
    
  return (
      <Router>
      <div className="min-h-screen  dark:text-gray-100  dark:bg-slate-900 duration-100">
        {<Header/>}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/products" element={<ViewAll/>} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
        
      </div>
      
    </Router>
    
    
  );
};

export default App;