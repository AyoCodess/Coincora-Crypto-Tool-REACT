import React from 'react';

function SectionContainerBlue({ children }) {
  return (
    <div className=' mt-4 gradient flex flex-col gap-4 rounded-md shadow-md p-2 text-white coinShadow'>
      {children}
    </div>
  );
}

export default SectionContainerBlue;
