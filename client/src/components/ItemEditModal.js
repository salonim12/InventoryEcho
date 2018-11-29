import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Label
} from "reactstrap";
import { moneyFormat } from "./../helpers/helpers";

class ItemEditModal extends Component {
  state = {
    shoeEditModal: this.props.showEditModal,
    editActive: false,
    item: {
      name: "",
      quantity: 0,
      sellPrice: 0,
      purchasePrice: 0,
      barcode: "",
      _id: ""
    }
  };

  componentDidMount = () => {
    this.setState({
      item: {
        //_id: this.props.item._id
      }
    });
    console.log(this.props.item);
  };

  handleEdit = () => {
    const itemValues = [
      { name: "Name", value: this.props.item.name, id: "name" },
      {
        name: "Purchase Price",
        value: this.props.item.purchasePrice,
        id: "purchase-price"
      },
      {
        name: "Sell Price",
        value: this.props.item.sellPrice,
        id: "sell-price"
      },
      { name: "Barcode", value: this.props.item.barcode, id: "barcode" }
    ];
    if (this.state.editActive) {
      return (
        <React.Fragment>
          <h3>{this.props.item.name}</h3>
          <Label>Quantity:</Label>
          <Input
            defaultValue={this.props.item.quantity}
            id={"quantity"}
            onChange={this.handleChange}
            placeHolder="Qunantity:"
          />
          <Label>Purchase Price:</Label>
          <Input
            defaultValue={this.props.item.purchasePrice}
            id={"quantity"}
            placeHolder="Purchase Price:"
          />
          <Label>Sell Price:</Label>
          <Input
            defaultValue={this.props.item.sellPrice}
            id={"quantity"}
            placeholder="Sell Price:"
          />
          <Label>Barcode:</Label>
          <Input
            defaultValue={this.props.item.barcode}
            id={"quantity"}
            placeholder="Barcode:"
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h3>{this.props.item.name}</h3>
          <p>Qunantity: {this.props.item.quantity}</p>
          <p>Purchase Price: {moneyFormat(this.props.item.purchasePrice)}</p>
          <p>Sell Price: {moneyFormat(this.props.item.sellPrice)}</p>
          <p>Barcode: {this.props.item.barcode}</p>
        </React.Fragment>
      );
    }
  };

  toggleEdit = e => {
    if (this.state.editActive) {
    }
    this.setState({
      editActive: !this.state.editActive,
      item: this.props.item
    });
  };

  onChange = e => {
    this.setState({
      item: {
        [e.target.id]: e.target.value
      }
    });
    console.log(this.state.item);
  };

  onSubmit = e => {};

  render() {
    if (this.props.item !== null) {
      return (
        <Modal isOpen={this.props.showEditModal} toggle={this.toggle}>
          <Form>
            <ModalHeader>
              <h2>Edit Item</h2>
              <Button onClick={this.toggleEdit}>Edit</Button>
            </ModalHeader>
            <ModalBody>
              {this.handleEdit()}
              {/* <h3>{this.props.item.name}</h3>
              <p>Qunantity: {this.props.item.quantity}</p>
              <p>Purchase Price: {moneyFormat(this.props.item.purchasePrice)}</p>
              <p>Sell Price: {moneyFormat(this.props.item.sellPrice)}</p>
              <p>Barcode: {this.props.item.barcode}</p> */}
            </ModalBody>
            <ModalFooter>
              <Button
                className={"btn btn-primary"}
                onClick={this.props.toggleShowEditModal}
              >
                Save
              </Button>
              <Button
                className={"btn btn-danger"}
                onClick={this.props.toggleShowEditModal}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      );
    } else {
      return <div />;
    }
  }
}

export default ItemEditModal;
