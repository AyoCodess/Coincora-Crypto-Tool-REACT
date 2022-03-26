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
        <StandardButtonReactRouter
          text={'Beta Release Log'}
          width={'w-48'}
          to={'/betalog'}
        />
      </div>
      <div className='flex flex-wrap gap-6 items-start'>
        <div className=' flex flex-col items-center mt-5 w-80 h-[22rem] shadow overflow-hidden border border-gray-200 sm:rounded-lg p-3'>
          <div className='h-[5rem]'>
            <h2 className='text-appBlue text-xl font-bold max-w-max'>
              Building My startup - Update 1
            </h2>
            <h3 className='mt-2 font-bold'>Date: 27/01/2022</h3>
          </div>
          <div className='  border-2 border-gray-200 max-w-max shadow-lg rounded-md'>
            <iframe
              width='285'
              height='185'
              src='https://www.youtube.com/embed/Mv-p3n_k1LM'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
          </div>
        </div>
        <div className=' flex flex-col items-center mt-5 w-80 h-[22rem] shadow overflow-hidden border border-gray-200 sm:rounded-lg p-3'>
          <div className='h-[5rem]'>
            <h2 className='text-appBlue text-xl font-bold  max-w-max'>
              Displaying Crypto Market Data via Dropdown - Top 1000 coins only
            </h2>
            <h3 className='mt-2 font-bold'>Date: 27/01/2022</h3>
          </div>
          <div className=' mt-14 border-2 border-gray-200 max-w-max shadow-lg rounded-md'>
            <iframe
              width='285'
              height='185'
              src='https://www.youtube.com/embed/F1Sc7DD8VqM'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Updates;
