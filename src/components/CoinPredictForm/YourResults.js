import Tooltip from '../Tooltip/Tooltip';
import InputTextWithDollarIconReadOnly from '../InoutFields/InputTextWithDollarIconReadOnly';
import InputTextTimesProfit from '../InoutFields/InputTextTimesProfit';
import CoinPredictHeading from './CoinPredictHeading';
import SectionContainerBlue from './SectionContainerBlue';
import SectionContainerWhite from './SectionContainerWhite';
import CoinPriceStat from './CoinPriceStat';
import SectionContainer from './SectionContainer';

function YourResults({
  coinName,
  coinRBM,
  coinPredictedRBM,
  profit,
  xTimesProfit,
  selectedFromDropdown,
}) {
  console.log({ selectedFromDropdown });
  return (
    <>
      <CoinPredictHeading
        title={'The Results'}
        subHeading={'Here it is, behold your forecast results.'}
      />
      {selectedFromDropdown && selectedFromDropdown.name !== 'Select Coin' ? (
        <div>
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
