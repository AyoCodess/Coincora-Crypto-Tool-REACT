import { React, useContext, useState, useEffect } from 'react';

import StandardButtonReactRouter from '../../components/Buttons/StandardButtonReactRouter';
import { HashLink } from 'react-router-hash-link';
import Tooltip from '../../components/Tooltip/Tooltip';
import DropdownList from '../../components/DropdownList/DropdownList';

import DataContext from '../../Context/context';
import InputTextWithCheckIcon from '../../components/InoutFields/InputTextWithCheckIcon';
import InputTextWithNoIcon from '../../components/InoutFields/InputTextWithNoIcon';
import InputTextWithNoIconOnChange from '../../components/InoutFields/InputTextWithNoIconOnChange';
import InputWithNumGrayBoxLarge from '../../components/InoutFields/InputWithNumGrayBoxLarge';
import InputWithNumGrayBoxSmall from '../../components/InoutFields/InputWithNumGrayBoxSmall';
import InputTextWithDollarIcon from '../../components/InoutFields/InputTextWithDollarIcon';
import InputTextWithDollarIconOnChange from '../../components/InoutFields/InputTextWithDollarIconOnChange';
import { set } from 'react-ga';
import InputTextWithDollarIconReadOnly from '../../components/InoutFields/InputTextWithDollarIconReadOnly';
import InputTextTimesProfit from '../../components/InoutFields/InputTextTimesProfit';
import AlinkStandardButton from '../../components/Buttons/AlinkStandardButton';

