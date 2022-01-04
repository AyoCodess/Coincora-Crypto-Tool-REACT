import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function CookiesBanner({
  open,
  setOpen,
  setUnderstand,
  understand,
}) {
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
            <div className=' h-[270px] sm:h-[210px] md:h-[170px] lg:h-[120px] inline-block align-bottom bg-white rounded-lg text-left  shadow-xl transform transition-all '>
              <div className='bg-white'>
                <div className='flex flex-col md:flex-row  gap-5 h-[140px]  items-start md:items-center p-3'>
                  <div className=' ml-4 text-left '>
                    <p className='text-sm text-gray-700 mt-3 md:mt-8 lg:mt-0 '>
                      We use cookies to improve user experience, for web
                      analytics and marketing purposes. You can block saving
                      cookies to your hard drive at any time, by changing the
                      settings of your web browser. By continuing to use this
                      website without disabling cookies in your web browser you
                      agree to saving cookies to your hard drive. Learn more in
                      our Privacy Policy.
                    </p>
                  </div>
                  <div className=' flex flex-row-reverse gap-3 ml-4 md:ml-0 mr-5 sm:mt-5 md:mt-0'>
                    <button
                      className='bg-appBlue font-medium text-center justify-center py-2 px-4 border border-transparent shadow-sm text-md rounded-md text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-500'
                      onClick={() => {
                        setOpen(false);
                        // - Local storage expires after 7 days.
                        const today = new Date();
                        const expire = new Date();
                        expire.setDate(today.getDate() + 7);
                        localStorage.setItem('understand', expire);
                        setUnderstand(true);
                      }}
                      style={{
                        width: '8rem',
                      }}>
                      I Understand
                    </button>

                    <button className='bg-appBlue font-medium text-center justify-center py-2 px-4 border border-transparent shadow-sm text-md rounded-md text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-500'>
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
