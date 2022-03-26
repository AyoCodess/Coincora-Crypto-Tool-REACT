import React, { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import InputTextWithDollarIconReadOnly from '../InoutFields/InputTextWithDollarIconReadOnly';
import InputTextTimesProfit from '../InoutFields/InputTextTimesProfit';
import CoinPredictHeading from './CoinPredictHeading';
import SectionContainerBlue from './SectionContainerBlue';
import SectionContainerWhite from './SectionContainerWhite';
import CoinPriceStat from './CoinPriceStat';
import SectionContainer from './SectionContainer';
import RMBlist from './RMBlist';
import YesNoToggle from './YesNoToggle';
import StandardButtonTypeButton from '../Buttons/StandardButtonTypeButton';
import AlinkStandardButton from '../Buttons/AlinkStandardButton';

function YourResults({
  coinName,
  coinRBM,
  coinPredictedRBM,
  profit,
  xTimesProfit,
  selectedFromDropdown,
  setIsResults,
  top10CryptoRBM,
  top50CryptoRBM,
  top100CryptoRBM,
  top500CryptoRBM,
  top1000CryptoRBM,
  ethRBM,
  coinCurrentRBM,
  viewMarketRBM,
  setViewMarketRBM,
}) {
  // - unhide crypto market RBM list in the ' your assessment' component.

  const [viewExplanation, setViewExplanation] = useState(false);

  console.log({ coinPredictedRBM });

  return (
    <>
      <CoinPredictHeading
        title={'The Results'}
        subHeading={'Here it is, behold your forecast results.'}
      />
      {selectedFromDropdown && selectedFromDropdown.name !== 'Select Coin' ? (
        <div>
          <SectionContainer margin={'p-0 pt-2'}>
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-5 sm:items-center sm:justify-between'>
              <div className='p-3'>
                <YesNoToggle
                  text={`View Crypto Market RBM's `}
                  state={viewMarketRBM}
                  setState={setViewMarketRBM}
                  disabled={selectedFromDropdown}
                />
              </div>
              <div className='flex flex-col items-center sm:flex-row gap-4'>
                {' '}
                <StandardButtonTypeButton
                  text={'Quick Explanation'}
                  onClick={() => {
                    if (!viewExplanation) {
                      setViewExplanation(true);
                    } else {
                      setViewExplanation(false);
                    }
                  }}
                  color={'bg-appBlue'}
                  width={'w-48'}
                  textColor={'text-white'}
                />
                <AlinkStandardButton
                  href={'https://www.coincora.com/knowledge-base/what-is-RBM'}
                  text={'What is RBM?'}
                  width={'w-48'}
                  height={null}
                  color={'bg-appBlue'}
                  margin={'sm:mr-3 mb-3 sm:mb-0'}
                />
              </div>
            </div>
            {viewExplanation && (
              <>
                <div className='p-3'>
                  {' '}
                  <p className=' px-1 py-1   '>
                    {`The crypto market RBM's are the average crypto marketcap sizes in percentage terms in comparison to bitcoins.`}{' '}
                  </p>
                  <p className='px-1 py-1  '>
                    {`E.g If we combined the top 10 crypto projects marketcaps together and divided them by 10, we get the average marketcap size for a top 10 project, which is currently ${top10CryptoRBM}% of Bitcoins marketcap.`}
                  </p>
                  <p className='px-1 py-1  '>
                    {`Compare ${coinName}'s predicted RBM to the market average's to quickly gage if your prediction is feasible within a given time frame.`}
                  </p>
                </div>
              </>
            )}

            {viewMarketRBM && (
              <>
                <RMBlist
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
              </>
            )}
          </SectionContainer>

          <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 items-end'>
            <CoinPriceStat
              stat={coinCurrentRBM}
              title={`${coinName}'s current marketcap RBM`}
              sign={'%'}
              tooltipIconColor={'blue'}
              message={'coming soon'}
            />
            <CoinPriceStat
              stat={coinPredictedRBM}
              title={`${coinName}'s predicted marketcap RBM`}
              sign={'%'}
              tooltipIconColor={'blue'}
              message={'Compared to Bitcoins current marketcap'}
            />
          </div>
          <div className=' mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 items-end'>
            <hr className='sm:hidden  my-1 w-2/3 mx-auto border-t-2  bg-gray-200' />
            <CoinPriceStat
              stat={profit.toFixed(2)}
              title={`Your profit/loss if ${coinName} went to predicted price`}
              sign2={'$'}
              tooltipIconColor={'blue'}
              message={'coming soon'}
            />
            <CoinPriceStat
              stat={xTimesProfit}
              title={'Your predicted X increase/decrease'}
              sign={'x'}
              textColor={'text-green-400'}
              tooltipIconColor={'blue'}
              message={'coming soon'}
            />
          </div>
        </div>
      ) : (
        <SectionContainer>
          <div className='text-black flex justify-center font-semibold text-lg text-center'>
            Please select a coin via search
          </div>
        </SectionContainer>
      )}
    </>
  );
}

export default YourResults;
