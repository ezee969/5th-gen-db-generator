import React from 'react';
// Components/ui
import Link from 'next/link';

const Header = () => {
  return (
    <div className='mb-6 flex justify-between'>
      <h2 className='p-auto  text-xl font-medium'>Your models:</h2>
      <Link
        href={'/dashboard/models'}
        className='rounded bg-blue-600 px-6 py-2 font-semibold text-white shadow-lg transition hover:bg-blue-700'
      >
        ADD
      </Link>
    </div>
  );
};

export default Header;
