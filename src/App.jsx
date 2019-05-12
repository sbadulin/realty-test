import React, { useState, useEffect } from "react";

import AppRouter from "./components/AppRouter/AppRouter";

export const DataContext = React.createContext({
  brokerData: [],
  propertyData: [],
  isPropertyLoading: false,
  isBrokerLoading: false
});

const App = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [isPropertyLoading, setPropertyIsLoading] = useState(false);

  useEffect(() => {
    const fetchPropertyData = async () => {
      setPropertyIsLoading(true);
      const result = await import("./db/propertyData.json");
      setPropertyData(result.default);
    };
    fetchPropertyData();
    setPropertyIsLoading(false);
  }, []);

  const [brokerData, setBrokerData] = useState([]);
  const [isBrokerLoading, setIsBrokerLoading] = useState(false);

  useEffect(() => {
    const fetchBrokerData = async () => {
      setIsBrokerLoading(true);
      const result = await import("./db/brokerData.json");
      setBrokerData(result.default);
    };
    fetchBrokerData();
    setIsBrokerLoading(false);
  }, []);

  return (
    <DataContext.Provider
      value={{ propertyData, brokerData, isPropertyLoading, isBrokerLoading }}
    >
      <AppRouter />
    </DataContext.Provider>
  );
};

export default App;
