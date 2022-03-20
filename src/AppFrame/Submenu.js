/* This SubMenu requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import {
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const solutions = [
  {
    name: 'Support Me',
    description:
      'Get a better understanding of where your traffic is coming from.',
    to: '/support-me',
    icon: ChartBarIcon,
  },
  {
    name: 'Knowledge Base',
    description: 'Speak directly to your customers in a more meaningful way.',
    to: '/knowledge-base',
    icon: CursorClickIcon,
  },
  {
    name: 'Updates',
    description: "Your customers' data will be safe and secure.",
    to: '/updates',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Feature Request',
    description: "Connect with third-party tools that you're already using.",
    to: '/feature-request',
    icon: ViewGridIcon,
  },
  {
    name: 'Legal',
    description:
      'Build strategic funnels that will drive your customers to convert',
    to: '/legal',
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: 'Telegram', href: 'https://t.me/coincora', icon: PlayIcon },
  { name: 'Contact', href: 'mailto:ayo@ayoadesanya.com', icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SubMenu({ button }) {
  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open
                ? 'flex bg-indigo-700 text-white '
                : 'flex text-white hover:bg-indigo-500 hover:bg-opacity-75',
              'px-3 py-2 rounded-md text-sm font-medium  '
            )}>
            <span>{button}</span>
            <ChevronDownIcon
              className={classNames(
                open ? 'text-orange-600' : 'text-orange-400',
                'ml-2 h-5 w-5 group-hover:text-gray-500'
              )}
              aria-hidden='true'
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'>
            <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 sm:mt-6 px-2 w-screen max-w-md sm:px-0'>
              <div className='rounded-lg shadow-lg ring-1 ring-orange ring-opacity-5 overflow-hidden'>
                <div className='relative grid gap-6 bg-appBlue px-5 py-6 sm:gap-8 sm:p-8'>
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-orange-500 transition ease-in-out duration-150'>
                      <item.icon
                        className='flex-shrink-0 h-6 w-6 text-white hover:text-white'
                        aria-hidden='true'
                      />
                      <div className='ml-4'>
                        <p className='text-base font-medium text-white'>
                          {item.name}
                        </p>
                        <p className='mt-1 text-sm text-white'>
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className='px-5 py-5 bg-orange-500 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                  {callsToAction.map((item) => (
                    <div key={item.name} className='flow-root'>
                      <a
                        href={item.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-white hover:bg-indigo-700 transition ease-in-out duration-150'>
                        <item.icon
                          className='flex-shrink-0 h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                        <span className='ml-3'>{item.name}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
