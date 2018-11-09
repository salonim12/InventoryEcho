import React, { Component } from "react";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout />
      </Router>
    );
  }
}

export default App;
