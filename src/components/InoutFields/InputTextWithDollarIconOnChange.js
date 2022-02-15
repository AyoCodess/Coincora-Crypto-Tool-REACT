import { CurrencyDollarIcon } from '@heroicons/react/solid';
import React from 'react';

export default function InputTextWithDollarIcon({ value, onChange }) {
  return (
    <div className='flex relative rounded-md shadow-sm h-full w-1/2'>
      <div className='absolute inset-y-0 pr-3 flex items-center pointer-events-none'>
        <CurrencyDollarIcon
          className='h-5 w-5 text-appBlue'
          aria-hidden='true'
        />
      </div>
      <input
        min={0}
        onChange={onChange}
        value={value}
        type='number'
        className=' pb-1 ml-6 h-[2.5rem] focus:ring-indigo-500 focus:border-indigo-500 block w-[90%] pr-10 sm:text-sm border-gray-300 rounded-md'
        placeholder='000,000'
      />
    </div>
  );
}
