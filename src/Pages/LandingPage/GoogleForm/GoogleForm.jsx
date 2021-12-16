import React from 'react';
import './GoogleForm.scss';
import { IconButton } from '@mui/material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

function GoogleForm() {
  return (
    <>
      <div
        className='flex flex-col justify-center items-center'
        style={{ height: '100vh' }}>
        <form action='' className='border-2 pt-5 w-96 rounded-full boxShadow'>
          <div className='flex flex-col justify-center items-center gap-5 p-10'>
            <label className='text-5xl text-center w-60 mt-5'>
              Enter Email
            </label>
            <input
              type='text'
              style={{ border: '2px blue solid' }}
              className='w-60 h-10 rounded-full textFieldGoogleForm placeholder-sky-600 placeholder p-5 text-center'
              placeholder='Join the waiting list'
            />

            <button
              className='
            mt-1'>
              <IconButton aria-label='fingerprint' color='primary'>
                <FingerprintIcon style={{ fontSize: '100px' }} />
              </IconButton>
            </button>
          </div>
        </form>
        <p className='w-full text-center text-3xl mt-10'>
          Predict. Profit. Conquer
        </p>
      </div>
    </>
  );
}

export default GoogleForm;
