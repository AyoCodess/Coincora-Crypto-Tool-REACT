/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';
import CoinLogoDisplay from './CoinLogoDisplay';
import {
  CursorClickIcon,
  MailOpenIcon,
  UsersIcon,
} from '@heroicons/react/outline';

import DataContext from '../../Context/context';
import { useContext } from 'react';

import { XIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CoinPriceStats({ profit, xTimesProfit }) {
  const { data, selectedFromDropdown } = useContext(DataContext);
  return (
    <div>
      <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2'>
        <div className='relative bg-white pt-5 px-4  sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden'>
          <div>
            {data && (
              <div className='absolute rounded-md '>
                <CoinLogoDisplay
                  height={'h-8'}
                  width={'w-8'}
                  data={data}
                  selectedFromDropdown={selectedFromDropdown}
                />
              </div>
            )}
            {!data && (
              <div className='absolute bg-indigo-500 rounded-md p-3'>
                <UsersIcon className='h-6 w-6 text-white' aria-hidden='true' />
              </div>
            )}
            <p className='ml-16 text-sm font-medium text-gray-500 truncate'>
              Your profit if Select Coin went to your predicted price is
            </p>
          </div>
          <dd className='ml-16 pb-6 flex items-baseline sm:pb-7'>
            <p className='text-2xl font-semibold text-gray-900'>
              {profit ? <div>0.00</div> : profit}
            </p>
          </dd>
        </div>
        <div className='relative bg-white pt-5 px-4  sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden'>
          <dt>
            <div className='absolute rounded-md '>
              {data && (
                <div className='absolute rounded-md '>
                  <CoinLogoDisplay
                    height={'h-8'}
                    width={'w-8'}
                    data={data}
                    selectedFromDropdown={selectedFromDropdown}
                  />
                </div>
              )}
              {!data && (
                <div className='absolute bg-indigo-500 rounded-md p-3'>
                  <UsersIcon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
              )}
            </div>
            <p className='ml-16 text-sm font-medium text-gray-500 truncate'>
              Your predicted X increase is
            </p>
          </dt>
          <dd className='ml-16 pb-6 flex items-baseline sm:pb-7'>
            <p className='text-2xl font-semibold text-gray-900 pal'>
              <div className='flex gap-4 items-center'>
                {/* <XIcon
                  className='h-6 w-5 text-green-500  '
                  aria-hidden='true'
                /> */}
                <div className='text-green-500'>
                  {!xTimesProfit ? (
                    <div className='text-green-500'>0.00</div>
                  ) : (
                    xTimesProfit
                  )}
                </div>
              </div>
            </p>
          </dd>
        </div>
      </div>
    </div>
  );
}
