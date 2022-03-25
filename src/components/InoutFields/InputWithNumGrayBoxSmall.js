import React from 'react';
export default function InputWithNumGrayBoxSmall({ value, sign }) {
  return (
    <div className='w-1/2'>
      <div className=' flex rounded-md shadow-sm bg-white p-1 mr-3 border border-gray-200 text-appBlue font-semibold '>
        <div className='p-1'>{value}%</div>
      </div>
    </div>
  );
}
