import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader'

const LoadingPage = () => {
  return (
    <div className='h-[100vh] w-full' >
      <p className='text-center justify-center absolute top-[50%] left-[50%] text-xl ' >
        <ClipLoader/>
      </p>
    </div>
  );
};

export default LoadingPage;
