import React, { Component } from "react";
import { Container,Row } from "react-bootstrap";
import { endPoint } from "../helpers/url";
import CardComponets from "./CardComponets";

class ListComponent extends Component {
  constructor() {
    super();
    this.state = { // state variable global
      personajes: [], // estado inicial 
    };
  }
  componentDidMount() { // como Domcontent loaded
    this.getData();
  }
  async getData() { // peticion get data
    const resp = await fetch(endPoint);
    const {results} = await resp.json();
    this.setState({personajes:results}); // actualizar el estado con la peticion
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
                        key={per.id} // key unique
                        movies={per} // se le asigna para llamarlo en cards object
                    />
                ))
            }
        </Row>
      </Container>
    );
  }
}

export default ListComponent;
