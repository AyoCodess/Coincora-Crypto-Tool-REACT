import AlinkStandardButton from '../Buttons/AlinkStandardButton';
import Tooltip from '../Tooltip/Tooltip';
import InputTextWithDollarIconReadOnly from '../InoutFields/InputTextWithDollarIconReadOnly';
import InputTextTimesProfit from '../InoutFields/InputTextTimesProfit';

function YourResults({
  coinName,
  coinRBM,
  coinPredictedRBM,
  profit,
  xTimesProfit,
}) {
  return (
    <div>
      <div className='prose  mt-5 border-t-2 border-appBlue pt-2'>
        <h4>The Results</h4>
        <p>Here it is, behold your forecast results.</p>
        <AlinkStandardButton
          text={'What is RBM'}
          href={'https://www.beta.coincora.com/knowledge-base/what-is-RBM'}
          width={'w-32'}
          color={'bg-appBlue'}
        />
      </div>
      <div className='flex flex-col mt-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
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
            <Tooltip message={'hey'} title={`Your predicted X increase is`} />
          </div>
          <InputTextTimesProfit value={xTimesProfit} />
        </div>
      </div>
    </div>
  );
}

export default YourResults;
