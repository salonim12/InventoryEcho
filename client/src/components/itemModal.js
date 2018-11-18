import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
    quantity: 0,
    purchasePrice: 0,
    sellPrice: 0,
    barcode: "",
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = this.state;

    //Use ItemActions.js to add item
    this.props.addItem(newItem);

    //close the modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          className="add-btn"
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Inventory</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Add Name Here..."
                  onChange={this.onChange}
                />
                <Label for="item">Quantity</Label>
                <Input
                  type="text"
                  name="quantity"
                  id="quantity"
                  placeholder="Add Quantity Here..."
                  onChange={this.onChange}
                />
                <Label for="item">Purchase Price</Label>
                <Input
                  type="text"
                  name="purchasePrice"
                  id="purchasePrice"
                  placeholder="Add Purchase Price Here..."
                  // onKeyUp={this.handlePurchaseKeyUp}
                  onChange={this.onChange}
                />
                <Label for="item">Sell Price</Label>
                <Input
                  type="text"
                  name="sellPrice"
                  id="sellPrice"
                  placeholder="Add Sell Price Here..."
                  onChange={this.onChange}
                />
                <Label for="item">Barcode</Label>
                <Input
                  type="text"
                  name="barcode"
                  id="barcode"
                  placeholder="Add Barcode Here..."
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Publish
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
