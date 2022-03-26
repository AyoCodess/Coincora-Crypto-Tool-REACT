/* This GeneralModal requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationIcon, XIcon } from '@heroicons/react/outline';

export default function BetaModal() {
  const [openBetaModal, setOpenBetaModal] = useState(true);

  return (
    <Transition.Root show={openBetaModal} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        onClose={setOpenBetaModal}>
        <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
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
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'>
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
            <div className='relative inline-block align-middle bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all  sm:my-8 sm:align-middle sm:max-w-sm md:max-w-lg sm:w-full sm:p-6'>
              <div className=' block absolute top-0 right-0 pt-4 pr-4'></div>
              <div className='flex flex-col items-start'>
                <div className='flex items-center gap-5'>
                  <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10'>
                    <ExclamationIcon
                      className='h-6 w-6 text-orange-600'
                      aria-hidden='true'
                    />
                  </div>
                  <Dialog.Title
                    as='h3'
                    className='text-xl leading-6 font-medium text-black'>
                    Version Beta: V.03
                  </Dialog.Title>
                </div>
                <div className='mt-3  sm:mt-0 sm:ml-1 text-left'>
                  <div className='mt-3'>
                    {/* <p className='text-lg text-black font-semibold mt-2'>
                      <span className='text-red-500'>Update:</span> Form logic
                      is partly broken, currently working on it.
                    </p> */}
                    <p className='text-lg text-black  mt-2'>
                      Coin predict is constantly being updated. Everything
                      within this page is subject to change and is in early
                      stage development. If you have any issues or feedback
                      contact me directly.
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                <button
                  type='button'
                  className='w-full inline-flex justify-center rounded-md text-xl border border-transparent shadow-sm px-4 py-2 bg-orange-500 font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 sm:ml-3 sm:w-auto '
                  onClick={() => setOpenBetaModal(false)}>
                  Got It!
                </button>
                {/* <button
                  type='button'
                  className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm'
                  onClick={() => setOpenBetaModal(false)}>
                  Cancel
                </button> */}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
