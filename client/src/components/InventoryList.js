import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

import { moneyFormat } from "../helpers/helpers";

class InventoryList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup>
            {items.map(({ _id, name, quantity, sellPrice }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn float-right"
                    color="danger"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                </Button>
                  {name}<br />
                  Quantity: {quantity}<br />
                  {moneyFormat(sellPrice)}
                </ListGroupItem>
              </CSSTransition>
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
  { getItems, deleteItem }
)(InventoryList);
