import React, { useContext } from "react";

import { DataContext } from "../../App";
import Item from "../Item/Item";
import { ReactComponent as Loader } from "../../bars.svg";
import styles from "./style/List.module.scss";

const List = () => {
  const { data, isLoading } = useContext(DataContext);
  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader fill="black" />
      ) : (
        data.map(item => <Item key={item.sfid} {...item} />)
      )}
    </div>
  );
};

export default List;
