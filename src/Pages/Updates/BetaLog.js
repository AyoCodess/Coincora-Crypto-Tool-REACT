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
        <h2 className='text-2xl'>Beta v.03 | 26/03/2022</h2>
        <p>
          I've re-designed the front-end and added some useful info to help
          users better understand their predicitons. There is still some
          critical logic and features i need to implement to make the
          predictions much more relevant as it only compares your predicted
          coins market cap to bitcoins current market cap. And not Bitcoins
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
        <h4>Right now you can...</h4>
        <ul>
          <li>
            1) View potential the market cap size of a coin you choose based on
            your price prediction also comparing it bitcoins current marketcap
            which may give you some basic insight.
          </li>
          <li>
            2) Calculate profit and loss of your current investments and any
            future invests you may make very easily. view the app here:
            www.beta.coincora.com
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BetaLog;
