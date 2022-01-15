import React from 'react';

function StandardButtonDarkBGDonate({ text, onClick, color, width }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={` justify-center py-2 px-4 border border-transparent shadow-sm text-lg text-appBlue font-medium rounded-md bg-appBlue  ${color} ${width} `}>
      {text}
    </button>
  );
}

export default StandardButtonDarkBGDonate;
