import { React, useState } from 'react';
import StandardButtonReactRouter from '../../components/Buttons/StandardButtonReactRouter';

function QuickCompare({ coinName }) {
  const [complete, setComeplete] = useState(false);
  return (
    <>
      {!complete && (
        <div>
          <div>
            Coming soon. Join our waiting list to be one of the very first to
            test out this new feature when it's available.
          </div>
          <div className='my-6'>
            <StandardButtonReactRouter
              to={'/'}
              text={'Join the waiting list'}
              width={'w-[250px]'}
              color={'bg-appBlue'}
            />
          </div>
        </div>
      )}

      {complete && (
        <div className=' py-2 flex flex-col gap-2 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
          <div id='1'>Compare individual RMB to {coinName} and compare</div>
          <p>It's useful two coins RMB in the sam industry</p>
          <div>Select Coin</div> <div>current RMB %</div>
          <div>{coinName}'s</div> <div> current RMB %</div>
          <div>{coinName}'s</div> <div> predicted RMB %</div>
        </div>
      )}
    </>
  );
}

export default QuickCompare;
