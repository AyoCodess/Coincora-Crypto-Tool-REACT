import { CheckCircleIcon } from '@heroicons/react/solid';
import { CurrencyDollarIcon } from '@heroicons/react/solid';
import Tooltip from '../Tooltip/Tooltip';
export default function GeneralInputDollarIconOnChange({
  title,
  message,
  value,
  onChange,
}) {
  return (
    <div>
      <label
        htmlFor={title}
        className='block text-lg font-medium text-white-700'>
        <Tooltip message={message} title={title} textColor={'text-gray-600'} />
      </label>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <CurrencyDollarIcon
            className='h-5 w-5 text-appBlue'
            aria-hidden='true'
          />
        </div>
        <input
          type='number'
          onChange={onChange}
          min={0}
          value={value}
          onWheel={(e) => e.target.blur()}
          title='title'
          id='title'
          className='pl-10 block w-full p-0 text-gray-500  placeholder-appBlue bg-white focus:ring-0 sm:text-sm border-gray-200  border-[0.1rem] rounded-md px-3 py-2'
          placeholder='000,000'
        />
      </div>
    </div>
  );
}
