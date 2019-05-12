import React, { useContext } from "react";

import { DataContext } from "../../App";
import Item from "../Item/Item";
import { ReactComponent as Loader } from "../../bars.svg";
import styles from "./style/List.module.scss";

const List = () => {
  const { propertyData, isPropertyLoading } = useContext(DataContext);
  return (
    <div className={styles.list}>
      {isPropertyLoading ? (
        <Loader fill="black" />
      ) : (
        propertyData.map(item => <Item key={item.sfid} {...item} />)
      )}
    </div>
  );
};

export default List;
