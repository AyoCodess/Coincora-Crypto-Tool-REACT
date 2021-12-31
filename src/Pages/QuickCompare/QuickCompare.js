import React from 'react';
import StandardButtonReactRouter from '../../components/Buttons/StandardButtonReactRouter';

function QuickCompare() {
  return (
    <div>
      <div>
        Coming soon. Join our waiting list to be one of the very first to test
        out this new feature when it's available.
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
  );
}

export default QuickCompare;
