/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Button extends Component {
  render() {
    const { content } = this.props;
    return (
      <button type="button" className='calc-btn'>
        {content}
      </button>
    );
  }
}

Button.propTypes = { content: PropTypes.string.isRequired };

export default Button;
