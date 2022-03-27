/* This SubMenu requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ChatAlt2Icon,
  ChevronDownIcon,
  SupportIcon,
} from '@heroicons/react/solid';
import {
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  MailIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import {
  Book,
  Group,
  Help,
  HelpCenter,
  HelpOutline,
  Mail,
  MinimizeRounded,
  People,
  ReadMore,
  RequestPage,
} from '@mui/icons-material';

const solutions = [
  {
    name: 'Support Me',
    description: 'Support my work directly.',
    to: '/support-me',
    icon: People,
  },
  {
    name: 'Knowledge Base',
    description: 'Confused? This will help.',
    to: '/knowledge-base',
    icon: Book,
  },
  {
    name: 'Updates',
    description: 'The Latest and planned feature updates.',
    to: '/updates',
    icon: RefreshIcon,
  },
  {
    name: 'Feature Request',
    description: 'Got an idea for the app? Share it!',
    to: '/feature-request',
    icon: HelpOutline,
  },
  {
    name: 'Legal',
    description: 'The important formalities.',
    to: '/legal',
    icon: ShieldCheckIcon,
  },
];
const callsToAction = [
  { name: 'Telegram', href: 'https://t.me/coincora', icon: ChatAlt2Icon },
  { name: 'Contact', href: 'mailto:ayo@ayoadesanya.com', icon: MailIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SubMenu({ button, closeMain }) {
  return (
    <Popover className='relative'>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={classNames(
              open
                ? 'flex text-white '
                : 'flex text-white hover:bg-appBlue hover:bg-opacity-75',
              'px-3 py-1 rounded-md text-sm font-medium  '
            )}>
            <span className='text-[1rem] md:text-sm'>{button}</span>
            <ChevronDownIcon
              className={classNames(
                open ? 'text-white' : 'text-gray-200',
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
              <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                <div
                  className='relative grid gap-6 bg-white
                 px-5 py-6 sm:gap-8 sm:p-8'>
                  {solutions.map((item) => (
                    <Link
                      onClick={() => {
                        close();
                        closeMain();
                      }}
                      key={item.name}
                      to={item.to}
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'>
                      <item.icon
                        className='flex-shrink-0 h-6 w-6 text-gray-600 hover:text-white'
                        aria-hidden='true'
                      />
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-600'>
                          {item.name}
                        </p>
                        <p className='mt-1 text-sm text-gray-600'>
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className='px-5 py-5 bg-appBlue space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                  {callsToAction.map((item) => (
                    <div key={item.name} className='flow-root'>
                      <a
                        onClick={() => {
                          close();
                        }}
                        href={item.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-white transition ease-in-out duration-150'>
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
