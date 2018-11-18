import React, { Component } from "react";
import { ListGroupItem } from "reactstrap";
import { CSSTransition } from "react-transition-group";
// import { connect } from "react-redux";
// import { deleteItem } from "../actions/itemActions";
// import PropTypes from "prop-types";

class Item extends Component {
  componentDidMount() {
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    return (
      <div className="item">
        <CSSTransition key={this.props._id} timeout={500} classNames="fade">
          <ListGroupItem>
            {/* <Button
              className="remove-btn"
              color="danger"
            onClick={this.props.onDeleteClick.bindbind(this, this.props._id)}
            >
              &times;
            </Button> */}
            <h3>{this.props.name}</h3>
            <p>{this.props.quantity}</p>
          </ListGroupItem>
        </CSSTransition>
      </div>
    );
  }
}

export default Item;