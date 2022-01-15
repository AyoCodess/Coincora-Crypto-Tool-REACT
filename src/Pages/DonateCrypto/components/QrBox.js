import React from 'react';

function QrBox({ coinName, qr }) {
  return (
    <img
      className='mt-3 mx-auto p-2 shadow-md'
      style={{ width: '200px', height: '200px' }}
      src={qr}
      alt={`Coincora ${coinName} wallet address`}
    />
  );
}

export default QrBox;
