import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader'

const Loading = () => {
  return (
    <div className='bg-white flex w-full' >
      <p className='text-center justify-center absolute top-[50%] left-[50%] text-xl ' >
        <ClipLoader/>
      </p>
    </div>
  );
};

export default Loading;
