import React from 'react';
import { Link } from 'react-router-dom';

function StandardButtonReactRouter({ text, to, color, width, py }) {
  return (
    <Link to={to}>
      <div
        className={`${width} ${py} text-center font-bold  shadow-lg text-xl ${color} text-white hover:bg-white hover:text-appBlue transition ease-in-out duration-500`}>
        {text}
      </div>
    </Link>
  );
}

export default StandardButtonReactRouter;
