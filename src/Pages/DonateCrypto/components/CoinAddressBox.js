import { React } from 'react';
import { Dialog } from '@headlessui/react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

function CoinAddressBox({
  coinLogo,
  coinName,
  address,
  network,
  copiedCoinValue,
  setCopiedCoinValue,
  copiedAddress,
  setCopiedAddress,
}) {
  return (
    <div className='sm:flex items-start sm:mt-5  '>
      <div className='flex flex-col items-center '>
        <div className='mx-auto flex-shrink-0 flex justify-center h-12 w-12 rounded-full bg-white  sm:h-10 sm:w-10 '>
          <img
            src={coinLogo}
            alt={`${coinName} logo`}
            style={{ fontSize: '50px' }}
          />
        </div>
        <div className='mt-7 text-start sm:text-left'>
          <Dialog.Title
            as='h3'
            className='text-3xl text-center leading-6  text-gray-900 mb-5'>
            {coinName}
          </Dialog.Title>
        </div>
        <div className='mt-2'>
          <div className='flex flex-col gap-4 items-center'>
            <input
              value={address}
              readOnly
              name='entry.180076200'
              className='  text-sm text-gray-700 border-b-2 text-center border-appBlue pb-3 w-[310px]  outline-none'
            />
            <div className='flex items-center gap-2'>
              <span className='font-bold'>Address Network: </span>
              <span className='text-red-500 font-bold text-2xl'>{network}</span>
            </div>
            <div>
              <CopyToClipboard
                text={address}
                onCopy={() => {
                  setCopiedAddress({ copied: true });
                  setCopiedCoinValue({ copied: false });
                }}>
                <span className=' inline-block  text-lg p-2 rounded-md border-2 border-gray-300 shadow-md hover:bg-appBlue hover:text-white transition duration-500 ease-in-out'>
                  Copy Address
                </span>
              </CopyToClipboard>
              {copiedAddress.copied && !copiedCoinValue.copied === true && (
                <span className='ml-2 text-red-500'>copied</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinAddressBox;
