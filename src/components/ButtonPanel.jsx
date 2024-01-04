/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';


class ButtonPanel extends Component {
  render() {
    const { clickHandler } = this.props;
    const group1 = ['AC', '+/-', 'X', '/'].map((val) => <Button key={val} handleClick={clickHandler} content={val} color="cl-light-grey" />);
    const group2 = ['7', '8', '9', 'X'].map((val) => <Button key={val} handleClick={clickHandler} content={val} color="cl-light-grey" />);
    const group3 = ['4', '5', '6', '-'].map((val) => <Button key={val} handleClick={clickHandler} content={val} color="cl-light-grey" />);
    const group4 = ['1', '2', '3', '+'].map((val) => <Button key={val} handleClick={clickHandler} content={val} color="cl-light-grey" />);
    const group5 = ['0', '.', '='].map((val, index) => {
      if (index !== 2) {
        if (val === '0') {
          return <Button key={val} handleClick={clickHandler} content={val} color="cl-light-grey w-50" />;
        }
        return <Button key={val} handleClick={clickHandler} content={val} color="cl-light-grey" />;
      }
      return <Button key={val} handleClick={clickHandler} content={val} />;
    });
    return (
      <div className="button-panel">
        <div className="group1">
          {
            group1
          }
        </div>
        <div className="group2">
          {
          group2
        }
        </div>
        <div className="group3">
          {
          group3
        }
        </div>
        <div className="group4">
          {
          group4
        }
        </div>
        <div className="group5">
          {
          group5
        }
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
