import { React } from 'react';

import 'tippy.js/dist/tippy.css';

function ErrorTooltip({ message }) {
  return (
    <>
      {/* // - Full error messages in tooltip (not in use because it takes up too much space) */}
      {/* <div className='position absolute top-[-10px] left-[45px] p-3 w-[80%] shadow-md bg-violet-800 text-white rounded-md sm:hidden'>
        <div className='font-bold'>Error</div>
         <p>{message}</p> 
      </div>  */}

      <span className=' flex items-center text-bold justify-center text-center shadow-md h-6 w-12 bg-opacity-90 rounded-full overflow-hidden bg-red-500 text-sm text-white sm:hidden'>
        Error
      </span>
    </>
  );
}

export default ErrorTooltip;
