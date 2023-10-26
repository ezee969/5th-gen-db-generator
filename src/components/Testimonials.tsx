import Image from 'next/image';
import React from 'react';
import sequelizeSvg from '@/img/sequelize.svg';

const testimonials = [1, 2];
const Testimonials = () => {
  return (
    <div className='mx-auto  flex max-w-6xl gap-5 px-3 pb-32 pt-32 md:px-1'>
      {testimonials.map((testimonial) => (
        <div key={testimonial} className='w-[48%] rounded-md bg-[#101111] p-9'>
          <div className='flex h-16 '>
            <Image alt='' width={60} src={sequelizeSvg} />
          </div>
          <h3 className='pt-3 text-lg font-semibold text-white'>
            Lorem ipsum dolor sit amet
          </h3>
          <p className='value-text text-md  pt-2 text-gray-200'>
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
