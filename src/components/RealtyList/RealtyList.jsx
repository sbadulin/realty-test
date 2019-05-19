import React, { useContext } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";

import { DataContext } from "../../App";
import Item from "../Item/Item";
import { ReactComponent as Loader } from "../../images/bars.svg";
import styles from "./style/RealtyList.module.scss";

const OneItem = ({ index, style }) => {
  const { propertyData, isPropertyLoading } = useContext(DataContext);
  const item = propertyData[index];
  return <Item key={item && item.sfid} {...item} style={style} />;
};

const RealtyList = () => {
  
  return (
    // <InfiniteLoader
    //   isItemLoaded={() =>true}
    //   itemCount={1000}
    //   loadMoreItems={false}
    // >
    // {({ onItemsRendered, ref }) => {
    //   return (
    //     <div style={{ flex: '1 1 auto' }}>
    //     <AutoSizer>
    //       {({ height, width }) => (
            <List
              height={800}
              itemSize={30}
              itemCount={100}
              width={600}
              // className={styles.list}
              // ref={ref}
              // onItemsR endered={onItemsRendered}
            >
              {OneItem}
            </List>
  //         )}  
  //       </AutoSizer>

  //       </div>

  //     );
  //   }
  //   }
  // </InfiniteLoader>
  );
};

export default RealtyList;
