import React from 'react';

function SectionContainer({ children }) {
  return (
    <div className='flex flex-col gap-4 bg-orange-500 rounded-md shadow-md p-2 text-white coinShadow'>
      {children}
    </div>
  );
}

export default SectionContainer;
