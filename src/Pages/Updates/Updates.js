import React from 'react';
import StandardButtonReactRouter from '../../components/Buttons/StandardButtonReactRouter';

function Updates() {
  return (
    <article className=''>
      <h1 className='text-3xl font-bold'>Latest Updates</h1>
      <div className='mt-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5'>
        <p>View features that are planned to be implemented</p>
        <StandardButtonReactRouter
          text={'Planned Features'}
          width={'w-48'}
          to={'/todo'}
        />
      </div>
      <div className='mt-5 shadow overflow-hidden border border-gray-200 sm:rounded-lg p-4'>
        <h2 className='text-appBlue text-xl font-bold border-b-2 border-gray-400 pb-2 max-w-max'>
          Displaying Crypto Market Data via Dropdown - Top 1000 coins only
        </h2>
        <h3 className='mt-2 font-bold'>Date: 27/01/2022</h3>
        <div className='mt-5 border-2 border-gray-200 max-w-max shadow-lg rounded-md'>
          <iframe
            width='325'
            height='185'
            src='https://www.youtube.com/embed/F1Sc7DD8VqM'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </div>
      </div>
    </article>
  );
}

export default Updates;