function CoinForecast() {
  const {
    complete,
    coinName,
    setCoinName,
    data,
    setData,
    selectedFromDropdown,
    btcMarketcapFormatted,
    btcMarketcapNumber,
    top10CryptoRBM,
    top50CryptoRBM,
    top100CryptoRBM,
    top500CryptoRBM,
    top1000CryptoRBM,
    ethRBM,
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

  console.log({ doYouWantToBuyMoreCoin });

  // - form
  useEffect(() => {
    if (selectedFromDropdown) {
      // - setting global state for coin name
      setCoinName(selectedFromDropdown.name);

      // - reassigns coin name if input field is an empty string.
      if (coinName === '') {
        selectedFromDropdown.name = 'Coin';
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
      let sumRBM2 = sumRBM.toFixed(1);
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
        console.log('predicted price reset');
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

  return (
    <>
      {!complete && (
        <div>
          <div className='prose'>
            <p>
              Coming soon. Join our waiting list to be one of the very first to
              test out this new feature when it's available.
            </p>
            <p>
              Coincora is a tool that will help you assess your crypto
              investment expectations objectively.
            </p>
            <p>
              Helping you avoid getting pulled into hype that may create a
              situation where you're over exposed to the volatility of the
              market.
              <span className='text-red-500 font-bold'>
                Moreover, it will help you avoid scams.
              </span>
            </p>
          </div>
          <div className='my-6'>
            <StandardButtonReactRouter
              to={'/'}
              text={'Join the waiting list'}
              width={'w-[250px]'}
              color={'bg-appBlue'}
            />
          </div>
        </div>
      )}

      {complete && (
        <>
          <div className='prose  mb-5'>
            <h3 className='text-appBlue'>Coin Predict</h3>
            <p>
              Set investment return targets based on current or potential
              investments you want to make or have made + predict if the coin
              can produce the returns you want.
            </p>
          </div>
          <div className='flex '>
            <div className=''>
              <div className='prose mb-5 border-t-2 border-appBlue pt-2 '>
                <h4>Coin information</h4>
                <p>Select the coin you want to forecast</p>
              </div>
              <div className='flex flex-col gap-4 lg:min-w-[700px]'>
                <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg '>
                  <div className='flex gap-2 items-center '>
                    <div className='w-[50%]  px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip message={'hey'} title={'Coin'} />
                    </div>
                    <DropdownList setData={setData} />
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={'Current Circulating Supply'}
                      />
                    </div>
                    {selectedFromDropdown && (
                      <InputTextWithCheckIcon
                        value={circulatingSupply}
                        sign={'%'}
                      />
                    )}
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip message={'hey'} title={' Current Price'} />
                    </div>
                    {selectedFromDropdown && (
                      <InputTextWithDollarIconReadOnly value={currentPrice} />
                    )}
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip message={'hey'} title={'  Current Market Cap'} />
                    </div>
                    {selectedFromDropdown && (
                      <InputTextWithDollarIconReadOnly
                        value={currentMarketCap}
                      />
                    )}
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={`${coinName}'s market cap in % of Bitcoins current market cap.`}
                        title={`${coinName}'s current RBM `}
                      />
                    </div>

                    <InputWithNumGrayBoxLarge
                      value={coinCurrentRBM}
                      sign={'%'}
                    />
                  </div>
                </div>
                <div className='prose  mt-5 border-t-2 border-appBlue pt-2'>
                  <h4>Your Prediction</h4>
                  <p>
                    Plug in numbers that make sense in your investing strategy.
                  </p>
                </div>
                <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <div>
                    <label className='text-base font-medium text-gray-900'>
                      {`Do you own any ${coinName}?`}
                    </label>
                    <p className='text-sm leading-5 text-gray-500'>
                      The form will update automatically
                    </p>
                    <fieldset className='mt-4'>
                      <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10'>
                        <div key={'yesMore'} className='flex items-center'>
                          <input
                            onChange={() => {
                              setDoYouOwnAnyCoin(true);
                            }}
                            id={'yesMore'}
                            name='notification-method'
                            type='radio'
                            className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                          />
                          <label
                            htmlFor={'yesMore'}
                            className='ml-3 block text-sm font-medium text-gray-700'>
                            Yes
                          </label>
                        </div>
                        <div key={'noMore'} className='flex items-center'>
                          <input
                            onChange={() => {
                              setDoYouOwnAnyCoin(false);
                            }}
                            id={'noMore'}
                            name='notification-method'
                            type='radio'
                            defaultChecked={doYouOwnAnyCoin === false}
                            className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                          />
                          <label
                            htmlFor={'noMore'}
                            className='ml-3 block text-sm font-medium text-gray-700'>
                            No
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  {doYouOwnAnyCoin && (
                    <div>
                      <div className='flex gap-2 items-center mt-5 '>
                        <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                          <Tooltip
                            message={'hey'}
                            title={`Total Amount of ${coinName} you
                          own?`}
                          />
                        </div>
                        {selectedFromDropdown && (
                          <InputTextWithNoIconOnChange
                            onChange={(e) => {
                              if (e.target.value === '') {
                                return 0;
                              } else {
                                setTotalAmountOwned(e.target.valueAsNumber);
                              }
                            }}
                          />
                        )}
                      </div>
                      <div className='flex gap-2 items-center '>
                        <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                          <Tooltip
                            message={'hey'}
                            title={`Average price you bought ${coinName} at?`}
                          />
                        </div>
                        {selectedFromDropdown && (
                          <InputTextWithDollarIconOnChange
                            onChange={(e) => {
                              if (e.target.value === '') {
                                return 0;
                              } else {
                                setAvgPriceBought(e.target.valueAsNumber);
                              }
                            }}
                          />
                        )}
                      </div>
                      <div className='flex gap-2 items-center '>
                        <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                          <Tooltip
                            message={'hey'}
                            title={`How much profit or loss have you made on ${coinName} so far?`}
                          />
                        </div>
                        {selectedFromDropdown && (
                          <InputTextWithDollarIconOnChange
                            onChange={(e) => {
                              if (e.target.value === '') {
                                return 0;
                              } else {
                                setPreviousProfit(e.target.valueAsNumber);
                              }
                            }}
                          />
                        )}
                      </div>
                    </div>
                  )}

                  {doYouOwnAnyCoin && (
                    <div className='mt-4'>
                      <label className='text-base font-medium text-gray-900'>
                        {`Are you going to buy any more ${coinName}?`}
                      </label>
                      <p className='text-sm leading-5 text-gray-500'>
                        The form will update automatically
                      </p>

                      <fieldset className='mt-4'>
                        <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10'>
                          <div key={'yes'} className='flex items-center'>
                            <input
                              onChange={() => {
                                setDoYouWantToBuyMoreCoin(true);
                              }}
                              id={'yesMore'}
                              name='more'
                              type='radio'
                              className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                            />
                            <label
                              htmlFor={'yesMore'}
                              className='ml-3 block text-sm font-medium text-gray-700'>
                              Yes
                            </label>
                          </div>
                          <div key={'noMore'} className='flex items-center'>
                            <input
                              onChange={() => {
                                setDoYouWantToBuyMoreCoin(false);
                              }}
                              id={'noMore'}
                              name='more'
                              type='radio'
                              defaultChecked={doYouWantToBuyMoreCoin === false}
                              className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                            />
                            <label
                              htmlFor={'noMore'}
                              className='ml-3 block text-sm font-medium text-gray-700'>
                              No
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  )}

                  {doYouWantToBuyMoreCoin && (
                    <div>
                      <div className='flex gap-2 items-center mt-4'>
                        <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                          <Tooltip
                            message={'hey'}
                            title={` If you want to buy more ${coinName}, how much (Units)?`}
                          />
                        </div>
                        {selectedFromDropdown && (
                          <InputTextWithNoIconOnChange
                            onChange={(e) => {
                              if (e.target.value === '') {
                                return 0;
                              } else {
                                setBuyMore(e.target.valueAsNumber);
                              }
                            }}
                          />
                        )}
                      </div>
                      <div className='flex gap-2 items-center'>
                        <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                          <Tooltip
                            message={'hey'}
                            title={`Average price you think you will buy more ${coinName} at?`}
                          />
                        </div>
                        {selectedFromDropdown && (
                          <InputTextWithDollarIconOnChange
                            onChange={(e) => {
                              if (e.target.value === '') {
                                return 0;
                              } else {
                                setAvgFuturePriceBought(e.target.valueAsNumber);
                              }
                            }}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <div className='flex gap-2 items-center border-2 '>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`What are you predicting ${coinName}'s future price at?`}
                      />
                    </div>
                    {selectedFromDropdown && (
                      <InputTextWithDollarIconOnChange
                        value={predictedPrice}
                        onChange={(e) => {
                          if (e.target.value === '') {
                            return 0;
                          } else {
                            setPredictedPrice(e.target.valueAsNumber);
                          }
                        }}
                      />
                    )}
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`${coinName}'s future market cap based off your
                      prediction`}
                      />
                    </div>
                    {selectedFromDropdown && (
                      <InputTextWithDollarIconReadOnly
                        value={predictedMarketcap}
                      />
                    )}
                  </div>
                </div>
                <div className='prose  mt-5 border-t-2 border-appBlue pt-2'>
                  <h4>The Results</h4>
                  <p>Here it is, behold your forecast results.</p>

                  <AlinkStandardButton
                    text={'What is RBM'}
                    href={
                      'https://www.beta.coincora.com/knowledge-base/what-is-RBM'
                    }
                    width={'w-32'}
                    color={'bg-appBlue'}
                  />
                </div>
                <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <div className='flex flex-col gap-2'>
                    <div className=' flex px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <span>
                        {coinName}'s current market cap is
                        <span className='font-bold text-xl text-appBlue'>
                          {' '}
                          {coinRBM}%
                        </span>{' '}
                        of Bitcoins current market cap (RBM)
                      </span>
                      <Tooltip message={'hey'} />
                    </div>
                    <div className=' flex px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <span>
                        {coinName}'s predicted market cap is
                        <span className='font-bold text-xl text-appBlue'>
                          {' '}
                          {coinPredictedRBM}%
                        </span>{' '}
                        of Bitcoins current market cap (RBM)
                      </span>
                      <Tooltip message={'hey'} />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <div className='flex gap-2 items-center'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`Your profit if ${coinName} went to your predicted price is`}
                      />
                    </div>
                    <InputTextWithDollarIconReadOnly value={profit} />
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`Your predicted X increase is`}
                      />
                    </div>
                    <InputTextTimesProfit value={xTimesProfit} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='prose  my-5'>
            <h3 className='text-appBlue'>Assessment of your prediction</h3>
            <p>Check out your prediction assessment below.</p>
          </div>
          <div className=' flex flex-col  shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <div className='flex items-center'>
              <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                <Tooltip
                  message={`Top 10 crypto's current RMB`}
                  title={`Top 10 crypto's current RMB`}
                />
              </div>
              <InputWithNumGrayBoxSmall value={top10CryptoRBM} />
            </div>
            <div className='flex items-center '>
              <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                <Tooltip
                  message={`Top 50 crypto's current RMB`}
                  title={`Top 50 crypto's current RMB`}
                />
              </div>
              <InputWithNumGrayBoxSmall value={top50CryptoRBM} />
            </div>
            <div className='flex items-center'>
              <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                <Tooltip
                  message={`Top 100 crypto's current RMB`}
                  title={`Top 100 crypto's current RMB`}
                />
              </div>
              <InputWithNumGrayBoxSmall value={top100CryptoRBM} />
            </div>
            <div className='flex items-center'>
              <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                <Tooltip
                  message={`Top 500 crypto's current RMB`}
                  title={`Top 500 crypto's current RMB`}
                />
              </div>
              <InputWithNumGrayBoxSmall value={top500CryptoRBM} />
            </div>
            <div className='flex items-center'>
              <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                <Tooltip
                  message={`Top 1000 crypto's current RMB`}
                  title={`Top 1000 crypto's current RMB`}
                />
              </div>
              <InputWithNumGrayBoxSmall value={top1000CryptoRBM} />
            </div>
            <div className='flex items-center'>
              <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                <Tooltip message={`Ethereum's RBM`} title={`Ethereum's RBM `} />
              </div>
              <InputWithNumGrayBoxSmall value={ethRBM} />
            </div>
            <div className='flex items-center  border-t-4 '>
              <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                <Tooltip
                  message={`${coinName}'s market cap in % of Bitcoins current market cap.`}
                  title={`${coinName}'s current RBM `}
                />
              </div>

              <InputWithNumGrayBoxSmall value={coinCurrentRBM} />
            </div>
            <div className='flex items-center '>
              <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                <Tooltip
                  message={`${coinName}'s market cap in % of Bitcoins current market cap.`}
                  title={`${coinName}'s Predicted RBM `}
                />
              </div>

              <InputWithNumGrayBoxSmall value={coinPredictedRBM} />
            </div>
          </div>

          <div className='prose mt-5 border-t-2 border-appBlue pt-2'>
            <h4>The Analysis - Coming Soon</h4>
            <p>
              This section will tell you what {coinName}'s predicted RBM could
              objectively mean, and what you need to consider to asses if your
              prediction is feasible or not.
            </p>
            {/* <p>{coinName}'s predicted RBM is in the 'Top 10!'</p>
            <p className=' text-appBlue font-bold'>
              Cryptos in the top 10 generally have...
            </p>
            <ol>
              <li>Fully transparent and public team</li>
              <li>
                Partnerships with other crypto projects within the top 100
                cryptos
              </li>
              <li>Fully transparent and public team</li>
              <li>Fully transparent and public team</li>
              <li>Fully transparent and public team</li>
            </ol>
            <p>
              Does {coinName} meet the above criteria? if not re-consider your
              expectations and change your numbers.
            </p> */}
          </div>

          <div className='prose mt-5 border-t-2 border-appBlue pt-2'>
            <h4>Quick Predict - Coming Soon</h4>
          </div>

          <div className='mt-2 prose'>
            <p>This tool compares your favorite crypto projects.</p>
            <p>
              Note: one way to perform a comparison is to check new emerging
              crypto projects against established ones. Allowing you to better
              assess the new coin’s potential.
            </p>
            <AlinkStandardButton
              text={'Quick Predict'}
              href={'https://www.beta.coincora.com/quick-predict'}
              width={'w-32'}
              color={'bg-appBlue'}
            />
          </div>
        </>
      )}
    </>
  );
}

export default CoinForecast;
