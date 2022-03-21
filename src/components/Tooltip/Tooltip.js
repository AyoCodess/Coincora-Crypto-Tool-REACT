import { React } from 'react';
import AlinkStandardButton from '../Buttons/AlinkStandardButton';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { padding } from '@mui/system';

function Tooltip({ message, title, button, textColor }) {
  return (
    <>
      {' '}
      <div className='flex flex-col gap-2  justify-between'>
        <Tippy
          arrow={true}
          content={<span className='text-lg'>{message}</span>}>
          <div
            className={`flex items-center max-w-max text-left font-medium ${textColor}`}>
            {title}
            <div className='ml-2 pb-[0.1rem]'>
              <InfoOutlinedIcon
                style={{
                  color: 'white',
                  fontSize: '1.2rem',
                  padding: '1px 0px 1px 0px',
                }}
              />
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
