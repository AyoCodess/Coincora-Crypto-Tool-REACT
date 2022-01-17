import { Fragment, useRef } from 'react';
import { React, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import StandardButton from '../../components/Buttons/StandardButton';
import StandardButtonDarkBGDonate from '../../components/Buttons/StandardButtonDarkBGDonate';
import ConvertBoxStablecoin from './components/ConvertBoxStablecoin';
import QrBox from './components/QrBox';
import CoinAddressBox from './components/CoinAddressBox';
import DonateForm from './components/DonateForm';

// import { Route } from 'react-router-dom';
// import SuccessPage from '../../components/SuccessPage';

export default function DonateCryptoModalStablecoin({
  open,
  setOpen,
  coinName,
  coinLogo,
  network,
  address,
  qr,
  ticker,
}) {
  const [, setConvertValue] = useState(0);
  const [coinValue] = useState(0);

  const [copiedAddress, setCopiedAddress] = useState({
    copied: false,
  });
  const [copiedCoinValue, setCopiedCoinValue] = useState({
    copied: false,
  });

  const getLink = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        style={{ zIndex: '9000' }}
        as='div'
        className='fixed inset-0 overflow-y-auto overflow-x-hidden'
        initialFocus={getLink}
        onClose={() => setOpen(true)}>
        <div className='  md:min-w-[90%] mx-auto flex items-end md:block  justify-center  p-4 text-center sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen '
            aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0  translate-y-0 scale-95'
            enterTo='opacity-100 translate-y-0 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 scale-100'
            leaveTo='opacity-0 translate-y-0 scale-95'>
            {/* //- Modal container  */}
            <div className=' overscroll-contain max-h-[90vh] overflow-y-auto max-w-[90%] mx-auto sm:my-8 sm:align-middle inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all '>
              <form
                action='https://docs.google.com/forms/u/0/d/e/1FAIpQLScTfIh7qu1Bm_UCiwnytIDETTfCoeT-6QdXobV4yN_-pP4smw/formResponse'
                method='POST'>
                <div className=' flex flex-col lg:flex-row md:gap-5 justify-center items-center bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 '>
                  <div className='flex flex-col items-center '>
                    <CoinAddressBox
                      coinLogo={coinLogo}
                      coinName={coinName}
                      address={address}
                      network={network}
                      copiedAddress={copiedAddress}
                      setCopiedAddress={setCopiedAddress}
                      setCopiedCoinValue={setCopiedCoinValue}
                      copiedCoinValue={copiedCoinValue}
                    />
                    <ConvertBoxStablecoin
                      ticker={ticker}
                      coinValue={coinValue}
                      setConvertValue={setConvertValue}
                      copiedCoinValue={copiedCoinValue}
                      setCopiedCoinValue={setCopiedCoinValue}
                      copiedAddress={copiedAddress}
                      setCopiedAddress={setCopiedAddress}
                    />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <DonateForm ticker={ticker} />
                    <p className='mt-5 text-center max-w-md'>
                      You can scan the QR code with your phone camera or use a
                      QR scanner app to copy and paste our address, so you can
                      support us.
                    </p>
                    <QrBox coinName={coinName} qr={qr} />
                  </div>
                </div>
                <div className=' bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse justify-center gap-3 mb-2'>
                  <StandardButton
                    text={'Submit'}
                    color={'bg-appBlue'}
                    width={'w-32'}
                    onSubmit={(e) => {
                      setOpen(false);
                    }}
                  />
                  <StandardButtonDarkBGDonate
                    text={'Cancel'}
                    color={'bg-gray-200'}
                    width={'w-32'}
                    onClick={(e) => {
                      setOpen(false);
                      setCopiedAddress(false);
                      setCopiedCoinValue(false);
                      setConvertValue(null);
                    }}
                  />
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
