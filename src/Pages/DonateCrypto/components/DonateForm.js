import React from 'react';

function DonateForm() {
  return (
    <div className='flex flex-col mx-auto mt-5'>
      <h2 className='font-bold text-xl px-5'>Share your details (optional)</h2>
      <div className='p-5 flex gap-4 items-center'>
        <input
          type='text'
          name='name'
          className='  w-40 md:w-48  h-10  text-sm rounded-full textFieldGoogleForm placeholder p-5 text-center  hover:border-sky-300 focus:outline-sky-300 border-appBlue border-2'
          placeholder='Your Name'
        />
        <input
          type='email'
          name='email'
          className='  w-40 md:w-48 h-10   text-sm rounded-full textFieldGoogleForm placeholder p-5 text-center  hover:border-sky-300 focus:outline-sky-300 border-appBlue border-2'
          placeholder='Your email'
        />
      </div>
    </div>
  );
}

export default DonateForm;
