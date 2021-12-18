import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function Capture() {
  function onChange(value) {
    console.log('Captcha value:', value);
  }

  return (
    <>
      <div className='flex justify-center'>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_GOOGLE_FORM}
          onChange={onChange}
          //   size='invisible'
        />
      </div>
    </>
  );
}
export default Capture;
