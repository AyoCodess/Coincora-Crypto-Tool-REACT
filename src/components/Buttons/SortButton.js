import React from 'react';

function SortButton({ onClick, text, setMustHave, setOptional, active }) {
  return (
    <button
      style={{
        backgroundColor: active ? '#0554FE' : '',
        color: active ? 'white' : ' ',
        cursor: 'pointer',
      }}
      onClick={onClick}
      type='button'
      className='text-sm md:text-lg p-1 md:p-2 rounded-md border-2 border-gray-300 shadow-md hover:bg-appBlue hover:text-white transition duration-500 ease-in-out'>
      {text}
    </button>
  );
}

export default SortButton;
