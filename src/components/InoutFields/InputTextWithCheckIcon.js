import { CheckCircleIcon } from '@heroicons/react/solid';

export default function InputTextWithCheckIcon({ value }) {
  return (
    <div className='relative rounded-md shadow-sm h-full w-1/2'>
      <input
        value={value}
        type='text'
        name='account-number'
        id='account-number'
        className=' ml-2 h-[2.5rem] focus:ring-indigo-500 focus:border-indigo-500 block w-[90%] pr-10 sm:text-sm border-gray-300 rounded-md'
        placeholder='000-00-0000'
      />
      <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
        <CheckCircleIcon className='h-5 w-5 text-appBlue' aria-hidden='true' />
      </div>
    </div>
  );
}
