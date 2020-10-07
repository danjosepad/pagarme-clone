import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';
import { colors } from '../../styles/theme';


function Button({ text, bgColor }) {

  return (
    <StyledButton bgColor={bgColor}>{text}</StyledButton>
  )
}

Button.defaultProps ={
  text: '',
  bgColor: colors.primary,
}

Button.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string
}

export default Button;