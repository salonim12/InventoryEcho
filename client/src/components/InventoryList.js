import React, { Component } from "react";
import { Container, ListGroup } from "reactstrap";
import { TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import PropTypes from "prop-types";

import Item from "./Item";
import ItemEditModal from "./ItemEditModal";

class InventoryList extends Component {
  state = {
    showEditModal: false,
    itemToEdit: null
  };

  componentDidMount() {
    this.props.getItems();
  };

  toggleShowEditModal = (itemToEdit) => {
    this.setState({
      showEditModal: !this.state.showEditModal,
      itemToEdit: itemToEdit,
    })
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ItemEditModal showEditModal={this.state.showEditModal} item={this.state.itemToEdit} />
        <ListGroup>
          <TransitionGroup>
            {items.map((item) => (
              <Item key={item.name} item={item} toggleShowEditModal={this.toggleShowEditModal} />
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

InventoryList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems }
)(InventoryList);
