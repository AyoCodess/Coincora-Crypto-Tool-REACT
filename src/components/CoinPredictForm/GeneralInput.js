import { CheckCircleIcon } from '@heroicons/react/solid';
import Tooltip from '../Tooltip/Tooltip';
export default function GeneralInput({ title, message, value }) {
  return (
    <div>
      <label
        htmlFor={title}
        className='block text-lg font-medium text-white-700'>
        <Tooltip message={message} title={title} textColor={'text-gray-600'} />
      </label>

      <div className='mt-1 relative rounded-md shadow-sm '>
        <input
          type='text'
          readOnly
          min={0}
          value={value}
          onWheel={(e) => e.target.blur()}
          title='title'
          id='title'
          className='block w-full p-0 text-gray-500 placeholder-appBlue bg-white focus:ring-0 sm:text-sm border-gray-200  border-[0.1rem] rounded-md px-3 py-2'
          placeholder='000,000'
        />
        <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
          <CheckCircleIcon
            className='h-5 w-5 text-appBlue'
            aria-hidden='true'
          />
        </div>
      </div>
    </div>
  );
}
