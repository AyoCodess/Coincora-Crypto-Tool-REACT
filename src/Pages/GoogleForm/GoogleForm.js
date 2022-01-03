import React from 'react';
import './GoogleForm.scss';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

function GoogleForm() {
  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-[85vh]'>
        <form
          action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSfOljMM0BkFLBFikUm8X1Sdq3-TwJpyTtZbzmpDc1TMoo1FSQ/formResponse'
          method='POST'>
          <div className=' flex justify-center lg:pt-5 lg:w-96 xl:w-[500px] xl:h-[500px] rounded-full boxShadow border-2 border-gray-200'>
            <div className='flex flex-col justify-center items-center gap-5 p-10'>
              <label className='lg:text-5xl xl:text-7xl  text-3xl text-center w-60 xl:w-96 mt-5  hover:text-blue-500 text-gray-400 transition ease-in-out duration-700 '>
                Enter Email
              </label>
              <div className='rounded-full border-2 border-sky-400 border-solid '>
                <input
                  type='email'
                  required
                  name='emailAddress'
                  className='lg:w-60 xl:w-80 w-48 h-10 lg:text-xl  xl:text-2xl rounded-full textFieldGoogleForm placeholder p-5 text-center  hover:border-sky-300 focus:outline-sky-300 border-appBlue border-2'
                  placeholder='Join the waiting list'
                />
              </div>
              <button
                type='submit'
                className='mt-1 text-appBlue hover:text-sky-300 transition ease-in-out duration-700'>
                <FingerprintIcon style={{ fontSize: '100px' }} />
              </button>
            </div>
          </div>
          <div className='flex justify-center items-center gap-2 mt-5'>
            <span> 2 + 2 </span>
            <div className='rounded-full border-2 border-gray-200 border-solid'>
              <input
                type='number'
                required
                name='entry.1369813225'
                className='w-12 h-15 text-lg rounded-full  placeholder p-2  text-center hover:border-sky-300  focus:outline-sky-300 border-gray-200 border-2'
              />
            </div>
          </div>
        </form>
        <p className='w-full text-center text-3xl mt-10 text-gray-300 hover:text-gray-500 transition ease-in-out duration-700'>
          Predict. Profit. Conquer
        </p>
      </div>
    </>
  );
}

export default GoogleForm;
