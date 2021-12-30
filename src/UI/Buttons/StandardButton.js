import React from 'react';

function StandardButton({ text, onClick }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className=' w-32 px-3 py-3 font-bold  shadow-lg text-xl bg-gray-400    text-white hover:bg-white hover:text-appBlue transition ease-in-out duration-500 '>
      {text}
    </button>
  );
}

export default StandardButton;
