import { React, useState } from 'react';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Tooltip({ message, title }) {
  const [, setOpen] = useState(false);
  return (
    <>
      {' '}
      <Tippy arrow={true} content={<span>{message}</span>}>
        <div className='flex items-center  max-w-max text-left font-medium text-gray- bg-gray-50'>
          {title}
          <div className='ml-2'>
            <InfoOutlinedIcon style={{ color: 'blue', fontSize: '1rem' }} />
          </div>
        </div>
      </Tippy>
    </>
  );
}

export default Tooltip;
