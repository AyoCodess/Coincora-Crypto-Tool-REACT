import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

export default function InputTextWithCheckIcon({ value }) {
  return (
    <div className='relative rounded-md shadow-sm h-full w-1/2'>
      <input
        min={0}
        value={value}
        type='number'
        className=' ml-2 h-[2.5rem] focus:ring-indigo-500 focus:border-indigo-500 block w-[90%] pr-10 sm:text-sm border-gray-300 rounded-md'
        placeholder='000,000'
      />
    </div>
  );
}
