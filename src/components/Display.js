/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Display extends Component {
  render() {
    const { result } = this.props;
    return (
      <div className="display">
        {result}
      </div>
    );
  }
}

Display.propTypes = { result: PropTypes.string };

Display.defaultProps = { result: '0' };

export default Display;
