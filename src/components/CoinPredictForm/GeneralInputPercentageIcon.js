import { CheckCircleIcon } from '@heroicons/react/solid';
import Tooltip from '../Tooltip/Tooltip';
export default function GeneralInputPercentageIcon({ name, message, value }) {
  return (
    <div>
      <label
        htmlFor={name}
        className='block text-lg font-medium text-white-700'>
        <Tooltip message={message} title={name} />
      </label>

      <div className='mt-1 relative rounded-md shadow-sm '>
        <input
          type='text'
          readOnly
          min={0}
          value={value}
          onWheel={(e) => e.target.blur()}
          name='name'
          id='name'
          className=' font-bold block w-full p-0 text-white placeholder-white bg-transparent focus:ring-0 sm:text-sm border-white border-[0.1rem] rounded-md px-3 py-2'
          placeholder='000,000'
        />
        <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
          <span className='h-5 w-5 text-white font-bold' aria-hidden='true'>
            %
          </span>
        </div>
      </div>
    </div>
  );
}
