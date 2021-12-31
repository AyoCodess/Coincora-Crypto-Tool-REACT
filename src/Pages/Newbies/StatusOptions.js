import React from 'react';

function StatusOptions({ item }) {
  return (
    <div className='flex justify-between items-center mt-3 mb-2'>
      <div className='p-1  text-2xl 2xl:text-[1.35rem] text-gray-700 my-2'>
        {item.title}
      </div>
      {item.status === 'Must have' && (
        <div className='mr-4 p-2  rounded-full font-bold text-xs  bg-red-500 text-white text-center shadow-md'>
          {item.status}
        </div>
      )}
      {item.status === 'Optional' && (
        <div className='mr-4 p-2  rounded-full font-bold text-xs  bg-green-500 text-white text-center shadow-md'>
          {item.status}
        </div>
      )}
    </div>
  );
}

export default StatusOptions;
