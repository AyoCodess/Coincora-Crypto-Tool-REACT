import React from 'react';

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
    <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 overflow-x-hidden'>
      {itemData.map((itemData, i) => {
        return (
          <div className='border-2 shadow-xl ' key={i}>
            <a href={itemData.link} target='_blank' rel='noreferrer'>
              <img
                className='cursor-pointer'
                src={itemData.img}
                alt={itemData.alt}
                style={{ objectFit: 'cover', width: '100%', height: '300px' }}
              />
            </a>
            <div className='px-2'>
              <div className='flex justify-between items-center mt-3 mb-2'>
                <div className='p-1  text-2xl text-gray-700 my-2'>
                  {itemData.title}
                </div>
                {itemData.status === 'Must have' && (
                  <div className='mr-4 p-2  rounded-full font-bold bg-red-500 text-white text-center shadow-md'>
                    {itemData.status}
                  </div>
                )}
                {itemData.status === 'Optional' && (
                  <div className='mr-4 p-2  rounded-full font-bold bg-green-500 text-white text-center shadow-md'>
                    {itemData.status}
                  </div>
                )}
              </div>
              <p className='p- text-xl text-gray-500 ml-1'>{itemData.info}</p>
              <div className='flex gap-5 items-center '>
                <a
                  href={itemData.link}
                  target='_blank'
                  className=' ml-1 w-32 text-center px-3 py-3 font-bold  shadow-lg text-xl bg-appBlue my-6  text-white hover:bg-white hover:text-appBlue transition ease-in-out duration-500 '
                  rel='noreferrer'>
                  Get Link
                </a>

                <button
                  className=' w-32 px-3 py-3 font-bold  shadow-lg text-xl bg-gray-400    text-white hover:bg-white hover:text-appBlue transition ease-in-out duration-500 '
                  onClick={(e) => {
                    e.preventDefault();
                    setTitle(itemData.title);
                    setInfo(itemData.moreInfo);
                    setOpen(true);
                    setLink(itemData.link);
                  }}>
                  Why?
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewbiesSort;
