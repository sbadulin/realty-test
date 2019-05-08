import React from 'react'
import PropTypes from 'prop-types'

import { DataContext } from '../../App';

const CardContent = ({ name, picture__c}) =>
  <div>
    <div>{name}</div>
    <div><img src={picture__c} width="100%" alt={name}/></div>
  </div>

const Card = ({ params }) => 
  <DataContext.Consumer>
    {value => {
      const filteredItems = value.data.filter(item => item.sfid === params.sfid);
      let item = {};
      if (Array.isArray(filteredItems) && filteredItems.length > 0) item = filteredItems[0];
      return <CardContent {...item}/>
    }}
  </DataContext.Consumer>


Card.propTypes = {
  params: PropTypes.object
}

export default Card
