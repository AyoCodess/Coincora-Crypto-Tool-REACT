import React from 'react';

function StandardButtonTypeButton({
  text,
  onClick,
  color,
  width,
  textColor,
  textColorHover,
}) {
  return (
    <button
      style={{ cursor: 'pointer' }}
      type='button'
      onClick={onClick}
      className={` ${textColor} justify-center py-2 px-4 border border-transparent shadow-sm text-lg text-white font-medium rounded-md bg-appBlue  hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-500  ${color} ${width}  ${textColorHover} `}>
      {text}
    </button>
  );
}

export default StandardButtonTypeButton;
