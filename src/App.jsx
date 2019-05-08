import React, { useState, useEffect } from 'react'
import AppRouter from './components/AppRouter/AppRouter';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import-normalize;

  body {
    margin: 0;
    font-family: sans-serif;
  }

  a {
    text-decoration: none;
  }
`
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
      <GlobalStyle />
      <AppRouter />
    </DataContext.Provider>
  )};

export default App
