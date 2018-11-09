import React, { Component } from "react";
import Root from "./components/Root";
import InventoryView from "./components/InventoryView";
import SaleView from "./components/SaleView";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path={"/"} component={Root}></Route>
          <Route path={"/inventory"} component={InventoryView}></Route>
          <Route path={"/sale"} component={SaleView}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
