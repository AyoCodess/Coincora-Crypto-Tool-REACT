import React from 'react';
import './GoogleForm.scss';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

function GoogleForm() {
  //   const handleGoogleForm = (event) => {
  //     event.preventDefault();
  //     return console.log('button clicked');
  //   };

  return (
    <>
      <div
        className='flex flex-col justify-center items-center'
        style={{ height: '85vh' }}>
        <form
          action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSfOljMM0BkFLBFikUm8X1Sdq3-TwJpyTtZbzmpDc1TMoo1FSQ/formResponse'
          className='border-2 lg:pt-5 lg:w-96 rounded-full boxShadow'
          style={{ border: '2px #B2D1F3 solid' }}>
          <div className='flex flex-col justify-center items-center gap-5 p-10'>
            <label className='lg:text-5xl text-3xl text-center w-60 mt-5  hover:text-blue-500 transition ease-in-out duration-700 '>
              Enter Email
            </label>
            <div
              className='rounded-full'
              style={{ border: '2px skyblue solid' }}>
              <input
                type='email'
                name='emailAddress'
                style={{ border: '2px #0753FF solid' }}
                className='lg:w-60 w-48 h-10 rounded-full textFieldGoogleForm placeholder p-5 text-center focus:outline-sky-300'
                placeholder='Join the waiting list'
              />
            </div>

            <button className='mt-1 text-appBlue hover:text-sky-300 transition ease-in-out duration-700'>
              <FingerprintIcon style={{ fontSize: '100px' }} />
            </button>
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
