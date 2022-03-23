/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';
import { CurrencyDollarIcon } from '@heroicons/react/solid';
import CoinLogoDisplay from './CoinLogoDisplay';
import {
  CursorClickIcon,
  MailOpenIcon,
  UsersIcon,
} from '@heroicons/react/outline';

import DataContext from '../../Context/context';
import { useContext } from 'react';
import Tooltip from '../Tooltip/Tooltip';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CoinPriceStat({
  stat,
  text,
  sign,
  sign2,
  textColor,
  title,
  message,
  tooltipIconColor,
}) {
  const { data, selectedFromDropdown } = useContext(DataContext);
  return (
    <div>
      <Tooltip
        message={(message = 'hey')}
        title={title}
        button={false}
        textColor={null}
        customTextClasses={'text-lg font-semibold'}
        tooltipIconColor={tooltipIconColor}
      />
      <div className='mt-2 relative bg-white  px-4   sm:px-6 shadow rounded-lg overflow-hidden'>
        <dt>
          <div className='absolute rounded-md '>
            {data && (
              <div className='absolute top-4 rounded-md '>
                <CoinLogoDisplay
                  height={'h-8'}
                  width={'w-8'}
                  data={data}
                  selectedFromDropdown={selectedFromDropdown}
                />
              </div>
            )}
            {!data && (
              <div className='absolute top-4 bg-orange-500 rounded-md p-3'>
                <UsersIcon className='h-6 w-6 text-white' aria-hidden='true' />
              </div>
            )}
          </div>
          <p className='ml-16 text-lg font-medium'>{text}</p>
        </dt>
        <dd className='ml-16 py-6 flex sm:py-7'>
          <p className='text-2xl font-semibold text-gray-900 pal'>
            <div>
              {!stat ||
              stat === undefined ||
              stat === '' ||
              typeof stat === 'string' ? (
                <p className={` text-black ${textColor}`}>
                  {sign2} 0.00 {sign}
                </p>
              ) : (
                <p
                  className={` text-black ${textColor}`}>{`${sign2} ${stat} ${sign}`}</p>
              )}
            </div>
          </p>
        </dd>
      </div>
    </div>
  );
}
