import { React, useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import NewbiesSort from './NewbiesSort';

export default function Newbies({
  open,
  setOpen,
  title,
  setTitle,
  info,
  setInfo,
  link,
  setLink,
}) {
  const [mustHave, setMustHave] = useState(false);
  const [optional, setOptional] = useState(false);

  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between overflow-x-hidden '>
        <h2 className='text-3xl mb-6'>Get Started</h2>
        <div className='flex items-center mb-8  lg:mb-5'>
          <div className='mr-5 text-xl '>Sort by:</div>
          <div className='flex  gap-3 text-xl'>
            <button
              onClick={() => {
                setMustHave(true);
                setOptional(false);
              }}
              type='button'
              className='p-2 border-2 border-gray-300 shadow-md hover:text-appBlue transition duration-500 ease-in-out'>
              Must have
            </button>
            <button
              onClick={() => {
                setMustHave(false);
                setOptional(true);
              }}
              type='button'
              className='p-2 border-2 border-gray-300 shadow-md hover:text-appBlue transition duration-500 ease-in-out'>
              Optional
            </button>
            <button
              onClick={() => {
                setMustHave(false);
                setOptional(false);
              }}
              type='button'
              className='p-2 border-2 border-gray-300 shadow-md hover:text-appBlue transition duration-500 ease-in-out'>
              All
            </button>
          </div>
        </div>
      </div>
      <p className='text-2xl mb-6'>
        Get best start in crypto today by tooling up the right way.
      </p>
      <NewbiesSort
        mustHave={mustHave}
        optional={optional}
        itemData={itemData}
        setInfo={setInfo}
        setLink={setLink}
        setTitle={setTitle}
        setOpen={setOpen}
      />
      <Modal
        title={title}
        set={setTitle}
        info={info}
        setInfo={setInfo}
        open={open}
        setOpen={setOpen}
        link={link}
      />
    </>
  );
}

const itemData = [
  {
    img: 'https://i.imgur.com/5gnYPMh.png',
    title: 'Binance Exchange',
    info: 'Offering a wide range crypto assets.',
    moreInfo:
      'Binance features great and many emerging crypto projects. If you have some experience, you need this exchange.',
    alt: 'binance logo',
    link: 'https://accounts.binance.com/en/register?ref=37749695',
    status: 'Must have',
  },
  {
    img: 'https://i.imgur.com/wnhi5Ho.png',
    title: 'Coinbase Exchange',
    info: 'Making buying crypto super simple.',
    moreInfo:
      'if you want to invest in the safer more established coins, easily via simple app experience, Coinbase is the way to go.',
    alt: 'coinbase logo',
    link: 'https://www.coinbase.com/join/adesan_c9?src=ios-link',
    status: 'Must have',
  },
  {
    img: 'https://i.imgur.com/YUegSx8.png',
    title: 'Coingecko',
    info: 'Track your crypto portfolio comprehensively.',
    moreInfo:
      'This is the best investment portfolio tracker available right now.',
    alt: 'coingecko logo',
    link: 'https://www.coingecko.com/',
    status: 'Must have',
  },
  {
    img: 'https://i.imgur.com/uhdaSOe.png',
    title: 'CoinMarketCap',
    info: 'Get free crypto and track your portfolio.',
    moreInfo:
      "CoinMarketCap is owned and ran by Binance. If you subscribe to their platform you can get notified on 'air drops' (free crypto giveaways). You can also track your coins here similar to coingecko but not as comprehensive.",
    alt: 'coinmarketcap logo',
    link: 'https://coinmarketcap.com/invite?ref=94PLEUUN',
    status: 'Must have',
  },
  {
    img: 'https://i.imgur.com/ppQvdwK.png',
    title: 'Celsius',
    info: 'Earn up to 16% a year on all your crypto.',
    moreInfo:
      'We use and recommend Celsius to earn compounding interest on your crypto investment portfolio.',
    alt: 'Celsius logo',
    link: 'https://celsiusnetwork.app.link/111453048f',
    status: 'Optional',
  },
  {
    img: 'https://i.imgur.com/TrnVE8N.png',
    title: 'Kucoin Exchange',
    info: 'Find the most new and promising crypto projects',
    moreInfo:
      'Kucoin is infamous for launching coins that go on to do great things',
    alt: 'kucoin',
    link: 'https://www.kucoin.plus/land/register/r/22raNy7',
    status: 'Must have',
  },
  {
    img: 'https://i.imgur.com/6qokTZk.png',
    title: 'Token Sniffer',
    info: 'Quickly detect scam coins',
    moreInfo:
      'This tool helps you detect scam coins by simply supplying the coin address to auto-generate a useful report about the coin integrity.',
    alt: 'token sniffer',
    link: 'https://tokensniffer.com/',
    status: 'Optional',
  },
  {
    img: 'https://i.imgur.com/fiIXkNx.png',
    title: 'Trust Wallet',
    info: 'Store all your crypto in one place',
    moreInfo:
      'An off exchange multi-wallet. You have total control over your crypto.',
    alt: 'trust wallet logo',
    link: 'hhttps://trustwallet.com/',
    status: 'Optional',
  },
  {
    img: 'https://i.imgur.com/5Bz2aih.png',
    title: 'Wise',
    info: 'Crypto friendly international bank account',
    moreInfo: 'Our recommend bank account to use for crypto transactions',
    alt: 'wise logo',
    link: 'https://wise.com/invite/iwh/ayo-olaa',
    status: 'Optional',
  },
  {
    img: 'https://i.imgur.com/TPPxPX2.png',
    title: 'Revolut',
    info: 'Crypto friendly international bank account',
    moreInfo: 'Use for crypto transactions',
    alt: 'Revolut logo',
    link: 'https://revolut.com/referral/ayoi8wid!DEC1AR',
    status: 'Optional',
  },
  {
    img: 'https://i.imgur.com/2p0quQ5.png',
    title: 'Crypto Panic',
    info: 'Curated crypto news',
    moreInfo: 'Our recommend and central hub for breaking crypto news',
    alt: 'Crypto Panic logo',
    link: 'https://cryptopanic.com/',
    status: 'Optional',
  },
];
