import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./components/nav";
import Grid from "./components/grid";
import UserGrid from "./components/user";
import ClassForm from "./components/class";
import "./components/grid.css";

//react bootstrap components
// import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// export default Grid;
