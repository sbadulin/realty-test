import React from 'react'

import { DataContext } from '../../App';
import Item from '../Item/Item';
import { ReactComponent as Loader } from '../../bars.svg'

const List = () => 
  <DataContext.Consumer>
    {({ data, isLoading }) => isLoading
      ? <Loader fill="black" /> 
      : data.map(item => <Item key={item.sfid} {...item} />)
    } 
  </DataContext.Consumer>

export default List;
