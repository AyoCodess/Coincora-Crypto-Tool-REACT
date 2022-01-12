import React from 'react';

function DonateButton({ className, onClick, text, coinLogo, borderColor }) {
  return (
    <button
      className={`py-2 px-4 border-2 rounded-md shadow ${borderColor} hover:bg-green-500 hover:text-white hover:border-0 transition ease-in-out duration-300`}
      onClick={onClick}>
      <div className='flex gap-2 items-center'>
        <img src={coinLogo} alt='coin logo' className='w-6' />
        <span>{text}</span>
      </div>
    </button>
  );
}

export default DonateButton;
