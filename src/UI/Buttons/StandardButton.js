import React from 'react';

function StandardButton({ text, onClick, color, width }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={` ${color} ${width} px-3 py-3 font-bold shadow-lg text-xl  text-white hover:bg-white hover:text-appBlue transition ease-in-out duration-500`}>
      {text}
    </button>
  );
}

export default StandardButton;
