import { useContext } from 'react';
import DataContext from '../../../../Context/context';

export default function WhatIsRBM() {
  const {
    top10CryptoRBM,
    top50CryptoRBM,
    top100CryptoRBM,
    top500CryptoRBM,
    top1000CryptoRBM,
    ethRBM,
  } = useContext(DataContext);

  return (
    <>
      <div className='relative bg-white'>
        <div className='lg:absolute lg:inset-0'>
          <div className='lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/3'>
            <img
              className='h-56 w-full object-cover lg:absolute lg:h-full'
              src='https://i.imgur.com/BY3pgOT.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3'>
          <div className='lg:col-start-2 lg:col-end-4 lg:pl-8'>
            <div className='text-base max-w-prose mx-auto lg:max-w-6xl lg:ml-auto lg:mr-0'>
              <h2 className='leading-6 text-indigo-600 font-semibold tracking-wide uppercase'>
                Help Guide
              </h2>
              <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                What’s ‘RBM’ and the ‘Fundamentals’?
              </h3>

              <div className='mt-5 prose prose-blue prose-xl text-black'>
                <div className='p-2 border-2 border-gray-200 rounded-md '>
                  <div className='text-xl font-bold p-4'>Crypto Dictionary</div>
                  <ul role='list'>
                    <li>
                      <span className='font-bold'>Market cap</span> = the total
                      amount of money invested into a coin from retail and
                      institutional investors
                    </li>
                    <li>
                      <sapn className='font-bold'>RBM</sapn> = stands for Ratio
                      to Bitcoin’s Market cap
                    </li>
                    <li>
                      <span className='font-bold'>Altcoins</span> = short for
                      “alternative coins” meaning cryptocurrencies other than
                      Bitcoin
                    </li>
                  </ul>
                </div>
                <p>
                  Bitcoin, since the inception of crypto, has led all other
                  crypto coins.{' '}
                </p>
                <p>In simple terms, if Bitcoin goes up, so do altcoins. </p>
                <p>
                  The same dynamic is true for the opposite direction. If
                  Bitcoin goes down, altcoins drop just as fast, if not faster.
                </p>
                <p>
                  This is why it’s useful to understand Bitcoin’s market cap and
                  how its behaviour influences the rest of the crypto market as
                  a whole.
                </p>
                <p>
                  An altcoin’s current market cap size in relation to bitcoin’s
                  - coupled with its ‘fundamentals’ - should influence how,
                  when, and what amount you choose to invest.
                </p>
                <div className='text-xl font-bold p-4'> The Fundamentals</div>
                <p>
                  Fundamentals are what hold a crypto project together. They
                  help you estimate the authenticity and objective value of a
                  coin by looking at a wide range of factors.
                </p>
                <p>
                  In Coincora’s opinion, investing in crypto should be primarily
                  based on the fundamentals of the coin
                </p>
                <div className='text-xl font-bold p-4'>
                  {' '}
                  How is this useful to me?
                </div>
                <p>
                  The RBM can be a useful tool (depending on your investment
                  strategy) to help you assess if a coin is a worthwhile
                  investment.{' '}
                </p>
                <p>
                  RBM is particularly useful for long-term investment decisions:
                  investments that look at crypto from a 3 to 10-year scope.
                </p>
                <p className='font-bold p-4'>RBM Reference points</p>
                <div
                  style={{
                    boxShadow: 'rgba(17, 12, 46, 0.10) 0px 10px 40px 0px',
                  }}
                  className=' bg-white rounded-lg p-4 flex flex-col mt-5'>
                  <div className=' text-black font-bold mb-4 border-b border-slate-300 pb-4'>
                    Crypto Market Average RBM's as of Today
                  </div>
                  <div className=' flex gap-4 mb-4'>
                    <div
                      className=' font-bold text-green-600
                     mb-2'>
                      Top 10 Crypto RBM
                    </div>
                    <div className=' text-black'>{top10CryptoRBM}%</div>
                  </div>
                  <div className=' flex gap-4 mb-4'>
                    <div
                      className=' font-bold text-green-600
                     mb-2'>
                      Top 50 Crypto RBM
                    </div>
                    <div className=' text-black'>{top50CryptoRBM}%</div>
                  </div>
                  <div className='flex gap-4  mb-4'>
                    <div
                      className=' font-bold text-green-600
                     mb-2'>
                      Top 100 Crypto RBM
                    </div>
                    <div className=' text-black'>{top100CryptoRBM}%</div>
                  </div>
                  <div className=' flex gap-4 mb-4'>
                    <div
                      className=' font-bold text-green-600
                     mb-2'>
                      Top 500 Crypto RBM
                    </div>
                    <div className=' text-black'>{top500CryptoRBM}%</div>
                  </div>
                  <div className='flex gap-4  mb-4'>
                    <div
                      className=' font-bold text-green-600
                     mb-2'>
                      Top 1000 Crypto RBM
                    </div>
                    <div className=' text-black'>{top1000CryptoRBM}%</div>
                  </div>
                  <div className='flex gap-4 mb-4 items-center'>
                    <div
                      className=' font-bold text-green-600
                     mb-2 border-t-2 pt-3 border-slate-200'>
                      Ethereum RBM
                    </div>
                    <div className=' text-black'>{ethRBM}%</div>
                  </div>
                </div>
                <p
                  className=' text-2xl mt-10
                 font-bold'>
                  Examples
                </p>
                <p className='text-2xl font-bold  text-appBlue'>
                  {' '}
                  How NOT to use RBM
                </p>
                <p className='italic text-2xl'>In another universe…</p>
                <p>
                  <b> Bitcoin’s market cap is $1,000,000</b>
                  <br />
                  <b> Random Coin’s market cap is $10,000</b>
                </p>
                <div className='p-2 border-2 border-gray-200 rounded-md '>
                  <div className='text-xl font-bold p-4'>
                    {' '}
                    Random coin Fundamentals
                  </div>
                  <ul role='list' className='list-none'>
                    <li>
                      <span className='font-bold  text-red-500'>
                        Ref Flag -{' '}
                      </span>{' '}
                      Anonymous team
                    </li>
                    <li>
                      <sapn className='font-bold text-red-500'>
                        Red Flag -{' '}
                      </sapn>{' '}
                      Seeming pressure to buy now from all angles.
                    </li>
                    <li>
                      <span className='font-bold text-red-500'>
                        Red Flag -{' '}
                      </span>{' '}
                      Unrealistic Promises at launch and overselling.
                    </li>
                    <li>
                      <span className='font-bold text-red-500'>
                        Red Flag -{' '}
                      </span>{' '}
                      Aggressive YouTube or Telegram Accounts.
                    </li>
                    <li>
                      <span className='font-bold text-red-500'>
                        Red Flag -{' '}
                      </span>{' '}
                      Aggressive free giveaway of coins at pre-launch.
                    </li>
                    <li>
                      <span className='font-bold text-red-500'>
                        Red Flag -{' '}
                      </span>{' '}
                      Has been in an unsustainable uptrend in price in the last
                      few weeks or even days.
                    </li>
                    <li>
                      <span className='font-bold text-yellow-500'>
                        Yellow Flag -{' '}
                      </span>{' '}
                      Only 3 months old.
                    </li>
                  </ul>
                </div>
                <p className='text-xl font-bold px-4 mt-10 '>Assessment </p>
                <p>
                  <b>Random coin’s RBM is 0.1%</b> and is in the top 1000
                  average crypto range <b>{top1000CryptoRBM}%.</b> Indicating a
                  very small marketcap size when compared to Bitcoin.
                </p>
                <p>
                  Based on the RBM alone this looks extremely promising at face
                  value and suggests it has a lot of room to grow and could be a
                  lucrative investment.
                </p>
                <p>
                  But if we take into consideration its fundamentals, we get a
                  vastly different picture.
                </p>
                <p>
                  There could be a whole host of potential other red and yellow
                  flags, especially with a name like “random coin”.
                </p>
                <p>
                  Always ensure you DYOR (do your own research) and consult
                  experts or people with crypto experience you trust before you
                  make investment decisions.
                </p>
                <p>RBM should never be used in isolation. </p>
                <p className='font-bold'>
                  Use Coin Predict in Coincora to assess a coin's fundamentals
                  along with the RBM to help you assess any coin from our
                  current list.
                </p>
                <p className='text-2xl font-bold mt-10 text-appBlue'>
                  {' '}
                  How NOT to use RBM
                </p>
                <p className='italic text-2xl'>In another universe…</p>
                <p>
                  <b> Bitcoin’s market cap is $1,000,000</b>
                  <br />
                  <b> Crytek's market cap is $40,000</b>
                </p>
                <div className='p-2 border-2 border-gray-200 rounded-md '>
                  <div className='text-xl font-bold p-4'>
                    {' '}
                    Crytek coin Fundamentals
                  </div>
                  <ul role='list' className='list-none'>
                    <li>
                      <span className='font-bold  text-green-500'>
                        Green Flag -{' '}
                      </span>{' '}
                      Crytek coin has been around for 18 months and is active.
                    </li>
                    <li>
                      <sapn className='font-bold text-green-500'>
                        Green Flag -{' '}
                      </sapn>{' '}
                      The team is public and relatively accessible online.
                    </li>
                    <li>
                      <span className='font-bold text-green-500'>
                        Green Flag -{' '}
                      </span>{' '}
                      They have partnerships and ties with some top 100 crypto
                      projects.
                    </li>
                    <li>
                      <span className='font-bold text-green-500'>
                        Green Flag -{' '}
                      </span>{' '}
                      They solve a unique problem and are 1 of only 3 projects
                      trying to solve the same problem.
                    </li>
                    <li>
                      <span className='font-bold text-green-500'>
                        Green Flag -{' '}
                      </span>{' '}
                      They are the 2nd most popular of the three, with some
                      institutional investors showing some interest.
                    </li>
                    <li>
                      <span className='font-bold text-green-500'>
                        Green Flag -{' '}
                      </span>{' '}
                      They have a working beta product.
                    </li>
                  </ul>
                </div>
                <p className='text-xl font-bold mt-10 px-4 '>Assessment </p>
                <p>
                  <b>Crytek's RBM is 4%.</b> Comparing it to our crypto market
                  RBM reference list, it sits somewhere between the top 10 to 50
                  crypto rankings.
                </p>

                <p>
                  This indicates Crytek is possibly established and is
                  potentially a relatively safer investment than other projects
                  with a smaller RBM's, especially when taking into
                  consideration its fundamentals.
                </p>
                <p>
                  When it comes to using coin predict to asses the Crytek's
                  future potential, Crytek's current RBM will help you create
                  more realistic predictions depending on your time frames.
                </p>
                <p>
                  Crytek has very strong fundamentals which indicate a less
                  risker opportunity. With strong fundamentals and an RBM with
                  still room to room to grow, it seems promising.
                </p>
                <p>
                  Quick side note, Ethereum's current RBM is {ethRBM}% … Could
                  Crytek be the next ETH? Can it grow as large? What industry is
                  Crytek in? is it comparable to Ethereum?
                </p>
                <p> Can it become a network? DYOR.</p>

                <p>
                  Coincora helps you make a quick & effective initial assessment
                  of cryptocurrencies depending on your investment strategy.
                </p>
                <p className='font-bold'>
                  Check out Coin predict to assess your Crypto picks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
