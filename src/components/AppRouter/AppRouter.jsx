import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import List from '../List/List';
import Card from '../Card/Card';
import Header from '../Header/Header';

const AppRouter = () => <Router>
  <Header />
  <Route exact path="/" component={List} />
  <Route path="/property/:sfid" component={Card} />
</Router>

export default AppRouter
