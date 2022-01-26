import React from 'react';

function AlinkStandardButton({ href, text, width, color, ref, onClick }) {
  return (
    <a
      style={{ cursor: 'pointer', textDecoration: 'none' }}
      onClick={onClick}
      href={href}
      ref={ref}
      target='_blank'
      className={`${color} ${width} font-medium text-center justify-center py-2 px-4 border border-transparent shadow-sm text-lg rounded-md text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-500`}
      rel='noreferrer'>
      {text}
    </a>
  );
}

export default AlinkStandardButton;
