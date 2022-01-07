import { Fragment, useRef } from 'react';
import { React, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import StandardButton from '../../components/Buttons/StandardButton';
import axios from 'axios';

export default function DonateCryptoModal({
  open,
  setOpen,
  coinName,
  info,
  address,
  qr,
  thankyouMessage,
}) {
  const [convertValue, setConvertValue] = useState(0);
  const [coinValue, setCoinValue] = useState(5);

  const api = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log('convert');

    try {
      // - Calling api to get 1 unit of fiat currency in quoted coin current price.
      const response = await axios.get(
        'https://rest.coinapi.io/v1/exchangerate/USD/BTC?apikey=35357289-7F5A-4801-9777-DF2C0FA616A4'
      );
      const data = response.data;
      const { time, asset_id_base, asset_id_quote, rate } = data;

      setCoinValue(() => {
        console.log(convertValue * rate);
        return convertValue * rate;
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  };

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
            <div className=' w-96  justify-between inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:min-h-[20vh] sm:w-full'>
              <div>
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start sm:mt-5'>
                    <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10 '>
                      <EmojiEmotionsIcon
                        color={'yellow'}
                        style={{ fontSize: '50px' }}
                      />
                    </div>
                    <div className='mt-7 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-3xl leading-6  text-gray-900 mb-5'>
                        {coinName}
                      </Dialog.Title>
                      <div className='mt-2'>
                        <p className='text-2xl text-gray-700'>{info}</p>
                        <p>{thankyouMessage}</p>
                        <div>
                          <span className='text-2xl mr-3 font-bold'>$</span>
                          <input
                            onChange={(e) => {
                              setConvertValue(e.target.value);
                            }}
                            type='number'
                            name='convert'
                            required
                            className='lg:w-60 xl:w-80 w-48 h-10 lg:text-xl  xl:text-2xl rounded-full textFieldGoogleForm placeholder p-5 text-center  hover:border-sky-300 focus:outline-sky-300 border-appBlue border-2'
                            placeholder='in put dollar amount you want to donate'
                          />
                          <button type='submit' onClick={api}>
                            Convert to {coinName}
                          </button>

                          <input
                            type='number'
                            value={coinValue}
                            required
                            className=' ml-7 lg:w-60 xl:w-80 w-48 h-10 lg:text-xl  xl:text-2xl rounded-full textFieldGoogleForm placeholder p-5 text-center  hover:border-sky-300 focus:outline-sky-300 border-appBlue border-2'
                            placeholder='in put dollar amount you want to donate'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=' bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse justify-center gap-3 mb-2'>
                  <StandardButton
                    text={'Get Link'}
                    color={'bg-appBlue'}
                    width={'w-32'}
                  />

                  <StandardButton
                    text={'Cancel'}
                    color={'bg-gray-300'}
                    width={'w-32'}
                    onClick={() => setOpen(false)}
                  />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
