import React, { useContext } from "react";

import { DataContext } from "../../../App";

export const withItem = Component => ({ match, ...props }) => {
  const { data } = useContext(DataContext);
  const filteredItems = data.filter(item => item.sfid === match.params.sfid);
  let item = {};
  if (Array.isArray(filteredItems) && filteredItems.length > 0)
    item = filteredItems[0];
  return <Component {...{ item }} {...props} />;
};
