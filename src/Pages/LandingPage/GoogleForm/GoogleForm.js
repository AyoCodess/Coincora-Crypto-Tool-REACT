import React from 'react';
import './GoogleForm.scss';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

function GoogleForm() {
  const handleGoogleForm = (event) => {
    event.preventDefault();
    return console.log('button clicked');
  };

  return (
    <>
      <div
        className='flex flex-col justify-center items-center'
        style={{ height: '85vh' }}>
        <form
          action=''
          className='border-2 lg:pt-5 lg:w-96 rounded-full boxShadow'
          style={{ border: '2px #B2D1F3 solid' }}>
          <div className='flex flex-col justify-center items-center gap-5 p-10'>
            <label className='lg:text-5xl text-3xl text-center w-60 mt-5'>
              Enter Email
            </label>
            <div
              className='rounded-full'
              style={{ border: '2px skyblue solid' }}>
              <input
                type='email'
                style={{ border: '2px #0753FF solid' }}
                className='lg:w-60 w-48 h-10 rounded-full textFieldGoogleForm placeholder p-5 text-center'
                placeholder='Join the waiting list'
              />
            </div>

            <button
              className='
            mt-1'
              onClick={handleGoogleForm}>
              <FingerprintIcon
                style={{ fontSize: '100px', color: '#0753FF' }}
              />
            </button>
          </div>
        </form>
        <p
          className='w-full text-center text-3xl mt-10'
          style={{ color: 'lightgray' }}>
          Predict. Profit. Conquer
        </p>
      </div>
    </>
  );
}

export default GoogleForm;
