import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./components/Navbar";
import Grid from "./components/grid";
import UserGrid from "./components/user";
import ClassForm from "./components/class";
import ObjectForm from "./components/object";
import "./components/grid.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sellerpage from "./pages/Sellerpage";
import ProductDetail from "./components/ProductDetail";
import UserInfo from "./components/user";
import Buyerpage from "./pages/Buyerpage";

//react bootstrap components
// import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/seller" element={<Sellerpage/>} />
        <Route exact path="/seller/object" element={<ObjectForm/>} />
        <Route exact path="/seller/class" element={<ClassForm/>} />
        <Route exact path="/buyer" element={<Buyerpage/>} />
        <Route exact path="/buyer/product" element={<ProductDetail/>} />
      </Routes>
  </BrowserRouter>
);

// export default Grid;
