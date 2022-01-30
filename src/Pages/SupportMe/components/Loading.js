import React from 'react';

function Loading() {
  return (
    <div class=' flex justify-center items-center p-5'>
      <div class='animate-spin  rounded-full h-12 w-12 border-b-2 border-appBlue'></div>
    </div>
  );
}

export default Loading;
