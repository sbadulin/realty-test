import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import List from '../List/List';
import Card from '../Card/Card';
import Header from '../Header/Header';

const ListPage = () =>
  <>
    <Header title="Properties"/>
    <List />
  </>

const CardPage = ({ match }) =>
  <>
    <Header title="Property" showBackButton />
    <Card {...match} />
  </>

const AppRouter = () => 
  <Router>
    <Route exact path="/" component={ListPage} />
    <Route path="/property/:sfid" component={CardPage} />
  </Router>

export default AppRouter
