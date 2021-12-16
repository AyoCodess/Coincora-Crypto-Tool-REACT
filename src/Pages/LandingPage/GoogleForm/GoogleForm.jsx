import React from 'react';

function GoogleForm() {
  return (
    <>
      <div
        className='flex justify-center items-center'
        style={{ height: '100vh' }}>
        <form
          action=''
          className='flex flex-col justify-center items-center gap-5'>
          <label>Enter Email</label>
          <input type='text' style={{ border: '2px blue solid' }} />
          <button>Join the waiting list</button>
        </form>
      </div>
    </>
  );
}

export default GoogleForm;
