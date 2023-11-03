import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <section className='relative pb-24'>
      <div className='mx-auto max-w-6xl px-4 text-center sm:px-6'>
        <div className='py-24 md:py-36'>
          <h1 className='mb-5 font-mono text-6xl font-bold text-white'>
            Subscribe to our newsletter
          </h1>
          <h1 className='mb-9 text-2xl font-semibold text-gray-200'>
            Enter your email address and get our newsletters straight away.
          </h1>
          <input
            type='email'
            placeholder='jack@example.com'
            name='email'
            className='mt-2 w-1/4 rounded-md border border-gray-600 bg-black py-3 pl-2 pr-2 font-semibold text-gray-800 hover:border-gray-700'
          />
          <Link
            className='ml-2 mt-2 inline-flex transform items-center rounded-lg border bg-transparent bg-white px-14 py-3 font-medium text-black transition duration-500 ease-in-out'
            href='/'
          >
            <span className='justify-center'>Subscribe</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
