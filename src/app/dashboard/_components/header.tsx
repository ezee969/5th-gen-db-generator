import React from 'react';
// Components/ui
import Link from 'next/link';

const Header = () => {
  return (
    <div className=' flex justify-between'>
      <h2 className='text-xl'>Your models:</h2>
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
