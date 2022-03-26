import { createContext, React, useState, useEffect } from 'react';
import axios from 'axios';
import silverCoin from '../assets/other/silvercoin.png';

const DataContext = createContext({});

export function DataProvider({ children }) {
  // = GLOBAL API CALL - CRYPTO MARKET DATA

  const [complete, setComplete] = useState(true);
  const [coinName, setCoinName] = useState('Select Coin');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [btcMarketcapFormatted, setBtcMarketcapFormatted] = useState(null);
  const [btcMarketcapNumber, setBtcMarketcapNumber] = useState(null);

  // - dropdownlist.js

  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedFromDropdown, setSelectedFromDropdown] = useState(false);
  const [searchedFromDropdown, setSearchedFromDropdown] = useState(null);

  // - crypto currency RBM's

  const [top10CryptoRBM, setTop10CryptoRBM] = useState(null);
  const [top50CryptoRBM, setTop50CryptoRBM] = useState(null);
  const [top100CryptoRBM, setTop100CryptoRBM] = useState(null);
  const [top500CryptoRBM, setTop500CryptoRBM] = useState(null);
  const [top1000CryptoRBM, setTop1000CryptoRBM] = useState(null);
  const [ethRBM, setEthRBM] = useState(null);

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
      let response2 = await axios(page2);
      let response3 = await axios(page3);
      let response4 = await axios(page4);

      let dataSet1 = response1.data;
      let dataSet2 = response2.data;
      let dataSet3 = response3.data;
      let dataSet4 = response4.data;

      // - all data is now in one big array

      let fullDataSet = dataSet1.concat(dataSet2, dataSet3, dataSet4);

      // - adds an empty coin so filter can simulate 'resetting' form fields
      let emptyCoin = [
        {
          circulating_supply: '',
          current_price: '',
          id: '',
          image: silverCoin,
          market_cap: '',
          max_supply: '',
          name: '',
          symbol: '',
        },
      ];

      let newFullSetData = fullDataSet.concat(emptyCoin);

      setData(newFullSetData);

      setBtcMarketcapNumber(newFullSetData[0].market_cap);

      if (btcMarketcapNumber) {
        setBtcMarketcapFormatted(btcMarketcapNumber.toLocaleString());
      }
    } catch (err) {
      console.log(err);
    }
  };

  //- calling and updating the api based on user input changes

  useEffect(() => {
    fetchData();
  }, []);

  // - crypto RBM calculations

  useEffect(() => {
    if (btcMarketcapNumber) {
      const top1000WithEth = data.slice(1, 1000);

      // - removing ETH from top lists
      const data1000MinsETH = top1000WithEth.filter(
        (coin) => coin.name !== 'Ethereum'
      );

      const top10 = data1000MinsETH.slice(1, 11);
      const top50 = data1000MinsETH.slice(1, 51);
      const top100 = data1000MinsETH.slice(1, 101);
      const top500 = data1000MinsETH.slice(1, 501);
      const top1000 = data1000MinsETH.slice(1, 1000);

      data.filter((coin) => {
        if (coin.id === 'ethereum') {
          const eth = coin.market_cap;

          const ethCal = (eth / btcMarketcapNumber) * 100;

          setEthRBM(ethCal.toFixed(2));
        }
        return coin;
      });

      const top10Array = top10.map((d, i) => {
        return d.market_cap;
      });
      const top50Array = top50.map((d, i) => {
        return d.market_cap;
      });
      const top100Array = top100.map((d, i) => {
        return d.market_cap;
      });
      const top500Array = top500.map((d, i) => {
        return d.market_cap;
      });

      const top1000Array = top1000.map((d, i) => {
        return d.market_cap;
      });

      const top10RBMNumber = top10Array.reduce((previous, current) => {
        return previous + current;
      }, 0);

      const top50RBMNumber = top50Array.reduce((previous, current) => {
        return previous + current;
      }, 0);

      const top100RBMNumber = top100Array.reduce((previous, current) => {
        return previous + current;
      }, 0);

      const top500RBMNumber = top500Array.reduce((previous, current) => {
        return previous + current;
      }, 0);

      const top1000RBMNumber = top1000Array.reduce((previous, current) => {
        return previous + current;
      }, 0);

      let top10Avg = top10RBMNumber / 10;
      const real10 = (top10Avg / btcMarketcapNumber) * 100;
      let top50Avg = top50RBMNumber / 50;
      const real50 = (top50Avg / btcMarketcapNumber) * 100;
      let top100Avg = top100RBMNumber / 100;
      const real100 = (top100Avg / btcMarketcapNumber) * 100;
      let top500Avg = top500RBMNumber / 500;
      const real500 = (top500Avg / btcMarketcapNumber) * 100;
      let top1000Avg = top1000RBMNumber / 1000;
      const real1000 = (top1000Avg / btcMarketcapNumber) * 100;

      setTop10CryptoRBM(real10.toFixed(2));
      setTop50CryptoRBM(real50.toFixed(2));
      setTop100CryptoRBM(real100.toFixed(2));
      setTop500CryptoRBM(real500.toFixed(2));
      setTop1000CryptoRBM(real1000.toFixed(2));
    }
  }, [btcMarketcapNumber, data]);

  return (
    <DataContext.Provider
      value={{
        btcMarketcapFormatted,
        btcMarketcapNumber,
        ethRBM,
        complete,
        setComplete,
        coinName,
        setCoinName,
        data,
        setData,
        openDropdown,
        setOpenDropdown,
        selectedFromDropdown,
        setSelectedFromDropdown,
        searchedFromDropdown,
        setSearchedFromDropdown,
        isLoading,
        setIsLoading,
        top10CryptoRBM,
        top50CryptoRBM,
        top100CryptoRBM,
        top500CryptoRBM,
        top1000CryptoRBM,
      }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
