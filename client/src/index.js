import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import InventoryView from "./components/InventoryView";
import SaleView from "./components/SaleView";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
