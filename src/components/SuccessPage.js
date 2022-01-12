import React from 'react';
import logo from '../assets/coinLogos/bitcoin-btc-logo.png';

function SuccessPage() {
  return (
    <div className='grid place-items-center h-screen  mx-auto'>
      <div className='flex gap-3 rounded-md  p-5 shadow-lg text-3xl'>
        <img src={logo} className=' w-10' />
        <div style={{ color: '#74789E' }}>Success, Thank you for donating.</div>
      </div>
    </div>
  );
}

export default SuccessPage;
