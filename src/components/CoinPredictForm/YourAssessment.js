import Tooltip from '../Tooltip/Tooltip';
import InputWithNumGrayBoxSmall from '../InoutFields/InputWithNumGrayBoxSmall';

function YourAssessment({
  top10CryptoRBM,
  top50CryptoRBM,
  top100CryptoRBM,
  top500CryptoRBM,
  top1000CryptoRBM,
  ethRBM,
  coinName,
  coinCurrentRBM,
  coinPredictedRBM,
}) {
  return (
    <div>
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
    </div>
  );
}

export default YourAssessment;
