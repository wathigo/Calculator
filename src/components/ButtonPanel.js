/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';


class ButtonPanel extends Component {
  render() {
    const { clickHandler } = this.props;
    return (
      <div className="button-panel">
        <div className="group1">
          <Button handleClick={clickHandler} content="AC" color="cl-light-grey" />
          <Button handleClick={clickHandler} content="+/-" color="cl-light-grey" />
          <Button handleClick={clickHandler} content="X" color="cl-light-grey" />
          <Button handleClick={clickHandler} content="÷" />
        </div>
        <div className="group2">
          <Button handleClick={clickHandler} content="7" color="cl-light-grey" />
          <Button handleClick={clickHandler} content="8" color="cl-light-grey" />
          <Button handleClick={clickHandler} content="9" color="cl-light-grey" />
          <Button handleClick={clickHandler} content="X" />
        </div>
        <div className="group3">
          <Button handleClick={clickHandler} content="4" color="cl-light-grey" />
          <Button handleClick={clickHandler} content="5" color="cl-light-grey" />
          <Button handleClick={clickHandler} content="6" color="cl-light-grey" />
          <Button handleClick={clickHandler} content="-" />
        </div>
        <div className="group4">
          <Button handleClick={clickHandler} content="1" color="cl-light-grey" />
          <Button handleClick={clickHandler} content="2" color="cl-light-grey" />
          <Button handleClick={clickHandler} content="3" color="cl-light-grey" />
          <Button handleClick={clickHandler} content="+" />
        </div>
        <div className="group5">
          <Button handleClick={clickHandler} content="0" wide color="cl-light-grey" />
          <Button handleClick={clickHandler} content="." color="cl-light-grey" />
          <Button handleClick={clickHandler} content="=" />
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
