import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ArrowIcon } from '../../arrow.svg';
import { HeaderStyled, ButtonStyled } from './styled/HeaderStyled';

const Header = ({ title, showBackButton }) => 
  <HeaderStyled>
    {showBackButton && <ButtonStyled to='/'><ArrowIcon width="1em" height="1em" fill="#fff"/></ButtonStyled>}
    <span>{title}</span>
  </HeaderStyled>

Header.propTypes = {
  title: PropTypes.string,
  showBackButton: PropTypes.bool,
}

export default Header;
