import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import easeInClasses from "./style/transitions/easeIn.module.scss";
import easeOutClasses from "./style/transitions/easeOut.module.scss";
import styles from "./style/Container.module.scss";

import RealtyList from "../RealtyList/RealtyList";
import Card from "../Card/Card";

const Container = ({ location }) => (
  <div className={styles.container}>
    <TransitionGroup className={styles.transitionGroup}>
      <CSSTransition
        key={location.key}
        timeout={200}
        className={location.pathname === "/" ? easeInClasses : easeOutClasses}
        unmountOnExit
        mountOnEnter
      >
        <Switch location={location}>
          <Route exact path="/" component={RealtyList} />
          <Route path="/property/:sfid" component={Card} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
);

export default withRouter(Container);
