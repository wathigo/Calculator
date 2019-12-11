/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

import Button from './Button';


class ButtonPanel extends Component {
  render() {
    return (
      <div>
        <div className="group1">
          <Button content="AC" />
          <Button content="+/-" />
          <Button content="X" />
          <Button content="/" />
        </div>
        <div className="group2">
          <Button content="7" />
          <Button content="8" />
          <Button content="9" />
          <Button content="X" />
        </div>
        <div className="group3">
          <Button content="4" />
          <Button content="5" />
          <Button content="6" />
          <Button content="-" />
        </div>
        <div className="group4">
          <Button content="1" />
          <Button content="2" />
          <Button content="3" />
          <Button content="+" />
        </div>
        <div className="group5">
          <Button content="0" />
          <Button content="." />
          <Button content="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
