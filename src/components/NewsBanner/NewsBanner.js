import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import StandardButtonDarkBG from '../Buttons/StandardButtonDarkBG';

export default function NewsBanner({
  openNews,
  setOpenNews,
  newsLink,
  mobileHeadline,
  desktopHeadline,
}) {
  const closeModal = () => {
    setOpenNews(false);
  };
  return (
    <Transition
      show={openNews}
      enter='transition-opacity'
      enterFrom='opacity-0 '
      enterTo='opacity-100'
      leave='transition-opacity ease-in-out duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'>
      <div className='bg-appBlue mb-5 rounded-lg shadow-md animated fadeInUp'>
        <div className=' py-3 px-3 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between flex-wrap'>
            <div className='w-0 flex-1 flex items-center'>
              <span className='flex p-2 rounded-lg bg-white'>
                <SpeakerphoneIcon
                  className='h-6 w-6 text-white'
                  aria-hidden='true'
                  style={{ color: '#0753FF' }}
                />
              </span>
              <p className='ml-3 font-medium text-white truncate'>
                <span className='md:hidden'>{mobileHeadline}</span>
                <span className='hidden md:inline'>{desktopHeadline}</span>
              </p>
            </div>
            <div className='order-3 mt-4 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto  '>
              <Link to={newsLink}>
                <StandardButtonDarkBG
                  onClick={() => setOpenNews(false)}
                  text={'Learn More'}
                  color={'bg-white'}
                  width={'w-full'}>
                  Learn more
                </StandardButtonDarkBG>
              </Link>
            </div>
            <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
              <button
                type='button'
                className='-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'>
                <span className='sr-only'>Dismiss</span>
                <XIcon
                  className='h-6 w-6 text-white'
                  aria-hidden='true'
                  onClick={closeModal}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
