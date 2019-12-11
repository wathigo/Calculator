/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

import Button from './Button';


class ButtonPanel extends Component {
  render() {
    return (
      <div className="button-panel">
        <div className="group1">
          <Button content="AC" color="cl-light-grey" />
          <Button content="+/-" color="cl-light-grey" />
          <Button content="X" color="cl-light-grey" />
          <Button content="÷" />
        </div>
        <div className="group2">
          <Button content="7" color="cl-light-grey" />
          <Button content="8" color="cl-light-grey" />
          <Button content="9" color="cl-light-grey" />
          <Button content="X" />
        </div>
        <div className="group3">
          <Button content="4" color="cl-light-grey" />
          <Button content="5" color="cl-light-grey" />
          <Button content="6" color="cl-light-grey" />
          <Button content="-" />
        </div>
        <div className="group4">
          <Button content="1" color="cl-light-grey" />
          <Button content="2" color="cl-light-grey" />
          <Button content="3" color="cl-light-grey" />
          <Button content="+" />
        </div>
        <div className="group5">
          <Button content="0" wide="w-50" color="cl-light-grey" />
          <Button content="." color="cl-light-grey" />
          <Button content="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
