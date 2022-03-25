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
  if (coinPredictedRBM > 0) setIsResults(true);
  return (
    <>
      <CoinPredictHeading
        title={'The Results'}
        subHeading={'Here it is, behold your forecast results.'}
      />
      {selectedFromDropdown && selectedFromDropdown.name !== 'Select Coin' ? (
        <div>
          <SectionContainer>
            <div className='flex gap-5 items-center justify-between'>
              <YesNoToggle
                text={`View Crypto Market RBM's `}
                state={viewMarketRBM}
                setState={setViewMarketRBM}
                disabled={selectedFromDropdown}
              />
              <AlinkStandardButton
                href={'https://www.coincora.com/knowledge-base/what-is-RBM'}
                text={'What is RBM?'}
                width={'w-40'}
                height={null}
                color={'bg-appBlue'}
                margin={'mr-3'}
              />
            </div>

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
              stat={coinRBM}
              title={`${coinName}'s current marketcap RBM`}
              sign={'%'}
              tooltipIconColor={'blue'}
            />
            <CoinPriceStat
              stat={coinPredictedRBM}
              title={`${coinName}'s predicted marketcap RBM`}
              sign={'%'}
              tooltipIconColor={'blue'}
            />
          </div>
          <div className=' mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 items-end'>
            <hr className='sm:hidden  my-1 w-2/3 mx-auto border-t-2  bg-gray-200' />
            <CoinPriceStat
              stat={profit}
              title={`Your profit if ${coinName} went to predicted price`}
              sign2={'$'}
              tooltipIconColor={'blue'}
            />
            <CoinPriceStat
              stat={xTimesProfit}
              title={'Your predicted X increase'}
              sign={'x'}
              textColor={'text-green-400'}
              tooltipIconColor={'blue'}
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
