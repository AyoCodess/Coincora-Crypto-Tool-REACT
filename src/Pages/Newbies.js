import { React } from 'react';
import Modal from '../UI/Modal/Modal';

export default function Newbies({
  open,
  setOpen,
  cancelButtonRef,
  title,
  setTitle,
  info,
  setInfo,
}) {
  return (
    <>
      <h2 className='text-4xl mb-6'>Get Started</h2>
      <p className='text-2xl mb-6'>
        Get best start in crypto today by tooling up the right way.
      </p>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {itemData.map((itemData) => (
          <div className='border-2 shadow  '>
            <a href={itemData.link} target='_blank' rel='noreferrer'>
              <img
                className='cursor-pointer'
                src={itemData.img}
                alt={itemData.alt}
                style={{ objectFit: 'cover', width: '100%', height: '400px' }}
              />
            </a>
            <div className='p-2'>
              <div className='p-1  text-3xl text-gray-700'>
                {itemData.title}
              </div>
              <p className='p-1 text-2xl text-gray-500'>{itemData.info}</p>
              <div className='flex justify-evenly items-center'>
                <a
                  href={itemData.link}
                  target='_blank'
                  className='px-6 py-4 font-bold border-2 text-2xl bg-appBlue rounded-md my-6  text-white hover:bg-white hover:text-appBlue transition ease-in-out duration-500 '
                  rel='noreferrer'>
                  Get Link
                </a>

                <button
                  className='px-6 py-4 font-bold border-2 text-2xl bg-gray-500 rounded-md my-6  text-white hover:bg-white hover:text-appBlue transition ease-in-out duration-500 '
                  onClick={(e) => {
                    e.preventDefault();
                    setTitle(itemData.title);
                    setInfo(itemData.moreInfo);
                    setOpen(true);
                  }}>
                  More Into
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        title={title}
        set={setTitle}
        info={info}
        setInfo={setInfo}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

const itemData = [
  {
    img: 'https://i.imgur.com/5gnYPMh.png',
    title: 'Binance Exchange',
    info: 'Sign up and get a discount on all transactions',
    moreInfo: 'more info',
    alt: 'test',
    link: 'https://accounts.binance.com/en/register?ref=37749695',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    info: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    info: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    info: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    info: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    info: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    info: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    info: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    info: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    info: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    info: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    info: '@southside_customs',
  },
];
