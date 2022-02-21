import React from 'react';
export default function InputWithNumGrayBoxSmall({ value, sign }) {
  return (
    <div className='w-1/2'>
      <div className=' flex rounded-md shadow-sm '>
        <input
          readOnly
          min={0}
          onWheel={(e) => e.target.blur()}
          value={value}
          type='number'
          className='font-bold text-appBlue text-3xl flex-1 px-3 py-4 rounded-none rounded-r-md focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300'
          placeholder='0.00'
        />
        <span className='text-appBlue inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50  sm:text-sm'>
          {sign}%
        </span>
      </div>
    </div>
  );
}
