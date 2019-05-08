import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Header = ({ title, showBackButton }) => 
  <div>
    {showBackButton && <Link to='/'>Back</Link>}
    <span>{title}</span>
  </div>

Header.propTypes = {
  title: PropTypes.string,
  showBackButton: PropTypes.bool,
}

export default Header;
