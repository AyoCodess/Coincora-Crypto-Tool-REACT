import React from 'react';

function DonateButton({
  className,
  onClick,
  text,
  coinLogo,
  borderColor,
  textColorHover,
}) {
  return (
    <button
      style={{ cursor: 'pointer' }}
      className={`py-2 w-32 px-4 border-2 rounded-md shadow ${borderColor} ${textColorHover} `}
      onClick={onClick}>
      <div className='flex gap-2 justify-center items-center'>
        <img src={coinLogo} alt='coin logo' className='w-6' />
        <span>{text}</span>
      </div>
    </button>
  );
}

export default DonateButton;
