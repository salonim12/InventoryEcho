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
import { validateNumericalEntry, validateWholeNumericalEntry } from "./../helpers/helpers"

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

  handleKeyDown = (e) => {
    //Prevent the form being submitted by hitting the enter button
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }

  onChange = (e) => {
    //If the enter key wasn't hit, then we simply save the data of the textbox 
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = this.state;
    if (this.state.name !== "") {
      if (validateWholeNumericalEntry(this.state.barcode) &&
        validateWholeNumericalEntry(this.state.quantity) &&
        validateNumericalEntry(this.state.sellPrice) &&
        validateNumericalEntry(this.state.purchasePrice)) {
        //Use ItemActions.js to add item
        this.props.addItem(newItem);

        //close the modal
        this.toggle();
      } else {
        alert("Could not add item: Invalid Entries in Fields.")
      }
    } else {
      alert("Please specify a name for your product.")
    }
  };

  render() {
    const itemFields = [
      { name: "Name", id: "name" },
      { name: "Quantity", id: "quantity" },
      { name: "Purchase Price", id: "purchasePrice" },
      { name: "Sell Price", id: "sellPrice" },
      { name: "Barcode", id: "barcode" },
    ]
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
                {itemFields.map((item) =>
                  <React.Fragment
                    key={item.id}>
                    <Label
                      for={item.id}>{item.name}</Label>
                    {item.id.includes("Price") || item.id.includes("quantity") ?
                      <Input
                        type="number"
                        min="0"
                        name={item.id}
                        id={item.id}
                        onKeyDown={this.handleKeyDown}
                        placeholder={`Add ${item.name} Here...`}
                        onChange={this.onChange}
                      />
                      : <Input
                        type="text"
                        name={item.id}
                        id={item.id}
                        onKeyDown={this.handleKeyDown}
                        placeholder={`Add ${item.name} Here...`}
                        onChange={this.onChange}
                      />
                    }
                  </React.Fragment>
                )}
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
