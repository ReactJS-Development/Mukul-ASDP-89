import React, { Component } from 'react';
import './App.css';
import Stateful from './Stateful.js';
import Stateless from './Stateless.js';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {password: 123456};
  }
  render() {
    return (
      <div>
      <Stateful />
      <Stateless pass={this.state.password} />
      </div>
    );
  }
}

export default App;
