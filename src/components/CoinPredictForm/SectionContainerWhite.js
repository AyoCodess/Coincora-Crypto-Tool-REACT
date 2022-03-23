import React from 'react';

function SectionContainerWhite({ children }) {
  return (
    <div className=' mt-4 bg-white flex flex-col gap-4 rounded-md shadow-md p-2 text-white coinShadow'>
      {children}
    </div>
  );
}

export default SectionContainerWhite;
