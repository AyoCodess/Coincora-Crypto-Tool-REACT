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
      <div className='flex flex-col lg:flex-row justify-between '>
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
    info: 'Invest in the future',
    moreInfo:
      'Binance features great and many emerging crypto projects. If you have some experience, you need this exchange.',
    alt: 'binance logo',
    link: 'https://accounts.binance.com/en/register?ref=37749695',
    status: 'Must have',
  },
  {
    img: 'https://i.imgur.com/wnhi5Ho.png',
    title: 'Coinbase Exchange',
    info: 'Making buying crypto super simple',
    moreInfo:
      'if you want to invest in the safer more established coins, easily via simple app experience, Coinbase is the way to go.',
    alt: 'coinbase logo',
    link: 'https://www.coinbase.com/join/adesan_c9?src=ios-link',
    status: 'Optional',
  },
  {
    img: 'https://i.imgur.com/YUegSx8.png',
    title: 'Coingecko',
    info: 'Track your crypto portfolio comprehensively',
    moreInfo:
      'This is the best investment portfolio tracker available right now.',
    alt: 'coingecko logo',
    link: 'https://www.coingecko.com/',
    status: 'Must have',
  },
  {
    img: 'https://i.imgur.com/uhdaSOe.png',
    title: 'CoinMarketCap',
    info: 'Get free crypto and track your portfolio',
    moreInfo:
      "CoinMarketCap is owned and ran by Binance. If you subscribe you can get notified on 'air drops' (free crypto giveaways). You can also track your coins here similar to coingecko but not as comprehensive.",
    alt: 'coinmarketcap logo',
    link: 'https://coinmarketcap.com/invite?ref=94PLEUUN',
    status: 'Must have',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    info: 'Sign up and get a discount on all transactions',
    moreInfo: 'more info',
    alt: 'test',
    link: 'https://accounts.binance.com/en/register?ref=37749695',
    status: 'Optional',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    info: 'Sign up and get a discount on all transactions',
    moreInfo: 'more info',
    alt: 'test',
    link: 'https://accounts.binance.com/en/register?ref=37749695',
    status: 'Optional',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    info: 'Sign up and get a discount on all transactions',
    moreInfo: 'more info',
    alt: 'test',
    link: 'https://accounts.binance.com/en/register?ref=37749695',
    status: 'Optional',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    info: 'Sign up and get a discount on all transactions',
    moreInfo: 'more info',
    alt: 'test',
    link: 'https://accounts.binance.com/en/register?ref=37749695',
    status: 'Must have',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    info: 'Sign up and get a discount on all transactions',
    moreInfo: 'more info',
    alt: 'test',
    link: 'https://accounts.binance.com/en/register?ref=37749695',
    status: 'Optional',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    info: 'Sign up and get a discount on all transactions',
    moreInfo: 'more info',
    alt: 'test',
    link: 'https://accounts.binance.com/en/register?ref=37749695',
    status: 'Optional',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    info: 'Sign up and get a discount on all transactions',
    moreInfo: 'more info',
    alt: 'test',
    link: 'https://accounts.binance.com/en/register?ref=37749695',
    status: 'Must have',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    info: 'Sign up and get a discount on all transactions',
    moreInfo: 'more info',
    alt: 'test',
    link: 'https://accounts.binance.com/en/register?ref=37749695',
    status: 'Must have',
  },
];
