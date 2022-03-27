import React from 'react';
import StandardButtonReactRouter from '../../../components/Buttons/StandardButtonReactRouter';

export default function Todo() {
  return (
    <>
      <div className='flex justify-between sm:items-center mb-10 pb-5 border-b border-slate-400'>
        <span className='text-3xl font-bold'>Planned Features</span>
        <StandardButtonReactRouter text={'Back'} to={'/updates'} />
      </div>
      <article className=' prose prose-md max-w-full xl:max-w-6xl'>
        <h3>Major Features</h3>
        <ol>
          <div className=' flex flex-col sm:flex-row sm:gap-10 justify-between sm:sm:items-center py-2 border-b pb-3 border-slate-400'>
            <li className='sm:sm:w-[75%]  '>
              <p>
                Add 1, 2, 3 to 10 year Bitcoin average RBM forecasts so users
                can compare their predicted coins RBM to a future potential
                Bitcoin RBM based on time frames.
              </p>
              <p>
                Add 24hr, 7 day, 1 month, 3 months, 6 month, 1 year Bitcoin RBM
                changes.
              </p>
            </li>
            <span className='inline-block mb-4 sm:mb-0 w-40 text-center bg-violet-500 p-1 font-bold rounded-md text-white'>
              Need sponsorship
            </span>
          </div>
          <div className='flex flex-col sm:flex-row sm:gap-10 justify-between sm:items-center py-2 border-b pb-3 border-slate-400'>
            <li className='sm:w-[75%] '>
              <p>
                Display bitcoin's market cap as a moving average over 1 ,3, 5
                and 10 year periods. This will allow users to better assess how
                crypto currencies move against bitcoin's marketcap based on
                time-based RBM.
              </p>
              <p>
                Users will be able to pick time-frames from a drop down menu,
                make predictions based within a time-frame and they will see a
                forecasted bitcoin market cap based on historical market data.
              </p>
            </li>
            <span className='inline-block mb-4 sm:mb-0  mb-4 sm:mb-0  w-40 text-center bg-violet-500 p-1 font-bold rounded-md text-white'>
              Need sponsorship
            </span>
          </div>
          <div className='flex flex-col sm:flex-row sm:gap-10 justify-between sm:items-center py-2 border-b pb-3 border-slate-400'>
            <li className='sm:w-[75%] '>Coin verification database.</li>
            <span className='inline-block mb-4 sm:mb-0  mb-4 sm:mb-0  w-40 text-center bg-violet-500 p-1 font-bold rounded-md text-white'>
              Need sponsorship
            </span>
          </div>
        </ol>
        <h3>Minor Features</h3>
        <ol>
          <div className='flex flex-col sm:flex-row sm:gap-10 justify-between sm:items-center py-2 border-b pb-3 border-slate-400'>
            <li className='sm:w-[75%] '>
              Convert page which will allow users to calculate usd value into
              any crypto currency via a dropdown menu.
            </li>
            <span className=' inline-block mb-4 sm:mb-0  w-40 text-center bg-orange-500 p-1 font-bold rounded-md text-white'>
              planned
            </span>
          </div>

          <div className='flex flex-col sm:flex-row sm:gap-10 justify-between sm:items-center py-2 border-b pb-3 border-slate-400'>
            <li className='sm:w-[75%] '>
              Add blue check icon in coin predict input field when information
              is entered.
            </li>
            <span className=' inline-block mb-4 sm:mb-0  w-40 text-center bg-orange-500 p-1 font-bold rounded-md text-white'>
              planned
            </span>
          </div>
        </ol>
      </article>
    </>
  );
}
