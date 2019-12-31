/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-restricted-globals */

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
      result: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    const buttonName = evt.target.textContent;
    const {
      total, next, operation, result,
    } = this.state;
    this.setState((prevState) => {
      const result = calculate(prevState, buttonName);
      return {
        total: result.total,
        next: result.next,
        operation: result.operation,
        result: buttonName === '=' ? result.total : result.result,
      };
    });
  }

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <Display result={result === '' ? '0' : result.toString()} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
