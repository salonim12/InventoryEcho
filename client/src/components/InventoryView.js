import React, { Component } from "react";
import InventoryList from "./InventoryList";
import ItemModal from "./itemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./../store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";

class InventoryView extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Container>
            <ItemModal />
            <InventoryList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default InventoryView;