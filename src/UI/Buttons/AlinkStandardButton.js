import React from 'react';

function AlinkStandardButton({ href, text }) {
  return (
    <a
      href={href}
      target='_blank'
      className=' w-32 px-3 py-3 font-bold shadow-lg text-xl text-center bg-appBlue  text-white hover:bg-white hover:text-appBlue transition ease-in-out duration-500 '
      rel='noreferrer'>
      {text}
    </a>
  );
}

export default AlinkStandardButton;
