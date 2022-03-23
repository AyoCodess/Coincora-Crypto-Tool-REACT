import Tooltip from '../Tooltip/Tooltip';
import InputTextWithDollarIconReadOnly from '../InoutFields/InputTextWithDollarIconReadOnly';
import InputTextTimesProfit from '../InoutFields/InputTextTimesProfit';
import CoinPredictHeading from './CoinPredictHeading';
import SectionContainerBlue from './SectionContainerBlue';
import SectionContainerWhite from './SectionContainerWhite';
import CoinPriceStat from './CoinPriceStat';

function YourResults({
  coinName,
  coinRBM,
  coinPredictedRBM,
  profit,
  xTimesProfit,
}) {
  return (
    <div>
      <CoinPredictHeading
        title={'The Results'}
        subHeading={'Here it is, behold your forecast results.'}
      />
      <SectionContainerBlue>
        <div className='flex items-center'>
          <div>
            <span>
              {coinName}'s current market cap is
              <span className='font-bold text-xl text-white'>
                {' '}
                {coinRBM}%&nbsp;
              </span>
              of Bitcoins current market cap (RBM)
            </span>
          </div>
          <Tooltip message={'hey'} />
        </div>
        <div className='flex items-center'>
          <div>
            <span>
              {coinName}'s predicted market cap is
              <span className='font-bold text-xl text-white'>
                {' '}
                {coinPredictedRBM}%&nbsp;
              </span>
              of Bitcoins current market cap (RBM)
            </span>
          </div>
          <Tooltip message={'hey'} />
        </div>
      </SectionContainerBlue>
      <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 items-end'>
        <CoinPriceStat
          stat={profit}
          title={'Your profit if Select Coin went to your predicted price is'}
          sign2={'$'}
        />
        <CoinPriceStat
          stat={xTimesProfit}
          title={'Your predicted X increase is'}
          sign={'x'}
          textColor={'text-green-400'}
        />
      </div>
    </div>
  );
}

export default YourResults;
