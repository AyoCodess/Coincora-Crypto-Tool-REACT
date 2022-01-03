import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AlinkStandardButton from '../Buttons/AlinkStandardButton';

export default function CookiesBanner({ open, setOpen }) {
  const getLink = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        style={{ zIndex: '9000' }}
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        initialFocus={getLink}
        onClose={setOpen}>
        <div className=''>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='inline-block h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
            <div className=' h-[290px] sm:h-[210px] md:h-[170px] lg:h-[150px] inline-block align-bottom bg-white rounded-lg text-left  shadow-xl transform transition-all '>
              <div className='bg-white'>
                <div className='flex flex-col md:flex-row  gap-5 h-[140px] items-start md:items-center'>
                  <div className=' ml-4 text-left '>
                    <Dialog.Title
                      as='h3'
                      className='text-xl  leading-6  text-gray-900 mb-3 mt-3 lg:mt-0'>
                      Cookies & Legal
                    </Dialog.Title>
                    <div className=''>
                      <p className='text-sm text-gray-700'>
                        We use cookies to improve user experience, for web
                        analytics and marketing purposes. You can block saving
                        cookies to your hard drive at any time, by changing the
                        settings of your web browser. By continuing to use this
                        website without disabling cookies in your web browser
                        you agree to saving cookies to your hard drive. Learn
                        more in our Privacy Policy.
                      </p>
                    </div>
                  </div>
                  <div className=' flex flex-row-reverse gap-3 ml-4 md:ml-0 mr-5'>
                    <button
                      onClick={() => setOpen(false)}
                      style={{
                        border: ' 2px solid blue',
                        padding: '5px',
                        width: '8rem',
                      }}>
                      I Understand
                    </button>

                    <button
                      style={{ border: ' 2px solid blue', padding: '5px' }}>
                      Legal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
