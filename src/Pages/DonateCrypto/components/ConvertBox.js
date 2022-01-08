import React from 'react';
import SortButton from '../../../components/Buttons/SortButton';

function ConvertBox({ ticker, setConvertValue, coinValue }) {
  return (
    <>
      <div
        style={{
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        }}
        className='p-4 my-5 rounded-xl sm:w-[480px]'>
        <p className='mt-3 text-left'>
          Enter the amount you want wish you support us with below.
        </p>
        <div>
          <div className='mt-5'>
            <span className='text-2xl mr-11 font-bold'>$</span>
            <input
              onChange={(event) => {
                setConvertValue(event.target.valueAsNumber);
              }}
              type='number'
              name='convert'
              required
              className='lg:w-60 xl:w-80 w-48 h-10 lg:text-xl  xl:text-2xl rounded-full textFieldGoogleForm placeholder p-5 text-center  hover:border-sky-300 focus:outline-sky-300 border-appBlue border-2'
              placeholder='Enter amount'
            />
          </div>
          {/* <button type='submit' onClick={api}>
                                    Convert to {coinName}
                                  </button> */}
          <p className='mt-5 text-left'>
            Below is the <b>{ticker}</b> amount you wish to support us with.
          </p>
          <div className='mt-5'>
            <span className='text-2xl mr-3 font-bold'>{ticker}</span>
            <input
              type='number'
              value={coinValue}
              required
              className=' ml-3 lg:w-60 xl:w-80 w-48 h-10 lg:text-xl  xl:text-2xl rounded-full textFieldGoogleForm placeholder p-5 text-center  hover:border-sky-300 focus:outline-sky-300 border-appBlue border-2'
            />
            <div className='mt-5 ml-14'>
              <SortButton text={'Copy Amount'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConvertBox;
