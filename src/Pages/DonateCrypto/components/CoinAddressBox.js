import React from 'react';
import { Dialog } from '@headlessui/react';
import SortButton from '../../../components/Buttons/SortButton';

function CoinAddressBox({ coinLogo, coinName, address }) {
  return (
    <div className='sm:flex items-start sm:mt-5  '>
      <div className='flex flex-col items-center  '>
        <div className='mx-auto flex-shrink-0 flex justify-center h-12 w-12 rounded-full bg-white  sm:h-10 sm:w-10 '>
          <img src={coinLogo} style={{ fontSize: '50px' }} />
        </div>
        <div className='mt-7 text-start sm:ml-4 sm:text-left'>
          <Dialog.Title
            as='h3'
            className='text-3xl text-center leading-6  text-gray-900 mb-5'>
            {coinName}
          </Dialog.Title>
        </div>
        <div className='mt-2'>
          <div className='flex flex-col gap-4 items-center'>
            <p className='text-sm text-gray-700 border-b-2 border-appBlue pb-3'>
              {address}
            </p>
            <SortButton text={'Copy Address'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinAddressBox;
