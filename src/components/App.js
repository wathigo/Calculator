/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React, { Component } from 'react';
import './App.css';

import ButtonPanel from './ButtonPanel';
import Display from './Display';

import calculate from '../logic/calculate.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: '',
      next: '',
      operation: null,
      result: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    const buttonName = evt.target.textContent;
    const {
      total, next, operation, result,
    } = this.state;
    if (operation === null && !isNaN(buttonName)) {
      this.setState({ total: `${total + buttonName}` });
    } else if (total !== null && operation === null) {
      this.setState({ operation: buttonName });
    } else if (!isNaN(buttonName)) {
      this.setState({ next: `${next + buttonName}` });
      console.log(this.state);
    }
    if (buttonName === '=' || buttonName === 'AC') {
      if (buttonName === 'AC') {
        this.setState({ operation: buttonName });
      }
      const result = calculate(this.state, buttonName);
      console.log(result.total);
      this.setState({
        total: result.total,
        next: '',
        operation: null,
      });
      this.setState({ result: result.total });
    } else if (buttonName === '') {

    }
  }

  render() {
    return (
      <div className="App">
        <Display result={this.state.result === null ? '0' : this.state.result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
