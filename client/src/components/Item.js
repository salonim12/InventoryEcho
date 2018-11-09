import React, { Component } from "react";
import { ListGroupItem, Button } from "reactstrap";
import { CSSTransition } from "react-transition-group";

class Item extends Component {
  state = this.props;
  componentDidMount() {
  }

  render() {
    return (
      <div className="item">
        <CSSTransition key={this.state._id} timeout={500} classNames="fade">
          <ListGroupItem>
            <Button
              className="remove-btn"
              color="danger"
              onClick={this.state.onDeleteClick.bind(this, this.state._id)}
            >
              &times;
            </Button>
            {this.state.name}
            {this.state.quantity}
          </ListGroupItem>
        </CSSTransition>
      </div>
    );
  }
}

export default Item;