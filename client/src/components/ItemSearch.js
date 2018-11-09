import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { Row, Container } from "reactstrap"
import Item from "./Item";
import store from "./../store";

class ItemSearch extends Component {
  render() {
    console.log(this.props);
    const { itemQuery } = this.props.item;

    if (itemQuery != null) {
      const itemsList = itemQuery.map(item => {
        return (
          <div className="col-md-3 pb-3" key={item._id}>
            <Item
              key={item._id}
              name={item.name}
              quantity={item.quantity}
            />
          </div>
        );
      });

      return (
        <Provider store={store}>
          <Container>
            <h1 className="category-title text-center font-weight-bold">
              Here's what we found...
          </h1>
            <hr className="shadow" />
            <Row>{itemsList}</Row>
          </Container>
        </Provider>
      );
    }
    //Return empty div if nothing found
    return <div><h1>No Items Found.</h1></div>;
  }
}
const mapStateToProps = (state) => ({
  item: state.item
});
// if this.props.query is empty we will not show the ItemSearch page
export default connect(
  mapStateToProps,
  {}
)(ItemSearch);