import { Fragment, useRef } from 'react';
import { React, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import StandardButton from '../../components/Buttons/StandardButton';
import axios from 'axios';
import SortButton from '../../components/Buttons/SortButton';
import ConvertBox from './components/ConvertBox';
import QrBox from './components/QrBox';
import CoinAddressBox from './components/CoinAddressBox';

export default function DonateCryptoModal({
  open,
  setOpen,
  coinName,
  coinLogo,
  address,
  qr,
  ticker,
}) {
  const [convertValue, setConvertValue] = useState(0);
  const [coinValue, setCoinValue] = useState(0);
  const [currency, setCurrency] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const apiCall = async () => {
    try {
      // - Calling api to get 1 unit of fiat currency in quoted coin current price.
      const response = await axios(
        'https://api.coingecko.com/api/v3/exchange_rates'
      );

      const data = response.data.rates;
      const { usd } = data;
      setCurrency(usd.value);
      setCoinValue(() => {
        return convertValue / currency;
      });
    } catch (err) {
      console.error(err.response.status);
      console.error(err.response.data.error);
    }
  };

  useEffect(() => {
    apiCall();
  }, [currency, convertValue, apiCall]);

  const getLink = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        style={{ zIndex: '9000' }}
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        initialFocus={getLink}
        onClose={setOpen}>
        <div className='flex items-end justify-center md:min-h-screen min-h-[70vh] pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
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
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
            {/* //- Modal container  */}
            <div className=' sm:my-8 sm:align-middle sm:min-h-[20vh] justify-between inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all '>
              <div className=' flex flex-col md:flex-row md:gap-5 justify-center items-center bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 '>
                <div className='flex flex-col items-center '>
                  <CoinAddressBox
                    coinLogo={coinLogo}
                    coinName={coinName}
                    address={address}
                  />
                  <ConvertBox
                    ticker={ticker}
                    coinValue={coinValue}
                    setConvertValue={setConvertValue}
                  />
                </div>
                <div className='flex flex-col justify-center'>
                  <p className='mt-5 text-center max-w-md'>
                    You can scan the QR code with your phone camera or use a QR
                    scanner app to copy and paste our address, so you can
                    support us.
                  </p>
                  <QrBox coinName={coinName} qr={qr} />
                </div>
              </div>
              <div className=' bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse justify-center gap-3 mb-2'>
                <StandardButton
                  text={'Done'}
                  color={'bg-appBlue'}
                  width={'w-32'}
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
