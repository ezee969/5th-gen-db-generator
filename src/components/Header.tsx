import React from 'react';
// Components/ui
import HeaderLink from './HeaderLink';
// Utils
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
// Ui
import { unbounded } from '@/app/fonts';
import UserMenu from './UserMenu/UserMenu';
import Link from 'next/link';

const Header = async () => {
  const session = await getServerSession(options);
  console.log(session?.user);

  return (
    <header className='w-full bg-slate-800 px-6 py-8'>
      <nav className='container mx-auto flex items-center justify-between'>
        <Link href={'/'}>
          <h1
            className={`text-4xl font-extrabold uppercase tracking-wider ${unbounded.className}`}
          >
            DB Forge
          </h1>
        </Link>
        <ul className='flex items-center gap-10'>
          {session ? (
            <>
              <HeaderLink href='/dashboard'>Dashboard</HeaderLink>
              <UserMenu user={session.user} />
            </>
          ) : (
            <Link
              href='/api/auth/signin?callbackUrl=/'
              className='rounded border border-red-500 bg-red-700 px-4 py-2 font-semibold text-white hover:border-transparent hover:bg-white hover:text-red-700'
            >
              Log In
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
