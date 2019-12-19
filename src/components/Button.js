/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Button extends Component {
  render() {
    const { content, wide, color } = this.props;
    return (
      <button onClick={this.props.handleClick} type="button" className={`${wide === true ? 'w-50' : ''} calc-btn ${color}`}>
        {content}
      </button>
    );
  }
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'cl-orange',
  wide: false,
};

export default Button;
