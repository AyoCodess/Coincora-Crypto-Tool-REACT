import { React } from 'react';
import AlinkStandardButton from '../Buttons/AlinkStandardButton';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Tooltip({ message, title, button }) {
  return (
    <>
      {' '}
      <div className='flex justify-between'>
        <Tippy
          arrow={true}
          content={<span className='text-lg'>{message}</span>}>
          <div className='flex items-center  max-w-max text-left font-medium text-gray- bg-gray-50'>
            {title}
            <div className='ml-2'>
              <InfoOutlinedIcon style={{ color: 'blue', fontSize: '1rem' }} />
            </div>
          </div>
        </Tippy>
        {button && (
          <AlinkStandardButton
            text={'What is RBM'}
            href={'https://www.beta.coincora.com/knowledge-base/what-is-RBM'}
            width={'w-36'}
            height={'h-10'}
            color={'bg-appBlue'}
          />
        )}
      </div>
    </>
  );
}

export default Tooltip;
