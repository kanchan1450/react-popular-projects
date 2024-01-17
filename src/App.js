import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import ProductDetail from "./Product-details";
import Header from "./Header";
import Body from "./Body";
import ViewAll from "./ViewAll";

const App = () => {
  return (
    <Router>
      <div className="app">
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