import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { ItemStyled, ItemThumbStyled, ItemTextWrapperStyled, ItemTextHeadingStyled, ItemTextInfoStyled } from './styled/ItemStyled'


const Item = ({ sfid, name, thumbnail__c, title__c, city__c, state__c, price__c }) => (
  <Link to={`property/${sfid}`}>
    <ItemStyled>
        <ItemThumbStyled src={thumbnail__c} alt={name}/>
        <ItemTextWrapperStyled>
          <ItemTextHeadingStyled>{title__c}</ItemTextHeadingStyled>
          <ItemTextInfoStyled>{city__c}, {state__c} — ${price__c}</ItemTextInfoStyled>
        </ItemTextWrapperStyled>
    </ItemStyled>
  </Link>
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
