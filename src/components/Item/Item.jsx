import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Item = ({ sfid, name, thumbnail__c, title__c, city__c, state__c, price__c }) => (
  <div style={{margin: '10px', cursor: 'pointer'}}>
    <Link to={`property/${sfid}`}>
    <div style={{ display: 'flex', flexDirection: 'row',     alignItems: 'center'}}>
      <img style={{ maxWidth: '5.6rem', maxHeight: '5.6rem', marginRight: '10px'}} src={thumbnail__c} alt={name}/>
      <div>
        <div>{title__c}</div>
        <div>{city__c}, {state__c} — ${price__c}</div>
      </div>
    </div>
    </Link>
  </div>
);

Item.propTypes = {
  name: PropTypes.string,
  sfid: PropTypes.string,
  thumbnail__c: PropTypes.string,
  title__c: PropTypes.string,
  city__c: PropTypes.string,
  state__c: PropTypes.string,
  price__c: PropTypes.number,
};

export default Item;
