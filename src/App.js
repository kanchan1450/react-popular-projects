import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import ProductDetail from "./Product-details";
import { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import ViewAll from "./ViewAll";

const App = () => {

  const[dark, setdark] = useState("light");

    useEffect(() => {
        themeMode();

    }, [dark]);

    const themeMode = () =>
    {
        if(dark)
        {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
                
    };


    const options = [
        {
            icon: "sunny",
            text: "light",
        },
        {
            icon: "moon",
            text: "dark",
        },
        {
            icon:"desktop-outline",
            text: "system",
        },
    ];
    
  return (
      <Router>
      <div className="min-h-screen  dark:text-gray-100  dark:bg-slate-900 duration-100">
        {<Header/>}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/products" element={<ViewAll/>} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        
      </div>
      
    </Router>
    
    
  );
};

export default App;