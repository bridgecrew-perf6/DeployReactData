import React, { Component } from 'react';
import ListComponent from '../components/ListComponent';
import NavbarComponent from '../components/NavbarComponent';

export default class ContainerComponent extends Component {
  render() {
    return <div>
        <NavbarComponent/>
        <ListComponent/>
    </div>;
  }
}
