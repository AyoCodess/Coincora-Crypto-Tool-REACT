import { createContext, React, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext({});

export function DataProvider({ children }) {
  // = GLOBAL API CALL - CRYPTO MARKET DATA

  const [complete, setComplete] = useState(true);
  const [coinName, setCoinName] = useState('Matic');
  const [data, setData] = useState(null);

  // - api url links to get top 1000 crypto coins.

  const page1 =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false';

  const page2 =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2&sparkline=false';

  const page3 =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=3&sparkline=false';

  const page4 =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=4&sparkline=false';

  // - api call
  const fetchData = async () => {
    try {
      let response1 = await axios(page1);
      let response2 = await axios(page3);
      let response3 = await axios(page3);
      let response4 = await axios(page4);

      let dataSet1 = response1.data;
      let dataSet2 = response2.data;
      let dataSet3 = response3.data;
      let dataSet4 = response4.data;

      // - all data is now in one big array

      let fullDataSet = dataSet1.concat(dataSet2, dataSet3, dataSet4);

      setData(fullDataSet);
    } catch (err) {
      console.log(err);
    }
  };

  //- calling and updating the api based on user input changes

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{ complete, setComplete, coinName, setCoinName, data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
