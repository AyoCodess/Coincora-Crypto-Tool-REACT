import Tooltip from '../Tooltip/Tooltip';
import CoinLogoDisplay from './CoinLogoDisplay';

import { CurrencyDollarIcon } from '@heroicons/react/solid';

function CoinInformationDisplay({
  selectedFromDropdown,
  data,
  value,
  sign,
  sign2,
  title,
  message,
  coinLogo,
  icon,
  onChange,
  inputType,
}) {
  return (
    <div>
      <label
        htmlFor={title}
        className='block text-lg font-medium text-white-700'>
        <Tooltip message={message} title={title} textColor={'text-gray-600'} />
      </label>
      <div className='text-black p-1 border border-gray-200 shadow rounded-md bg-white'>
        <div className='flex gap-2 items-center px-2'>
          {coinLogo && (
            <CoinLogoDisplay
              selectedFromDropdown={selectedFromDropdown}
              data={data}
              height={'h-6'}
              width={'w-6'}
            />
          )}
          {!coinLogo && icon === 'dollarIcon' && (
            <CurrencyDollarIcon
              className='h-5 w-5 text-appBlue'
              aria-hidden='true'
            />
          )}
          <input
            type={inputType}
            className='p-2'
            onChange={onChange}
            placeholder='000.000'
          />
        </div>
      </div>
    </div>
  );
}

export default CoinInformationDisplay;
