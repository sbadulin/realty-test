import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./style/AppRouter.module.scss";

import Header from "../Header/Header";
import Container from "../Container/Container";

const AppRouter = () => (
  <Router>
    <Header />
    <Container />
  </Router>
);

export default AppRouter;
