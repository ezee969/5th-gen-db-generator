import React from 'react';
// Components/ui
import HeaderLink from './HeaderLink';

const Header = () => {
  return (
    <header className='w-full px-6 py-8'>
      <nav className='container mx-auto flex items-center justify-between'>
        <div>
          <h1 className='text-4xl font-extrabold uppercase tracking-wider'>
            DB Forge
          </h1>
        </div>
        <ul className='flex space-x-6'>
          <HeaderLink href='/home'>Home</HeaderLink>
          <HeaderLink href='/login'>Log In</HeaderLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
