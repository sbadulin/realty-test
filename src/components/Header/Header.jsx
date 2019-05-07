import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';

const onPropertyCard = location => location.pathname.includes('property')

const Header = ({ location, history }) => {
  return onPropertyCard(location) ? (
    <div>
      <button onClick={history.goBack}>Back</button>
      <span>Property</span>
    </div>
  ) : (
    <span>Properties</span>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(Header);
