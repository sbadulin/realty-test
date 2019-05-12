import React from "react";
import PropTypes from "prop-types";

import BrokerInfo from "../BrokerInfo/BrokerInfo";
import { withItem } from "./hocs/withItem";
import styles from "./style/Card.module.scss";

const Card = ({
  name,
  baths__c,
  beds__c,
  broker__c,
  description__c,
  picture__c,
  price__c
}) => (
  <div className={styles.card}>
    <div className="propertyInfo">
      <div>
        <img src={picture__c} width="100%" alt={name} />
      </div>
      <div>{name}</div>
      <div>{description__c}</div>
      <div>Bedrooms: {beds__c}</div>
      <div>Bathrooms: {baths__c}</div>
      <div>Asking Price: ${price__c}</div>
    </div>
    <BrokerInfo {...{ broker__c }} />
    {/* <div className="social">
      <div className="favorite" />
      <div className="like" />
      <div className="share" />
    </div> */}
  </div>
);

Card.propTypes = {
  item: PropTypes.object
};

export default withItem(Card);
