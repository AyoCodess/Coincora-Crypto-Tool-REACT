import Link from '@mui/material/Link';

import paypal from '../../assets/other/paypal.jpg';
import coffee from '../../assets/other/coffee.jpg';
import linktree from '../../assets/other/linktree.jpeg';
import github from '../../assets/other/github.jpg';

function SupportMeSection() {
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <div className='text-xl  mt-3 '>
          Click the one of the buttons below, there's no long form, you can
          support me in just couple clicks.
        </div>
        <div className='mt-5 flex flex-col sm:flex-row gap-2'>
          <Link
            href='https://www.paypal.com/donate/?business=VCJPM8B8JADKU&currency_code=USD'
            target='_blank'
            rel='noreferrer'
            type='submit'
            style={{ cursor: 'pointer' }}
            className='inline-block   w-80  hover:text-appBlue '>
            <div className='flex flex-col gap-2  items-center  '>
              <img
                src={paypal}
                alt='coin logo'
                className=' border-2 rounded-md shadow-lg hover:bg-gray-100 transition-all duration-500 ease-in-out'
              />
            </div>
          </Link>
          <Link
            href='https://www.buymeacoffee.com/Ayocodes'
            target='_blank'
            rel='noreferrer'
            type='submit'
            style={{ cursor: 'pointer' }}
            className='inline-block   w-80   hover:text-appBlue '>
            <div className='flex flex-col gap-2 items-center '>
              <img
                src={coffee}
                alt='coin logo'
                className='border-2 rounded-md shadow-lg hover:bg-gray-100 transition-all duration-500 ease-in-out'
              />
            </div>
          </Link>
          <Link
            href='https://github.com/sponsors/AyoCodess?o=esb'
            target='_blank'
            rel='noreferrer'
            type='submit'
            style={{ cursor: 'pointer' }}
            className='inline-block   w-80  hover:text-appBlue '>
            <div className='flex flex-col gap-2  items-center  '>
              <img
                src={github}
                alt='coin logo'
                className=' border-2 rounded-md shadow-lg hover:bg-gray-100 transition-all duration-500 ease-in-out'
              />
            </div>
          </Link>
        </div>
      </div>
      <div className='text-3xl font-bold mt-10 '>More about me</div>

      <div className='flex flex-col gap-2'>
        <div className=' mt-3 '>
          Visit my <span className='text-green-500'>Linktree🌲 </span>URL to
          view my <span className='text-appBlue'>resume, portfolio, blog </span>
          among other links.
        </div>
        <div className='mt-5 flex flex-col sm:flex-row gap-2'>
          <Link
            href='https://linktr.ee/ayocodes'
            target='_blank'
            rel='noreferrer'
            style={{ cursor: 'pointer' }}
            className='inline-block   w-80  border-2 rounded-md shadow-lg hover:text-appBlue hover:bg-gray-100 transition-all duration-500 ease-in-out'>
            <div className='flex flex-col gap-2 justify-center items-center '>
              <img src={linktree} alt='coin logo' className='' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SupportMeSection;
