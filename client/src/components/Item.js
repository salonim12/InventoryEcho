import React, { Component } from "react";
import { ListGroupItem, Button } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import { moneyFormat } from "../helpers/helpers";
import { deleteItem } from "../actions/itemActions";
import connect from "react-redux/es/connect/connect";

class Item extends Component {
  state = this.props.item;

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  toggleShowEditModal = (item) => {
    this.props.toggleShowEditModal(item);
  };

  render() {
    return (
      <CSSTransition key={this.state._id} timeout={500} classNames="fade">
        <ListGroupItem onClick={this.props.toggleShowEditModal.bind(this, this.state)}>
          <Button className={"btn btn-danger float-right"}
                  onClick={this.onDeleteClick.bind(this, this.state._id)}
          >
            &times;
          </Button>
          {this.state.name}<br/>
          {this.state.quantity}<br/>
          {moneyFormat(this.state.sellPrice)}
        </ListGroupItem>
      </CSSTransition>
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(
  mapStateToProps,
  { deleteItem }
)(Item);
