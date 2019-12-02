import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Button extends Component{
  render(){
    return(
      <button type="button" className='calc-btn'>
        {this.props.content}
      </button>
      );
  }
}

Button.propTypes = { buttonName: PropTypes.string.isRequired };

export default Button;
