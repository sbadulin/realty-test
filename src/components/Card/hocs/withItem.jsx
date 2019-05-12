import React, { useContext } from "react";
import { DataContext } from "../../../App";

export const withItem = Component => ({ match, ...props }) => {
  const { propertyData } = useContext(DataContext);
  const item = propertyData.find(item => item.sfid === match.params.sfid);
  return <Component {...item} {...props} />;
};
