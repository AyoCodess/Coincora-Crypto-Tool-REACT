import React, { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import InputWithNumGrayBoxSmall from '../InoutFields/InputWithNumGrayBoxSmall';

export default function RMBlist({
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
    <>
      <div className='  '>
        <div className=' flex flex-col  shadow overflow-hidden sm:rounded-lg pb-3'>
          <p className='px-3 mb-1'>
            These averages do not include Ethermeum producing more realistic and
            accurate data.
          </p>
          <div className='flex items-center'>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              <Tooltip
                message={`Top 10 crypto's RMB`}
                title={`Top 10 crypto's RMB`}
              />
            </div>
            <InputWithNumGrayBoxSmall value={top10CryptoRBM} />
          </div>
          <div className='flex items-center '>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              <Tooltip
                message={`Top 50 crypto's RMB`}
                title={`Top 50 crypto's RMB`}
              />
            </div>
            <InputWithNumGrayBoxSmall value={top50CryptoRBM} />
          </div>
          <div className='flex items-center'>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              <Tooltip
                message={`Top 100 crypto's RMB`}
                title={`Top 100 crypto's RMB`}
              />
            </div>
            <InputWithNumGrayBoxSmall value={top100CryptoRBM} />
          </div>
          <div className='flex items-center'>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              <Tooltip
                message={`Top 500 crypto's RMB`}
                title={`Top 500 crypto's RMB`}
              />
            </div>
            <InputWithNumGrayBoxSmall value={top500CryptoRBM} />
          </div>
          <div className='flex items-center'>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              <Tooltip
                message={`Top 1000 crypto's RMB`}
                title={`Top 1000 crypto's RMB`}
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
          <div className='flex items-center '>
            <div className='w-[50%] px-3 py-3 text-left font-medium text-gray- bg-gray-50'>
              <Tooltip
                message={`${coinName}'s market cap in % of Bitcoins current market cap.`}
                title={`${coinName}'s RBM `}
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
    </>
  );
}
