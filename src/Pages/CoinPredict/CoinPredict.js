import { React, useContext, useState, useEffect } from 'react';

import StandardButtonReactRouter from '../../components/Buttons/StandardButtonReactRouter';

import DataContext from '../../Context/context';

import Analysis from '../../components/CoinPredictForm/Analysis';
import QuickPredictArea from '../../components/CoinPredictForm/QuickPredictArea';
import YourPrediction from '../../components/CoinPredictForm/YourPrediction';
import YourResults from '../../components/CoinPredictForm/YourResults';
import YourAssessment from '../../components/CoinPredictForm/YourAssessment';
import CoinInformation from '../../components/CoinPredictForm/CoinInformation';
import Modal from '../../components/Modal/Modal';
import GeneralModal from '../../components/Modal/BetaModal';
import BetaModal from '../../components/Modal/BetaModal';

function CoinForecast() {
  const {
    complete,
    coinName,
    setCoinName,
    data,
    setData,
    selectedFromDropdown,
    btcMarketcapNumber,
    top10CryptoRBM,
    top50CryptoRBM,
    top100CryptoRBM,
    top500CryptoRBM,
    top1000CryptoRBM,
    ethRBM,
    open,
    setOpen,
  } = useContext(DataContext);

  const [coinCurrentRBM, setCoinCurrentRMB] = useState(0);
  const [coinCurrentRBMnumber, setCoinCurrentRMBnumber] = useState(0);

  const [circulatingSupply, setCirculatingSupply] = useState(null);
  const [circulatingSupplyNumber, setCirculatingSupplyNumber] = useState(null);

  const [currentPrice, setCurrentPrice] = useState(null);
  const [currentPriceNumber, setCurrentPriceNumber] = useState(null);

  const [currentMarketCap, setCurrentMarketCap] = useState(null);
  const [currentMarketCapNumber, setCurrentMarketCapNumber] = useState(null);

  const [coinRBM, setCoinRBM] = useState('0.00');
  const [coinRBMNumber, setCoinRBMNumber] = useState(null);

  const [coinPredictedRBM, setCoinPredictedRBM] = useState('0.00');

  // - user coin data
  const [totalAmountOwned, setTotalAmountOwned] = useState(0);
  const [avgPriceBought, setAvgPriceBought] = useState(0);
  const [previousProfit, setPreviousProfit] = useState(0);
  const [buyMore, setBuyMore] = useState(0);
  const [avgFuturePriceBought, setAvgFuturePriceBought] = useState(0);
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [predictedMarketcap, setPredictedMarketcap] = useState(0);

  const [profit, setProfit] = useState('');
  const [xTimesProfit, setXTimesProfit] = useState('');

  // - form questions logic

  const [doYouOwnAnyCoin, setDoYouOwnAnyCoin] = useState(false);
  const [doYouWantToBuyMoreCoin, setDoYouWantToBuyMoreCoin] = useState(false);

  // - form
  useEffect(() => {
    if (selectedFromDropdown) {
      // - setting global state for coin name
      setCoinName(selectedFromDropdown.name);

      // - reassigns coin name if input field is an empty string.
      if (coinName === '') {
        selectedFromDropdown.name = 'Select Coin';
        setCoinName(selectedFromDropdown.name);
      }

      // - calculating coin name current circulating supply
      let sumCS = selectedFromDropdown.circulating_supply;
      setCirculatingSupplyNumber(sumCS);
      setCirculatingSupply(sumCS.toLocaleString());

      // - calculating coin name current price
      let sumCP = selectedFromDropdown.current_price;
      setCurrentPriceNumber(sumCP);
      setCurrentPrice(sumCP.toLocaleString());

      // - calculating coin name current market cap
      let sumCMC = selectedFromDropdown.market_cap;

      setCurrentMarketCapNumber(sumCMC);
      setCurrentMarketCap(sumCMC.toLocaleString());

      // - coin name RBM calculation
      let sumRBM = (selectedFromDropdown.market_cap / data[0].market_cap) * 100;
      console.log({ coinCurrentRBM });
      let sumRBM2 = sumRBM.toFixed(4);
      setCoinCurrentRMBnumber(sumRBM);
      setCoinCurrentRMB(sumRBM2.toLocaleString());

      if (
        currentMarketCapNumber &&
        currentPriceNumber &&
        circulatingSupplyNumber &&
        predictedPrice
      ) {
        const futureMarketcap = circulatingSupplyNumber * predictedPrice;

        // -  current selected coin's PREDICTED RBM
        let coinPredictedRBMNumber =
          (futureMarketcap / btcMarketcapNumber) * 100;

        let coinPredictedRBM = coinPredictedRBMNumber.toFixed(2);

        setCoinPredictedRBM(coinPredictedRBM);

        setPredictedMarketcap(futureMarketcap.toLocaleString());

        // - current selected coin's RBM
        setCoinRBMNumber((currentMarketCapNumber / btcMarketcapNumber) * 100);
        setCoinRBM(coinCurrentRBMnumber.toFixed(2));
      }

      //- reset your prediction fields

      if (predictedPrice === 0 || Number.isNaN(predictedPrice)) {
        setCoinPredictedRBM('0.00');
        setCoinRBM('0.00');
        setPredictedMarketcap('');
      }

      //- calculating profit

      let previousCoinsBoughtTotalCost = totalAmountOwned * avgPriceBought;
      let futureCoinsBoughtTotalCost = buyMore * avgFuturePriceBought;

      if (totalAmountOwned && buyMore) {
        let prediction =
          (totalAmountOwned + buyMore) * predictedPrice +
          previousProfit -
          previousCoinsBoughtTotalCost -
          futureCoinsBoughtTotalCost;

        setProfit(prediction);
      }

      if (totalAmountOwned && Number.isNaN(buyMore)) {
        let prediction =
          totalAmountOwned * predictedPrice +
          previousProfit -
          previousCoinsBoughtTotalCost;

        setProfit(prediction);
      }

      if (buyMore && Number.isNaN(totalAmountOwned)) {
        let prediction =
          buyMore * predictedPrice +
          previousProfit -
          futureCoinsBoughtTotalCost;

        setProfit(prediction);
      }

      // - X times profit increase
      if (
        (totalAmountOwned && avgPriceBought) ||
        (buyMore && avgFuturePriceBought)
      ) {
        const owned = totalAmountOwned + buyMore;

        let finalProfit =
          (totalAmountOwned + buyMore) * predictedPrice +
          previousProfit -
          previousCoinsBoughtTotalCost -
          futureCoinsBoughtTotalCost;

        const result = finalProfit / owned;

        setXTimesProfit(result.toFixed(2));
      }
    }
  }, [
    avgFuturePriceBought,
    avgPriceBought,
    btcMarketcapNumber,
    buyMore,
    circulatingSupply,
    circulatingSupplyNumber,
    coinCurrentRBMnumber,
    coinName,
    currentMarketCap,
    currentMarketCapNumber,
    currentPrice,
    currentPriceNumber,
    data,
    predictedPrice,
    previousProfit,
    selectedFromDropdown,
    setCoinName,
    totalAmountOwned,
    xTimesProfit,
  ]);

  //   console.log({ totalAmountOwned });
  //   console.log({ avgPriceBought });
  //   console.log({ previousProfit });
  //   console.log({ buyMore });
  //   console.log({ avgFuturePriceBought });
  // - test

  return (
    <>
      {complete && (
        <>
          <BetaModal />

          <div className='flex flex-col gap-4 max-w-5xl mx-auto'>
            <div className='mb-5'>
              <h3 className='text-appBlue text-3xl font-bold '>Coin Predict</h3>
              <p className='mt-4 text-xl'>
                Set investment return targets based on current or potential
                investments you want to make or have made + predict if the coin
                can produce the returns you want.
              </p>
            </div>
            <CoinInformation
              data={data}
              setData={setData}
              selectedFromDropdown={selectedFromDropdown}
              circulatingSupply={circulatingSupply}
              currentPrice={currentPrice}
              currentMarketCap={currentMarketCap}
              coinName={coinName}
              coinCurrentRBM={coinCurrentRBM}
            />
            <YourPrediction
              coinName={coinName}
              setData={setData}
              doYouOwnAnyCoin={doYouOwnAnyCoin}
              setDoYouOwnAnyCoin={setDoYouOwnAnyCoin}
              setDoYouWantToBuyMoreCoin={setDoYouWantToBuyMoreCoin}
              selectedFromDropdown={selectedFromDropdown}
              setTotalAmountOwned={setTotalAmountOwned}
              setAvgPriceBought={setAvgPriceBought}
              setPreviousProfit={setPreviousProfit}
              doYouWantToBuyMoreCoin={doYouWantToBuyMoreCoin}
              setBuyMore={setBuyMore}
              setAvgFuturePriceBought={setAvgFuturePriceBought}
              predictedPrice={predictedPrice}
              setPredictedPrice={setPredictedPrice}
              predictedMarketcap={predictedMarketcap}
            />
            <YourResults
              coinName={coinName}
              coinRBM={coinRBM}
              coinPredictedRBM={coinPredictedRBM}
              profit={[profit]}
              xTimesProfit={xTimesProfit}
            />
            <YourAssessment
              top10CryptoRBM={top10CryptoRBM}
              top50CryptoRBM={top50CryptoRBM}
              top100CryptoRBM={top100CryptoRBM}
              top500CryptoRBM={top500CryptoRBM}
              top1000CryptoRBM={top1000CryptoRBM}
              ethRBM={ethRBM}
              coinName={coinName}
              coinCurrentRBM={coinCurrentRBM}
              coinPredictedRBM={coinPredictedRBM}
            />
            <Analysis coinName={coinName} />
            <QuickPredictArea />
          </div>
        </>
      )}
    </>
  );
}

export default CoinForecast;
