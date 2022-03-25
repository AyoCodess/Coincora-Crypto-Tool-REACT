import React from 'react';

function SectionContainer({ children, margin }) {
  return (
    <div
      className={`bg-gray-50 flex flex-col gap-4 rounded-md shadow-md p-2 text-black  ${margin}`}>
      {children}
    </div>
  );
}

export default SectionContainer;
