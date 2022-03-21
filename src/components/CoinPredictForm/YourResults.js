import Tooltip from '../Tooltip/Tooltip';
import InputTextWithDollarIconReadOnly from '../InoutFields/InputTextWithDollarIconReadOnly';
import InputTextTimesProfit from '../InoutFields/InputTextTimesProfit';
import CoinPredictHeading from './CoinPredictHeading';
import SectionContainerBlue from './SectionContainerBlue';
import SectionContainerWhite from './SectionContainerWhite';
import CoinPriceStats from './CoinPriceStats';

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
      {/* <SectionContainerWhite>
        <Tooltip
          message={'hey'}
          title={`Your profit if ${coinName} went to your predicted price is`}
          textColor={'text-appBlue'}
        />
        <InputTextWithDollarIconReadOnly value={profit} />

        <Tooltip
          message={'hey'}
          title={`Your predicted X increase is`}
          textColor={'text-appBlue'}
        />
        <InputTextTimesProfit value={xTimesProfit} />
      </SectionContainerWhite> */}
      <CoinPriceStats profit={profit} xTimesProfit={xTimesProfit} />
    </div>
  );
}

export default YourResults;
