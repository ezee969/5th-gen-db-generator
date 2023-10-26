import React from 'react';

const Hero = () => {
  return (
    <div className='cotainer mx-auto max-w-5xl pb-24 pt-10'>
      <h1
        className={`mb-6 text-center font-mono text-7xl font-medium text-white`}
      >
        Create your sequelize db models fast and easy
      </h1>
      <h2 className='pb-11 text-center text-2xl font-medium text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vitae
        <br />
        Lorem ipsum dolor sit amet consectetur
      </h2>
      <div className='flex justify-center gap-6'>
        <button className='rounded-sm bg-white  px-7 py-3 text-lg font-semibold tracking-tighter text-slate-900'>
          Lorem, ipsum dolor
        </button>
        <button className='rounded-sm bg-gradient-to-r from-blue-500 to-blue-800 px-7 py-3 text-lg font-semibold tracking-tighter text-white'>
          Lorem, ipsum dolor
        </button>
      </div>
    </div>
  );
};

export default Hero;
