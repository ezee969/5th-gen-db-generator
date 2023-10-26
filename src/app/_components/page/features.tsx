import Image from 'next/image';
import React from 'react';
import sequelizeSvg from '@/img/sequelize.svg';

const features = [1, 2, 3, 4];
const Features = () => {
  return (
    <div className='container mx-auto flex max-w-4xl flex-wrap justify-center gap-5 px-3 pb-24 pt-12 md:px-1'>
      {features.map((feature) => (
        <div key={feature} className='w-[48%] rounded-md bg-[#101111] p-8'>
          <Image alt='' height={1} className='w-10' src={sequelizeSvg} />
          <h3 className='pt-3 text-lg font-semibold text-white'>
            Lorem ipsum dolor sit amet
          </h3>
          <p className='value-text text-md fkrr1 pt-2 text-gray-200'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Features;
