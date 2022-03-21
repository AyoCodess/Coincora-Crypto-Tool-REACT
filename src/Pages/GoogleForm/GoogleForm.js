import React from 'react';
import './GoogleForm.scss';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import btcFavicon from '../../assets/other/logolong.png';

import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';

function GoogleForm() {
  return (
    <>
      {/* //- desktop  */}
      <div className=' hidden md:flex flex-col justify-center items-center min-h-[75vh]'>
        <p className='w-full text-center text-3xl mb-10 text-gray-600 hover:text-gray-600 transition ease-in-out duration-700'>
          Lowering risk and ambiguity in crypto-investing
        </p>
        <form
          action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSfOljMM0BkFLBFikUm8X1Sdq3-TwJpyTtZbzmpDc1TMoo1FSQ/formResponse'
          method='POST'>
          <div className=' flex justify-center pt-5 w-[500px] h-[500px] rounded-full boxShadow border-2 border-gray-200'>
            <div className='flex flex-col justify-center items-center gap-5 p-10'>
              <label className=' text-7xl text-center w-96 mt-5  hover:text-gray-400 text-appBlue transition ease-in-out duration-700 '>
                Enter Email
              </label>
              <div className='rounded-full border-2 border-blue-300 border-solid '>
                <input
                  type='email'
                  required
                  name='emailAddress'
                  className=' w-80 h-10  text-2xl rounded-full textFieldGoogleForm placeholder p-5 text-center  hover:border-sky-300 focus:outline-sky-300 border-appBlue border-2'
                  placeholder='join our BETA V.1 waiting list'
                />
              </div>
              <button
                type='submit'
                className='mt-1 text-orange-500 hover:text-appBlue transition ease-in-out duration-700'>
                <FingerprintIcon style={{ fontSize: '100px' }} />
              </button>
            </div>
          </div>
          {/* <div className='flex justify-center items-center gap-2 mt-5'>
            <span> 2 + 2 </span>
            <div className='rounded-full border-2 border-gray-200 border-solid'>
              <input
                type='number'
                required
                name='entry.1369813225'
                className='w-12 h-15 text-lg rounded-full  placeholder p-2  text-center hover:border-sky-300  focus:outline-sky-300 border-gray-200 border-2'
              />
            </div>
          </div> */}
        </form>
      </div>
      {/*
      // -mobile */}
      <div className='relative  md:hidden bg-white pt-16 sm:pt-24 '>
        <div className='mx-auto max-w-md px-2 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='mt-12'>
            <div className='pt-6'>
              <div className='flow-root rounded-lg bg-gray-50 px-6 pb-4'>
                <div className='-mt-10'>
                  <div>
                    <img
                      alt='coincora logo'
                      src={btcFavicon}
                      className='inline-flex items-center justify-center rounded-md  mb-5 p-3 shadow-lg'
                    />
                  </div>
                  <p className='mt-2 text-xl tracking-tight text-gray-500 sm:text-4xl'>
                    Lowering risk and ambiguity in crypto-investing
                  </p>

                  {/* <p className='mx-auto mt-5 max-w-prose text-xl text-gray-500'>
                      Phasellus lorem quam molestie id quisque diam aenean nulla
                      in. Accumsan in quis quis nunc, ullamcorper malesuada.
                      Eleifend condimentum id viverra nulla.
                    </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' md:hidden mt-4 flex flex-col justify-center items-center gap-5 '>
        {/* <label className='text-center w-60 xl:w-96 mt-5  hover:text-gray-400 text-appBlue transition ease-in-out duration-700 '>
          Enter Email
        </label> */}
        <div className='rounded-full border-2 border-blue-300 border-solid '>
          <input
            type='email'
            required
            name='emailAddress'
            className='w-60 sm:w-80 h-10 rounded-full textFieldGoogleForm placeholder p-5 text-center  hover:border-sky-300 focus:outline-sky-300 border-appBlue border-2'
            placeholder='join our BETA V.1 waiting list'
          />
        </div>
        <button
          type='submit'
          className='mt-1 text-orange-500 hover:text-appBlue transition ease-in-out duration-700'>
          <FingerprintIcon style={{ fontSize: '100px' }} />
        </button>
      </div>
    </>
  );
}

export default GoogleForm;
