import React, { Component } from "react";
import {Col, Card} from 'react-bootstrap'

export default class CardComponets extends Component {
  render() {
    const {image, superhero,publisher}= this.props.movies;

    return (
      <div>
        <Col>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{superhero}</Card.Title>
              <Card.Text>{publisher}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}
