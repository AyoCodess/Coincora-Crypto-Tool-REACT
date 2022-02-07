/* This example requires Tailwind CSS v2.0+ */
import { useContext, useRef, React } from 'react';
import useOnClickOutside from '../../UI/Footer/helperFuncs/useOnClickOutisde';
import DataContext from '../../Context/context';
import StandardButtonTypeButton from '../Buttons/StandardButtonTypeButton';

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

  const inputField = useRef();

  useOnClickOutside(inputField, () => setOpenDropdown(false));

  console.log(data);

  return (
    <>
      {data && (
        <>
          <div className='flex flex-col w-1/2'>
            <div className=' flex items-center gap-2 relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
              <i>
                <span className='flex items-center w-6'>
                  <img
                    src={
                      !selectedFromDropdown
                        ? data[0].image
                        : selectedFromDropdown.image
                    }
                    alt=''
                    className='flex-shrink-0 h-6 w-6 rounded-full'
                  />
                </span>
                <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'></span>
              </i>
              <input
                type='text'
                className='pt-1'
                onChange={(e) => {
                  setOpenDropdown(true);

                  let searchedFromDropdown = data.filter((coin) => {
                    if (
                      e.target.value.toLowerCase() ===
                        coin.name.toLowerCase() ||
                      e.target.value.toLowerCase() === coin.symbol.toLowerCase()
                    ) {
                      setSelectedFromDropdown(coin);
                    }
                    return console.log(null); // - produces warning if i do not return anything.
                  });
                  return setSearchedFromDropdown(searchedFromDropdown);
                }}
              />
              {/* <div className='ml-6'>
                <StandardButtonTypeButton
                  text={'Reset'}
                  onClick={(e) => {
                    setCoinName('Coin');
                  }}
                />
              </div> */}
            </div>

            <div className='w-full' ref={inputField}>
              <div className='mt-1 relative '>
                {openDropdown && (
                  <ul
                    className='  absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
                    role='listbox'>
                    {searchedFromDropdown.map((coin, i) => {
                      return (
                        <li
                          onClick={() => {
                            setSelectedFromDropdown(coin);
                            setOpenDropdown(false);
                          }}
                          className='text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-appBlue hover:text-white'
                          id='listbox-option-0'>
                          <div className='flex items-center'>
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
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {!data && <div>Loading list...</div>}
    </>
  );
}
