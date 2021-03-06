/* eslint-disable react/prefer-stateless-function */
/* eslint-disable object-curly-newline */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Button extends Component {
  render() {
    const { content, wide, color, handleClick } = this.props;
    return (
      <button onClick={handleClick} type="button" className={`${wide === true ? 'w-50' : ''} calc-btn ${color}`}>
        {content}
      </button>
    );
  }
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'cl-orange',
  wide: false,
};

export default Button;
