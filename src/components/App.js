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
    }
    if (buttonName === '=' || buttonName === 'AC') {
      if (buttonName === 'AC') {
        this.setState({ operation: buttonName });
      }
      this.setState(prevState => {
        const result = calculate(prevState, buttonName);
        return {
          total: result.total,
          next: '',
          operation: null,
          result: result.total,
        }
      })
    }
  }

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <Display result={result === null ? 0 : result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
