import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
} from "reactstrap";

class ItemEditModal extends Component {
  state = {
    shoeEditModal: this.props.showEditModal,
  };

  saveChanges = () => {
    // Do some saving
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    if (this.props.item !== null) {
      return (
        <Modal isOpen={this.props.showEditModal} toggle={this.toggle}>
          <Form>
            <ModalHeader>
              Edit Item
            </ModalHeader>
            <ModalBody>
              {this.props.item.name}<br/>
              Modal Body
            </ModalBody>
            <ModalFooter>
              <Button className={"btn btn-primary"} onClick={this.props.toggleShowEditModal}>
                Save
              </Button>
              <Button className={"btn btn-danger"} onClick={this.props.toggleShowEditModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default ItemEditModal;
