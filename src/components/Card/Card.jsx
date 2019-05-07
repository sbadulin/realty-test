import React from 'react'
import PropTypes from 'prop-types'

import { DataContext } from '../../App';

const CardContent = ({item}) =>
  <div>
    <div>{item.name}</div>
    <div><img src={item.picture__c} width="100%" alt={item.name}/></div>
  </div>

const Card = ({ match }) => 
  <DataContext.Consumer>
    {value => {
      const filteredItems = value.data.filter(item => item.sfid === match.params.sfid);
      let item = {};
      if (Array.isArray(filteredItems) && filteredItems.length > 0) item = filteredItems[0];
      return <CardContent item={item}/>
    }}
  </DataContext.Consumer>


Card.propTypes = {
  match: PropTypes.object
}

export default Card
