import React from 'react';
import AlinkStandardButton from '../../components/Buttons/AlinkStandardButton';
import StandardButtonReactRouter from '../../components/Buttons/StandardButtonReactRouter';

function BetaLog() {
  return (
    <div className='prose-lg xl:prose-xl'>
      <div className='flex justify-between sm:items-center mb-10 pb-5 border-b border-slate-400'>
        <span className='text-3xl font-bold'>Beta Release Log</span>
        <StandardButtonReactRouter text={'Back'} to={'/updates'} />
      </div>
      <div>
        <h2 className='text-2xl'>Beta v.0.3.1 | 26/03/2022</h2>
        <p>
          I've re-designed the front-end and added some useful info to help
          users better understand their predictions. There is still some
          critical logic and features I need to implement to make the
          predictions much more relevant as it only compares your predicted
          coins market cap to bitcoins current market cap. And not to Bitcoins
          potential future market caps based on several time frames relating to
          your prediction. This is a feature i've planned for&nbsp; but need
          sponsorship.
          <a
            className='underline'
            target='_blank'
            rel='noreferrer'
            href='https://www.beta.coincora.com/todo'>
            here
          </a>
        </p>
        <h4 className='font-semibold'>Right now you can...</h4>
        <ul>
          <li>
            <b>1)</b> View potential the market cap size of a coin you choose
            based on your price prediction also comparing it bitcoins current
            marketcap which may give you some basic insight.
          </li>
          <li>
            <b>2)</b> Automatically Calculate current profit and loss based off
            your current investments very quickly.
          </li>
          <li>
            <b>3) </b>Automatically Calculate potential profit off your future
            price prediction which can optionally include your current profit
            and loss.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BetaLog;
