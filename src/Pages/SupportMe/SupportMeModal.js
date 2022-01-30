import { Fragment, useEffect } from 'react';
import { React, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import StandardButton from '../../components/Buttons/StandardButton';

import ConvertBox from './components/ConvertBox';
import QrBox from './components/QrBox';
import CoinAddressBox from './components/CoinAddressBox';
import DonateForm from './components/DonateForm';
import AlinkStandardButton from '../../components/Buttons/AlinkStandardButton';

import axios from 'axios';

export default function SupportMeModal({
  open,
  setOpen,
  coinName,
  coinNameApi,
  coinLogo,
  network,
  address,
  qr,
  ticker,
  baseCurrency,
  setBaseCurrency,
}) {
  const [copiedAddress, setCopiedAddress] = useState({
    copied: false,
  });
  const [copiedCoinValue, setCopiedCoinValue] = useState({
    copied: false,
  });

  // - Api data handling
  const [apiCallFail, setApiCallFail] = useState(null);
  const [convertValue, setConvertValue] = useState(0);
  const [coinValue, setCoinValue] = useState(0);
  const [currency, setCurrency] = useState(0);

  // - calling api to get 1 unit of fiat currency in quoted coin current price.

  let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${baseCurrency}&ids=${coinNameApi}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const convertApi = async () => {
    try {
      const data = await axios(url);

      if (data) {
        if (data.data.length === 0) {
          console.log('true');
          setApiCallFail(true);
        } else {
          console.log(data);
          setApiCallFail(false);

          // - Coin Exchange

          const currentPrice = data.data[0].current_price;
          setCurrency(currentPrice);
          const exchange = convertValue / currentPrice;

          setCoinValue(() => {
            return exchange;
          });
        }
      } else {
        setApiCallFail(true);
      }
    } catch (err) {
      console.log(err);
      setApiCallFail(true);
    }
  };

  useEffect(() => {
    convertApi();
  }, [coinValue, currency, coinNameApi, convertApi]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        style={{ zIndex: '9000' }}
        as='div'
        className='fixed inset-0 overflow-y-auto'
        onClose={() => setOpen(true)}>
        <div className='  flex items-end justify-center md:min-h-screen min-h-[70vh] pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
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
            <div
              id={'mod'}
              className='overscroll-contain max-h-[90vh] overflow-y-auto max-w-[90%] mx-auto sm:my-8 sm:align-middle inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all '>
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
                    {!apiCallFail && (
                      <ConvertBox
                        ticker={ticker}
                        coinValue={coinValue}
                        setConvertValue={setConvertValue}
                        copiedCoinValue={copiedCoinValue}
                        setCopiedCoinValue={setCopiedCoinValue}
                        copiedAddress={copiedAddress}
                        setCopiedAddress={setCopiedAddress}
                        baseCurrency={baseCurrency}
                        setBaseCurrency={setBaseCurrency}
                        apiCallFail={apiCallFail}
                        setApiCallFail={setApiCallFail}
                        // exchange={exchange}
                      />
                    )}
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
                  <AlinkStandardButton
                    text={'Cancel'}
                    color={'bg-gray-300'}
                    width={'w-32'}
                    onClick={() => {
                      setOpen(false);
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
