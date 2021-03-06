import React from 'react';
import AlinkStandardButton from '../../components/Buttons/AlinkStandardButton';
import StandardButton from '../../components/Buttons/StandardButton';
import StatusOptions from './StatusOptions';

function NewbiesSort({
  mustHave,
  optional,
  itemData,
  setInfo,
  setLink,
  setTitle,
  setOpen,
}) {
  // - Sorting Links array depending on sort buttons.

  if (mustHave && !optional) {
    itemData = itemData.filter((option) => option.status === 'Must have');
  }

  if (!mustHave && optional) {
    itemData = itemData.filter((option) => option.status === 'Optional');
  }

  return (
    <div className=' grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-2 overflow-x-hidden'>
      {itemData.map((item, i) => {
        return (
          <div className='border-2 shadow-xl min-w-[300px]' key={i}>
            <a href={item.link} target='_blank' rel='noreferrer'>
              <img
                className='cursor-pointer'
                src={item.img}
                alt={item.alt}
                style={{ objectFit: 'cover', width: '100%', height: '300px' }}
              />
            </a>
            <div className='px-2'>
              <StatusOptions item={item} />
              <p className='ml-1 text-lg text-gray-500 h-[50px]'>{item.info}</p>
              <div className='ml-1 my-6  flex gap-5  '>
                <AlinkStandardButton
                  href={item.link}
                  text={'Get Link'}
                  width={'w-32'}
                  color={'bg-appBlue'}
                  ref={null}
                />
                <StandardButton
                  text={'Why?'}
                  onClick={(e) => {
                    e.preventDefault();
                    setTitle(item.title);
                    setInfo(item.moreInfo);
                    setOpen(true);
                    setLink(item.link);
                  }}
                  color={'bg-gray-400'}
                  width={'w-32'}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewbiesSort;
