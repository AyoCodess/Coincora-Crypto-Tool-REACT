import React from 'react';
import { Link } from 'react-router-dom';

function StandardButtonReactRouter({ text, to, color, width }) {
  return (
    <Link to={to}>
      <div
        className={`${color} ${width} text-center justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-appBlue hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-500`}>
        {text}
      </div>
    </Link>
  );
}

export default StandardButtonReactRouter;
