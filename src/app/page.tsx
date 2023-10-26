import Image from 'next/image';
import Link from 'next/link';
import sequelizeLogoSvg from '@/img/sequelize_logo.svg';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
export default function HomePage() {
  return (
    <section>
      <Hero />
      <div className='container mx-auto flex w-[1200px] justify-center rounded border bg-slate-50 '>
        <Image
          className='bg-slate-50'
          alt='Placeholder Image'
          src={sequelizeLogoSvg}
          width={500}
        />
      </div>
      <h2 className='mb-8 pt-40 text-center text-2xl font-semibold tracking-tighter text-gray-200 md:text-6xl lg:text-7xl'>
        Lorem ipsum dolor sit.
      </h2>
      <p className='mx-auto text-center text-xl font-normal leading-relaxed text-gray-300 lg:w-2/3'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
        perferendis Lorem ipsum dolor sit.
      </p>
      <Features />
      <Testimonials />
      <Contact />
    </section>
  );
}
