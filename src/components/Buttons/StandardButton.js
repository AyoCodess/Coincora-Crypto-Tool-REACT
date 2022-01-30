import React from 'react';

function StandardButton({
  text,
  onClick,
  onSubmit,
  color,
  width,
  textColor,
  textColorHover,
}) {
  return (
    <button
      style={{ cursor: 'pointer' }}
      type='submit'
      onClick={onClick}
      onSubmit={onSubmit}
      className={` ${textColor} justify-center py-2 px-4 border border-transparent shadow-sm text-lg text-white font-medium rounded-md bg-appBlue  ${color} ${width}  ${textColorHover} `}>
      {text}
    </button>
  );
}

export default StandardButton;
