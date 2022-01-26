import { React, useState } from 'react';
import AlinkStandardButton from '../../components/Buttons/AlinkStandardButton';
import StandardButtonReactRouter from '../../components/Buttons/StandardButtonReactRouter';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Tooltip from '../../components/Tooltip/Tooltip';

function CoinForecast() {
  const [complete, setComeplete] = useState(true);
  const [coinName, setCoinName] = useState('Matic');
  return (
    <>
      {!complete && (
        <div>
          <div>
            Coming soon. Join our waiting list to be one of the very first to
            test out this new feature when it's available.
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

            <button type='button' className=' '>
              <HashLink
                smooth
                className=' text-white no-underline justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md bg-appBlue'
                to={'/coin-predict#1'}>
                Quick Compare
              </HashLink>
            </button>
          </div>
          <div className='flex'>
            <div className=''>
              <div className='prose mb-5 border-t-2 border-appBlue pt-2'>
                <h4>Coin information</h4>
                <p>Select the coin you want to forecast</p>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg '>
                  <div className='flex gap-2 '>
                    <div className='w-[50%]  px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip message={'hey'} title={'Coin'} />
                    </div>
                    <input
                      type='text'
                      name='coin'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='Select coin'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={'Current Circulating Supply'}
                      />
                    </div>
                    <input
                      type='number'
                      name=' circulating supply'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip message={'hey'} title={' Current Price'} />
                    </div>
                    <input
                      type='number'
                      name=' circulating supply'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip message={'hey'} title={'  Current Market Cap'} />
                    </div>
                    <input
                      type='number'
                      name=' circulating supply'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <Tooltip
                        message={'hey'}
                        title={`${coinName}'s current market cap size in % of Bitcoins
                      current market cap is`}
                      />
                    </div>
                    <input
                      type='number'
                      name=' circulating supply'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
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
                      name=' circulating supply'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      Average price you bought <span>{coinName}</span> at?
                    </div>
                    <input
                      type='number'
                      name=' circulating supply'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      If you want to buy more <span>{coinName}</span>, how much?
                    </div>
                    <input
                      type='number'
                      name=' circulating supply'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      Average price you think you will buy more
                      <span> {coinName}</span> at?
                    </div>
                    <input
                      type='number'
                      name=' circulating supply'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                </div>
                <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      What are you predicting <span>{coinName}'s</span> future
                      price at?
                    </div>
                    <input
                      type='number'
                      name=' circulating supply'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      <span>{coinName}'s</span> future market cap based off your
                      prediction
                    </div>
                    <input
                      type='number'
                      name=' circulating supply'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                </div>
                <div className='prose  mt-5 border-t-2 border-appBlue pt-2'>
                  <h4>The Results</h4>
                  <p>
                    Do these numbers make sense? Check the table below for the
                    details.
                  </p>
                </div>
                <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <div className='flex flex-col gap-2'>
                    <div className=' px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      {coinName}'s current market cap is <span>2%</span> of
                      Bitcoins current market cap (RBM)
                    </div>
                    <div className=' px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      {coinName}'s predicted market cap is <span>11%</span> of
                      Bitcoins current market cap (RBM)
                    </div>
                  </div>
                </div>
                <div className='flex flex-col shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      Your profit if {coinName} went to your predicted price is
                    </div>
                    <input
                      type='number'
                      name=' circulating supply'
                      className=' w-[50%] shadow-sm focus:ring-sky-500 focus:border-sky-500  sm:text-sm border-gray-300 rounded-md'
                      placeholder='0'
                    />
                  </div>
                  <div className='flex gap-2'>
                    <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
                      Your predicted X increase is
                    </div>
                    <input
                      type='number'
                      name=' circulating supply'
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
          <div className='py-2'>
            <div>Top 10 crypto's current RMB</div>
            <div>Top 50 crypto's current RMB</div>
            <div>Top 100 crypto's current RMB</div>
            <div>Top 1000 crypto's current RMB</div>
          </div>

          <div className='py-2'>
            <div>{coinName}'s current RBM</div>
            <div>{coinName}'s predicted RBM</div>
          </div>

          <div>
            <p>{coinName} predicted RBM is in the 'top 10'</p>
            <p>
              Factors to consider: Cryptos in the top 10 have credible and
              public team members, they have partnerships with other top-10 to
              top-100 major cryptos etc...
            </p>
            <p>
              does {coinName} meet the above criteria? if not re-consider your
              expectations.{' '}
            </p>
          </div>

          <div className='py-2'>
            <div id='1'>Compare individual RMB to {coinName} and compare</div>
            <p>It's useful two coins RMB in the sam industry</p>
            <div>Select Coin</div> <div>current RMB %</div>
            <div>{coinName}'s</div> <div> current RMB %</div>
            <div>{coinName}'s</div> <div> predicted RMB %</div>
          </div>
        </>
      )}
    </>
  );
}

export default CoinForecast;
