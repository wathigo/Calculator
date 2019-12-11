/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Button extends Component {
  render() {
    const { content, wide, color } = this.props;
    return (
      <button type="button" className={ wide + ' calc-btn ' + color}>
        {content}
      </button>
    );
  }
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string
 };

 Button.defaultProps = {
   color: 'cl-orange',
   wide: 'w-25'
 };

export default Button;
