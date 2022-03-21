import React from 'react';

function SectionContainer({ children }) {
  return (
    <div className=' sectionContainerGradient flex flex-col gap-4 rounded-md shadow-md p-2 text-white coinShadow'>
      {children}
    </div>
  );
}

export default SectionContainer;
