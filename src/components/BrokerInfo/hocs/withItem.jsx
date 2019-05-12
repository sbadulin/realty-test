import React, { useContext } from "react";
import { DataContext } from "../../../App";

export const withItem = Component => ({ broker__c, ...props }) => {
  const { brokerData } = useContext(DataContext);
  const item = brokerData.find(item => item.sfid === broker__c);
  return <Component {...item} {...props} />;
};
