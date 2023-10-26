import React from 'react';
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

const DasboardPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/');
  }

  return <div>HomePage</div>;
};

export default DasboardPage;
