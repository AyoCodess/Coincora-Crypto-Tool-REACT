import React from 'react';
import './GoogleForm.scss';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Capture from '../Capture/Capture';

function GoogleForm() {
  const recaptchaRef = React.createRef();
  return (
    <>
      <div
        className='flex flex-col justify-center items-center'
        style={{ height: '85vh' }}>
        <form
          onSubmit={(e) => {
            console.log({ e });
            recaptchaRef.current.execute();
            console.log('sent');
            fetch(
              'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfOljMM0BkFLBFikUm8X1Sdq3-TwJpyTtZbzmpDc1TMoo1FSQ/formResponse',
              {
                method: 'POST',
              }
            );
          }}
          //   action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSfOljMM0BkFLBFikUm8X1Sdq3-TwJpyTtZbzmpDc1TMoo1FSQ/formResponse'
        >
          <div className='border-2 lg:pt-5 lg:w-96 rounded-full boxShadow border-2 border-gray-200'>
            <div className='flex flex-col justify-center items-center gap-5 p-10'>
              <label className='lg:text-5xl text-3xl text-center w-60 mt-5  hover:text-blue-500 text-gray-400 transition ease-in-out duration-700 '>
                Enter Email
              </label>
              <div
                className='rounded-full'
                style={{ border: '2px skyblue solid' }}>
                <input
                  type='email'
                  required
                  name='emailAddress'
                  className='lg:w-60 w-48 h-10 rounded-full textFieldGoogleForm placeholder p-5 text-center focus:outline-sky-300 border-appBlue border-2'
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
          <Capture />
        </form>
        <p className='w-full text-center text-3xl mt-10 text-gray-300 hover:text-gray-500 transition ease-in-out duration-700'>
          Predict. Profit. Conquer
        </p>
      </div>
    </>
  );
}

export default GoogleForm;
