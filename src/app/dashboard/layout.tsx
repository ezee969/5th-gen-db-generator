import React from 'react';
// Types
import { ReactNode } from 'react';
// Utils
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard of DB Forge',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/');
  }

  return (
    <main className='flex flex-col justify-center gap-10 '>
      <div className='bg-white text-center'>
        <h1 className='text-4xl font-semibold text-slate-800'>
          <span className='font-mono'>Welcome:</span> {session.user?.name}
        </h1>
      </div>
      <div className='flex flex-col px-96'>{children}</div>
    </main>
  );
};

export default DashboardLayout;
