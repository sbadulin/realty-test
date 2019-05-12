import React from "react";
import PropTypes from "prop-types";

import { withItem } from "./hocs/withItem";
import styles from "./style/Card.module.scss";

const Card = ({ item }) => (
  <div className={styles.card}>
    <div>
      <img src={item.picture__c} width="100%" alt={item.name} />
    </div>
    <div>{item.name}</div>
  </div>
);

Card.propTypes = {
  item: PropTypes.object
};

export default withItem(Card);
