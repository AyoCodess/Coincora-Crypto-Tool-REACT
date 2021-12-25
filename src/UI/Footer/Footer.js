import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div
      className='pt-3 negativeFooterMargin'
      style={{
        borderTop: '1px solid #E0DFE0',
        position: 'fixed',
        bottom: '0',
      }}>
      <div className='px-5'>
        <iframe
          className=''
          src='https://www.github.com/sponsors/AyoCodess/button'
          title='Sponsor AyoCodess'
          height='35'
          width='116'
          style={{
            border: '0',
            marginBottom: '15px',
          }}></iframe>
      </div>
    </div>
  );
}

export default Footer;
