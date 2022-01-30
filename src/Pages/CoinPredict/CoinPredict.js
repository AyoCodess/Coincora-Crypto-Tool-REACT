import { React, useContext, useState, useEffect } from 'react';

import StandardButtonReactRouter from '../../components/Buttons/StandardButtonReactRouter';
import { HashLink } from 'react-router-hash-link';
import Tooltip from '../../components/Tooltip/Tooltip';
import DropdownList from '../../components/DropdownList/DropdownList';

import DataContext from '../../context';
import InputTextWithCheckIcon from '../../components/InoutFields/InputTextWithCheckIcon';
import InputWithNumGrayBoxLarge from '../../components/InoutFields/InputWithNumGrayBoxLarge';
import InputTextWithDollarIcon from '../../components/InoutFields/InputTextWithDollarIcon';

function CoinForecast() {
  const {
    complete,

    coinName,
    setCoinName,
    data,

    selectedFromDropdown,
  } = useContext(DataContext);

  const [coinCurrentRBM, setCoinCurrentRMB] = useState(0);
  const [circulatingSupply, setCirculatingSupply] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [currentMarketCap, setCurrentMarketCap] = useState(null);

  useEffect(() => {
    if (selectedFromDropdown) {
      // - setting global state for coin name
      setCoinName(selectedFromDropdown.name);

      // - calculating coin name current circulating supply
      let sumCS = selectedFromDropdown.circulating_supply;
      setCirculatingSupply(sumCS.toLocaleString());
      console.log(circulatingSupply);

      // - calculating coin name current price
      let sumCP = selectedFromDropdown.current_price;
      setCurrentPrice(sumCP.toLocaleString());
      console.log(currentPrice);

      // - calculating coin name current market cap
      let sumCMC = selectedFromDropdown.market_cap;

      console.log(sumCMC);
      setCurrentMarketCap(sumCMC.toLocaleString());
      console.log(currentMarketCap);

      // - coin name RBM calculation
      let sumRBM = selectedFromDropdown.market_cap / data[0].market_cap;
      setCoinCurrentRMB(sumRBM.toLocaleString());
    } else {
      console.log('error');
    }
  }, [
    circulatingSupply,
    currentMarketCap,
    currentPrice,
    data,
    selectedFromDropdown,
    setCoinName,
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
              investments you want to make or have made and predict if the coin
              can produce the returns you want.
            </p>
          </div>
          <div className='flex'>
            <div className=''>
              <div className='prose mb-5 border-t-2 border-appBlue pt-2 '>
                <h4>Coin information</h4>
                <p>Select the coin you want to forecast</p>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg '>
                  <div className='flex gap-2 '>
                    <div className='w-[50%]  px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip message={'hey'} title={'Coin'} />
                    </div>
                    <DropdownList />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={'Current Circulating Supply'}
                      />
                    </div>
                    {selectedFromDropdown && (
                      <InputTextWithCheckIcon value={circulatingSupply} />
                    )}
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip message={'hey'} title={' Current Price'} />
                    </div>
                    {selectedFromDropdown && (
                      <InputTextWithDollarIcon value={currentPrice} />
                    )}
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip message={'hey'} title={'  Current Market Cap'} />
                    </div>
                    {selectedFromDropdown && (
                      <InputTextWithDollarIcon value={currentMarketCap} />
                    )}
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`${coinName}'s current market cap size in % of Bitcoins
                      current market cap is`}
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
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`What's the total Amount of ${coinName} you
                      own?`}
                      />
                    </div>
                    <input
                      type='number'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`Average price you bought ${coinName} at?`}
                      />
                    </div>
                    <input
                      type='number'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={` If you want to buy more ${coinName}, how much?`}
                      />
                    </div>
                    <input
                      type='number'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`Average price you think you will buy more ${coinName} at?`}
                      />
                    </div>
                    <input
                      type='number'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                </div>
                <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`What are you predicting ${coinName}'s future price at?`}
                      />
                    </div>
                    <input
                      type='number'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`${coinName}'s future market cap based off your
                      prediction`}
                      />
                    </div>
                    <input
                      type='number'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                </div>
                <div className='prose  mt-5 border-t-2 border-appBlue pt-2'>
                  <h4>The Results</h4>
                  <p>
                    Do these numbers make sense? Check the table below for the
                    details using as a basis Coincora's (RBM) Ratio to Bitcoins
                    marketcap analysis.
                  </p>

                  <button type='button' className=' '>
                    <HashLink
                      smooth
                      className=' text-white no-underline justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md bg-appBlue'
                      to={'/coin-predict#rbm'}>
                      What is RBM?
                    </HashLink>
                  </button>
                </div>
                <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <div className='flex flex-col gap-2'>
                    <div className=' px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`${coinName}'s current market cap is 2% of
                      Bitcoins current market cap`}
                      />
                    </div>
                    <div className=' px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`${coinName}'s predicted market cap is 11% of
                      Bitcoins current market cap`}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`Your profit if ${coinName} went to your predicted price is`}
                      />
                    </div>
                    <input
                      type='number'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`Your predicted X increase is`}
                      />
                    </div>
                    <input
                      type='number'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='prose  my-5'>
            <h3 className='text-appBlue'>Assessment of your prediction</h3>
            <p>
              <b>Is your prediction realistic?</b> Remember if you wait long
              enough anything is possible. So it's best you have time-frame in
              mind when looking a these numbers.
            </p>

            <p>
              Bitcoins price/marketcap still dictates what alt-coins behave.
              This why we use the <b>RBM</b> as just another tool to help us
              make better longtime investing decisions.{' '}
              <b>You cannot make decisions based of the RMB alone.</b>
            </p>
          </div>
          <div className=' py-2 flex flex-col gap-2 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              Top 10 crypto's current RMB
            </div>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              Top 50 crypto's current RMB
            </div>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              Top 100 crypto's current RMB
            </div>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              Top 1000 crypto's current RMB
            </div>
          </div>

          <div className=' mt-5 py-2 flex flex-col gap-2 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              {coinName}'s current RBM
            </div>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              {coinName}'s predicted RBM
            </div>
          </div>
          <div className='prose mt-5 border-t-2 border-appBlue pt-2'>
            <h4>The Analysis</h4>
            <p>{coinName}'s predicted RBM is in the 'Top 10!'</p>
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
            </p>
          </div>

          <div className='prose mt-5 border-t-2 border-appBlue pt-2'>
            <h4>1 on 1 Comparison</h4>
          </div>

          <div className='mt-2 prose'>
            <p>
              What do compare individual coin RBM's,{' '}
              <b>
                don't worry your data is saved as long as you stay within the
                app.
              </b>
            </p>
            <p>
              Why compare coins 1 on 1? A benefit of performing this type of
              caparison is to compare new emerging crypto projects with the more
              established in the same industry, to see what the potential of the
              emerging crypto is, as long as it meets RMB ranking criteria.
            </p>
            <button type='button' className=' '>
              <HashLink
                smooth
                className=' text-white no-underline justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md bg-appBlue'
                to={'/coin-predict#1'}>
                Go to Quick Compare
              </HashLink>
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default CoinForecast;
