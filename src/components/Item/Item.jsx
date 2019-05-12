import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./style/Item.module.scss";

const Item = ({
  sfid,
  name,
  thumbnail__c,
  title__c,
  city__c,
  state__c,
  price__c
}) => (
  <Link to={`property/${sfid}`}>
    <div className={styles.item}>
      <img className={styles.itemThumbnail} src={thumbnail__c} alt={name} />
      <div className={styles.itemTextWrapper}>
        <div className={styles.itemTextHeading}>{title__c}</div>
        <div className={styles.itemTextInfo}>
          {city__c}, {state__c} — ${price__c}
        </div>
      </div>
    </div>
  </Link>
);

Item.propTypes = {
  name: PropTypes.string,
  sfid: PropTypes.string,
  thumbnail__c: PropTypes.string,
  title__c: PropTypes.string,
  city__c: PropTypes.string,
  state__c: PropTypes.string,
  price__c: PropTypes.number
};

export default Item;
