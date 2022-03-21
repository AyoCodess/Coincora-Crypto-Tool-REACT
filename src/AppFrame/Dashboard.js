/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import NewsBanner from '../components/NewsBanner/NewsBanner';
import btcFavicon from '../assets/other/btc-favicon8.png';
import SubMenu from './Submenu';

const user = {
  name: 'Ayo Adesanya',
  email: 'tom@example.com',
  imageUrl: 'https://i.imgur.com/bqAMGCx.jpg',
};
const navigation = [
  { name: 'Coin Predict', to: '/coin-predict', current: false },
  { name: 'For Newbies', to: '/newbies', current: false },
  { name: 'Mission', to: '/mission', current: false },
];

const userNavigation = [
  { name: 'Your Profile', to: '#' },
  { name: 'Settings', to: '#' },
  { name: 'Sign out', to: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
  // - News banner options
  let newsLink = '/';
  let mobileHeadline = 'Beta v.1 release - Announcement soon';
  let desktopHeadline =
    "We're excited to release Beta v.1 of the app very soon.";
  const [openNews, setOpenNews] = useState(true);

  return (
    <>
      <Disclosure as='nav' className='bg-appBlue'>
        {({ open, close }) => (
          <>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    <Link to='/'>
                      <img
                        className='h-10 w-10'
                        src={btcFavicon}
                        alt='Workflow'
                      />
                    </Link>
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                      {navigation.map((item, i) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current
                              ? 'bg-indigo-700 text-white '
                              : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                            'px-3 py-2 rounded-md text-sm font-medium  '
                          )}
                          aria-current={item.current ? 'page' : undefined}>
                          {item.name}
                        </Link>
                      ))}
                      <SubMenu button={'Support'} />
                    </div>
                  </div>
                </div>
                <div className='hidden md:block'>
                  <div className='ml-4 flex items-center md:ml-6'>
                    <button
                      type='button'
                      className='p-1 bg-indigo-600 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white'>
                      <span className='sr-only'>View notifications</span>
                      <BellIcon
                        className='h-6 w-6'
                        aria-hidden='true'
                        onClick={() => setOpenNews(true)}
                      />
                    </button>

                    {/* // -  Desktop Profile dropdown  */}
                    {/* <Menu as='div' className='ml-3 relative'>
                      <div>
                        <Menu.Button className='max-w-xs bg-indigo-600 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white'>
                          <span className='sr-only'>Open user menu</span>
                          <img
                            className='h-8 w-8 rounded-full'
                            src={user.imageUrl}
                            alt=''
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'>
                        <Menu.Items className='z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  href={item.to}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}>
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu> */}
                  </div>
                </div>
                <div className='-mr-2 flex md:hidden'>
                  {/* // - Mobile menu button  */}
                  <Disclosure.Button className='bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* // - mobile menu */}
            <Disclosure.Panel className='md:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                {navigation.map((item) => (
                  <Link to={item.to}>
                    <Disclosure.Button
                      key={item.name}
                      as={'button'}
                      href={item.to}
                      className={classNames(
                        item.current
                          ? 'bg-indigo-700 text-white'
                          : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}>
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ))}

                <SubMenu button={'Support'} closeMain={close} />

                <div className='flex w-full justify-end'>
                  <button
                    type='button'
                    className='  mr-3 inline-block p-1 bg-indigo-600 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white'>
                    <span className='sr-only'>View notifications</span>
                    <BellIcon
                      className='h-6 w-6'
                      aria-hidden='true'
                      onClick={() => setOpenNews(true)}
                    />
                  </button>
                </div>

                <div lassName='pt-4 pb-3 border border-indigo-700 w-full'></div>
              </div>

              {/* <div className='pt-4 pb-3 border-t border-indigo-700'>
                <div className='flex items-center px-5'>
                  <div className='flex-shrink-0'>
                    <img
                      className='h-10 w-10 rounded-full'
                      src={user.imageUrl}
                      alt=''
                    />
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium text-white'>
                      {user.name}
                    </div>
                    <div className='text-sm font-medium text-indigo-300'>
                      {user.email}
                    </div>
                  </div>
                  <button
                    type='button'
                    className='ml-auto bg-indigo-600 flex-shrink-0 p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white'>
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='mt-3 px-2 space-y-1'>
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className='block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75'>
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div> */}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <header className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
          <NewsBanner
            openNews={openNews}
            setOpenNews={setOpenNews}
            newsLink={newsLink}
            mobileHeadline={mobileHeadline}
            desktopHeadline={desktopHeadline}
          />
        </div>
      </header>
    </>
  );
}
