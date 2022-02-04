import React, { Component } from "react";
import { Container,Row } from "react-bootstrap";
import { endPoint } from "../helpers/url";
import CardComponets from "./CardComponets";

class ListComponent extends Component {
  constructor() {
    super();
    this.state = {
      personajes: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    const resp = await fetch(endPoint);
    const {results} = await resp.json();
    this.setState({personajes:results});
    console.log(this.state.personajes);
  }

  render() {
    return (
      <Container>
        <hr />
        <Row lg={4}>
            {
                this.state.personajes.map(per => (
                    <CardComponets
                        key={per.id}
                        movies={per}
                    />
                ))
            }
        </Row>
      </Container>
    );
  }
}

export default ListComponent;
