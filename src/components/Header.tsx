import React from 'react';
// Components/ui
import HeaderLink from './HeaderLink';
// Utils
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
// Ui
import { unbounded } from '@/app/fonts';

const Header = async () => {
  const session = await getServerSession(options);
  console.log(session?.user);

  return (
    <header className='w-full bg-slate-800 px-6 py-8'>
      <nav className='container mx-auto flex items-center justify-between'>
        <div>
          <h1
            className={`text-4xl font-extrabold uppercase tracking-wider ${unbounded.className}`}
          >
            DB Forge
          </h1>
        </div>
        <ul className='flex space-x-6'>
          {session ? (
            <>
              <HeaderLink href='/dashboard'>Dashboard</HeaderLink>
              <HeaderLink href='/api/auth/signout?callbackUrl=/'>
                Sign out
              </HeaderLink>
            </>
          ) : (
            <HeaderLink href='/api/auth/signin?callbackUrl=/'>
              Log In
            </HeaderLink>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
