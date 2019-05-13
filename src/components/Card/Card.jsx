import React from "react";
import PropTypes from "prop-types";

import BrokerInfo from "../BrokerInfo/BrokerInfo";
import { withItem } from "./hocs/withItem";
import styles from "./style/Card.module.scss";

import { ReactComponent as MoonIcon } from "../../images/moonIcon.svg";
import { ReactComponent as AnalyticsIcon } from "../../images/analyticsIcon.svg";
import { ReactComponent as PricetagIcon } from "../../images/pricetagIcon.svg";

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
    <div className={styles.cardHero}>
      <img src={picture__c} width="100%" alt={name} />
    </div>
    <div className={styles.cardContent}>
      <h2>{name}</h2>
      <p>{description__c}</p>
    </div>
    <div className={styles.cardList}>
      <div className={styles.cardListItem}>
        <div className={styles.cardListIcon}>
          <MoonIcon />
        </div>
        <div className={styles.cardListInfo}>
          <h3>Bedrooms:</h3>
          <p>{beds__c}</p>
        </div>
      </div>
      <div className={styles.cardListItem}>
        <div className={styles.cardListIcon}>
          <AnalyticsIcon />
        </div>
        <div className={styles.cardListInfo}>
          <h3>Bathrooms:</h3>
          <p>{baths__c}</p>
        </div>
      </div>
      <div className={styles.cardListItem}>
        <div className={styles.cardListIcon}>
          <PricetagIcon />
        </div>
        <div className={styles.cardListInfo}>
          <h3>Asking Price:</h3>
          <p>${price__c}</p>
        </div>
      </div>
    </div>
    <BrokerInfo {...{ broker__c }} />
  </div>
);

Card.propTypes = {
  item: PropTypes.object
};

export default withItem(Card);
