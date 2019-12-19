/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React, { Component } from 'react';
import './App.css';

import ButtonPanel from './ButtonPanel';
import Display from './Display';

import calculate from '../logic/calculate.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      total: '',
      next: '',
      operation: null,
      result: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt){
    const buttonName = evt.target.textContent;
    console.log(buttonName, this.state)
    if(this.state.operation === null && !isNaN(buttonName)){
      this.setState({ total: `${this.state.total + buttonName }`});
    }else if(this.state.total !== null && this.state.operation === null){
      this.setState({ operation: buttonName });
    }else if(!isNaN(buttonName)){
      this.setState({ next: `${this.state.next + buttonName }`})
      console.log(this.state)

    }
    if (buttonName === '='){
      let result = calculate(this.state)
      this.setState({ result: result.total})
      this.setState({
        total: '',
        next: '',
        operation: null
      })
    }
  }
  render(){
    return (
      <div className="App">
        <Display result={this.state.result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
