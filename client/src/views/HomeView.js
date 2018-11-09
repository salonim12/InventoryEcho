import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";


class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs="12">
              <Jumbotron>
                <h1 className="text-center">
                  Welcome to iEcho
                </h1>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default HomeView;
