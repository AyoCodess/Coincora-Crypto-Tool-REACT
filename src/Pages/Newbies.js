import { React } from 'react';
import Modal from '../UI/Footer/Modal/Modal';

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
      <div className='grid lg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-4'>
        {itemData.map((itemData) => (
          <div className='border-2'>
            <img src={itemData.img} alt='image' />
            <div className='p-2'>
              <div>{itemData.title}</div>
              <button
                className='p-2 border-2 border-sky-300 rounded-md'
                onClick={(e) => {
                  console.log(title);
                  console.log(info);
                  e.preventDefault();
                  setTitle(itemData.title);
                  setInfo(itemData.info);
                  setOpen(true);
                }}>
                More Info
              </button>
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
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    info: '@bkristastucchio',
    alt: 'image',
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
