/* This example requires Tailwind CSS v2.0+ */
import { useContext, useRef, React, useState } from 'react';
import useOnClickOutside from '../../UI/Footer/helperFuncs/useOnClickOutisde';
import DataContext from '../../Context/context';
import StandardButtonTypeButton from '../Buttons/StandardButtonTypeButton';
import CoinLogoDisplay from '../CoinPredictForm/CoinLogoDisplay';

export default function Example() {
  const {
    data,
    setData,
    setCoinName,
    openDropdown,
    setOpenDropdown,
    selectedFromDropdown,
    setSelectedFromDropdown,
    searchedFromDropdown,
    setSearchedFromDropdown,
  } = useContext(DataContext);

  const inputField = useRef(null);

  useOnClickOutside(inputField, () => setOpenDropdown(false));

  const [event, setEvent] = useState(null);

  return (
    <>
      {data && (
        <>
          <div className='flex flex-col w-full sm:w-1/2'>
            <div className='flex items-center gap-2'>
              <CoinLogoDisplay
                height={'h-8'}
                width={'w-8'}
                data={data}
                selectedFromDropdown={selectedFromDropdown}
              />

              <input
                type='text'
                className='p-2  border-[0.1rem] text-left w-full bg-transparent placeholder-white focus:ring-1 focus:ring-orange-500 focus:border-orange-500   '
                placeholder='e.g search "btc" or "bitcoin"'
                onChange={(e) => {
                  setEvent(e.target.value);
                  setOpenDropdown(false);

                  data.filter((coin) => {
                    if (coin.symbol === 'opct') console.log(coin);
                    return coin;
                  });

                  let searchedFromDropdown = data.filter((coin) => {
                    if (
                      e.target.value.toLowerCase() ===
                        coin.name.toLowerCase() ||
                      e.target.value.toLowerCase() === coin.symbol.toLowerCase()
                    ) {
                      setOpenDropdown(true);
                      setSelectedFromDropdown(coin);
                    }
                  });
                  return setSearchedFromDropdown(searchedFromDropdown);
                }}
              />
            </div>

            <div className='w-full' ref={inputField}>
              <div className='mt-1 relative '>
                {openDropdown && (
                  <ul
                    className='  absolute z-10  h-12 w-full bg-white shadow-lg max-h-56  rounded-md text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
                    role='listbox'>
                    {data.map((coin, i) => {
                      if (
                        event.toLowerCase() === coin.name.toLowerCase() ||
                        event.toLowerCase() === coin.symbol.toLowerCase()
                      ) {
                        return (
                          <li
                            placeholder='Keep Typing...'
                            key={coin.name}
                            onClick={() => {
                              setSelectedFromDropdown(coin);
                              setOpenDropdown(false);
                            }}
                            className='text-gray-900 cursor-default select-none h-full  relative py-2 pl-3 pr-9 hover:bg-appBlue  hover:text-white'
                            id='listbox-option-0'>
                            <div className='flex items-center pt-1'>
                              <img
                                src={coin.image}
                                alt=''
                                className='flex-shrink-0 h-6 w-6 rounded-full'
                              />
                              <span className='font-normal ml-3 block truncate '>
                                {coin.name}
                              </span>
                            </div>
                            <span className='text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4'>
                              <svg
                                className='h-5 w-5'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'>
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                />
                              </svg>
                            </span>
                          </li>
                        );
                      }
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {!data && <div className='text-white font-semibold'>Loading list...</div>}
    </>
  );
}
