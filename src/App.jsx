import React, { useState, useEffect } from 'react'
import AppRouter from './components/AppRouter/AppRouter';

export const DataContext = React.createContext({ data: [], isloading: false});


const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await import('./db/demoData.json');
      setData(result.default)
    }
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <DataContext.Provider value={{data, isLoading}}>
      <AppRouter />
    </DataContext.Provider>
  )};

export default App
