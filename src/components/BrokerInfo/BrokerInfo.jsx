import React from "react";
import PropTypes from "prop-types";

import { withItem } from "./hocs/withItem";
import styles from "./style/BrokerInfo.module.scss";

const BrokerInfo = ({ picture__c = "", name = "", title__c = "" }) => (
  <div className={styles.brokerInfo}>
    <div className={styles.item}>
      <img className={styles.itemThumbnail} src={picture__c} alt={name} />
      <div className={styles.itemTextWrapper}>
        <div className={styles.itemTextHeading}>{name}</div>
        <div className={styles.itemTextInfo}>{title__c}</div>
      </div>
    </div>
  </div>
);

BrokerInfo.propTypes = {
  picture__c: PropTypes.string,
  name: PropTypes.string,
  title__c: PropTypes.string
};

export default withItem(BrokerInfo);
