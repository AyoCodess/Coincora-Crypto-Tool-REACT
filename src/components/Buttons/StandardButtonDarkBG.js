import React from 'react';

function StandardButtonDarkBG({ text, onClick, color, width }) {
  return (
    <button
      type='submit'
      onClick={onClick}
      className={` justify-center py-2 px-4 border border-transparent shadow-sm text-lg text-appBlue font-medium rounded-md bg-appBlue hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-500 hover:text-white ${color} ${width} `}>
      {text}
    </button>
  );
}

export default StandardButtonDarkBG;
