import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Nav from "./nav";
import Grid from "./grid";
import Seller from "./seller";
import UserGrid from "./user";
import ClassForm from "./class";
import ObjectForm from "./object";
import "./grid.css";

//react bootstrap components
// import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Nav />
    {/* <Grid /> */}
    {/* <Seller /> */}
    {/* <UserGrid /> */}
    {/* <ClassForm /> */}
    <ObjectForm />
  </React.StrictMode>
);

// export default Grid;
