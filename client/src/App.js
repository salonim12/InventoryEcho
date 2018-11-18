import React, { Component } from "react";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MainLayout />
        </Router>
      </Provider>
    );
  }
}

export default App;
