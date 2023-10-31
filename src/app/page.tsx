import Image from 'next/image';
import sequelizeLogoSvg from '@/assets/sequelizejs-logo.svg';
import Hero from './_components/page/hero';
import Features from './_components/page/features';
import Testimonials from './_components/page/testimonials';
import Contact from './_components/page/contact';

export default function HomePage() {
  return (
    <section>
      <Hero />
      <div className='container mx-auto flex w-[1100px] justify-center rounded border bg-slate-50 '>
        <Image
          className='bg-slate-50'
          alt='Sequelize logo'
          src={sequelizeLogoSvg}
          width={550}
          height={150}
        />
      </div>
      <Features />
      <Testimonials />
      <Contact />
    </section>
  );
}
